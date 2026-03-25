import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import imageCompression from 'browser-image-compression';
import {
  ArrowLeft, Building2, MapPin, Landmark, FileText,
  Save, X, AlertCircle, Upload, File as FileIcon,
  Trash2, PackageCheck, Layers, Check,
} from 'lucide-react';

import api, { apiUpload, getApiErrorMessage } from '../../../../lib/api';
import { useAuth } from '../../../../contexts/AuthContext';
import {
  Container, PageHeader, BackButton, TitleGroup, PageTitle, PageSubtitle,
  Card, CardHeader, CardIconWrapper, CardTitle,
  FormGrid, FullSpan, Field, Label, Input, Select, Textarea,
  FieldError, FieldHint,
  BankSection, BankSectionTitle,
  ModeToggle, ModeButton,
  PlansGrid, PlanCard, PlanCardHeader, PlanName, PlanPrice,
  PlanDescription, PlanFlagsPreview, PlanFlagTag,
  FlagsGrid, FlagCheckCard, FlagCheckbox, FlagCheckInfo,
  FlagCheckName, FlagCheckPrice,
  TotalBox, TotalLabel, TotalValue,
  DocumentsGrid, DocumentUploadCard, DocumentUploadLabel,
  DropZone, DropZoneIcon, DropZoneText, DropZoneSubtext,
  FileInfo, FileInfoText, FileName, FileMeta, RemoveFileButton,
  FormFooter, CancelButton, SaveButton, Spinner,
  UploadProgressBar, UploadProgressFill, UploadProgressLabel,
  SkeletonBar, SkeletonCard, Divider, EmptyState, EmptyText,
} from './styles';

// ── Caches em memória ─────────────────────────────────────────────────────────
let plansCache = null;
let flagsCache = null;
let partnersCache = null;

// ── Função de validação de CNPJ ─────────────────────────────────────────────
const isValidCNPJ = (cnpjDigits) => {
  if (!cnpjDigits) return false;
  const cnpj = cnpjDigits.padStart(14, '0'); // Garante 14 dígitos
  if (/^(\d)\1+$/.test(cnpj)) return false; // Todos dígitos iguais

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
};

// ── Schema Yup ────────────────────────────────────────────────────────────────
const createSchema = yup.object({
  corporate_name: yup
    .string()
    .required('A razão social é obrigatória.')
    .max(200, 'Razão social deve ter no máximo 200 caracteres.'),

  cnpj: yup
    .string()
    .required('O CNPJ é obrigatório.')
    .transform((v) => v?.replace(/\D/g, '') || '')
    .test('cnpj-valido', 'CNPJ inválido (dígitos verificadores não conferem).', (v) => {
      if (!v) return false; // Já obrigatório, mas por segurança
      return v.length === 14 && isValidCNPJ(v);
    }),

  email: yup
    .string()
    .required('O e-mail é obrigatório.')
    .nullable()
    .transform((v) => v || null)
    .email('Informe um e-mail válido.'),

  state_registration: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(15, 'Inscrição estadual deve ter no máximo 15 caracteres.'),

  trade_name: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(200, 'Nome fantasia deve ter no máximo 200 caracteres.'),

  phone: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(20, 'Telefone deve ter no máximo 20 caracteres.'),

  benefit_type: yup
    .string()
    .required('O tipo de benefício é obrigatório.')
    .oneOf(['food', 'meal', 'both'], 'Tipo inválido.'),

  notes: yup
    .string()
    .nullable()
    .transform((v) => v || null),

  partner_id: yup
    .string()
    .nullable()
    .transform((v) => v || null),

  address_street: yup
    .string().nullable().transform((v) => v || null)
    .max(255, 'Logradouro deve ter no máximo 255 caracteres.'),

  address_number: yup
    .string().nullable().transform((v) => v || null)
    .max(10, 'Número deve ter no máximo 10 caracteres.'),

  address_complement: yup
    .string().nullable().transform((v) => v || null)
    .max(100, 'Complemento deve ter no máximo 100 caracteres.'),

  address_neighborhood: yup
    .string().nullable().transform((v) => v || null)
    .max(100, 'Bairro deve ter no máximo 100 caracteres.'),

  address_city: yup
    .string().nullable().transform((v) => v || null)
    .max(100, 'Cidade deve ter no máximo 100 caracteres.'),

  address_state: yup
    .string().nullable().transform((v) => v || null)
    .max(2, 'UF deve ter 2 caracteres.'),

  address_zip: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .test('cep-valido', 'CEP inválido. Use o formato 00000-000.', (v) => {
      if (!v) return true;
      return v.replace(/\D/g, '').length === 8;
    }),

  bank_bank_name: yup
    .string().nullable().transform((v) => v || null)
    .max(100, 'Nome do banco deve ter no máximo 100 caracteres.'),

  bank_agency: yup
    .string()
    .max(10, 'Agência deve ter no máximo 10 caracteres.')
    .when('bank_bank_name', {
      is: (v) => !!v,
      then: (s) => s.required('Agência é obrigatória quando o banco é informado.'),
      otherwise: (s) => s.nullable().transform((v) => v || null),
    }),

  bank_agency_digit: yup
    .string().nullable().transform((v) => v || null)
    .max(2, 'Dígito deve ter no máximo 2 caracteres.'),

  bank_account: yup
    .string()
    .max(20, 'Conta deve ter no máximo 20 caracteres.')
    .when('bank_bank_name', {
      is: (v) => !!v,
      then: (s) => s.required('Conta é obrigatória quando o banco é informado.'),
      otherwise: (s) => s.nullable().transform((v) => v || null),
    }),

  bank_account_digit: yup
    .string().nullable().transform((v) => v || null)
    .max(2, 'Dígito deve ter no máximo 2 caracteres.'),

  bank_account_type: yup
    .string()
    .when('bank_bank_name', {
      is: (v) => !!v,
      then: (s) => s.required('Tipo é obrigatório.').oneOf(['checking', 'savings'], 'Tipo inválido.'),
      otherwise: (s) => s.nullable().transform((v) => v || null),
    }),
});

// ── Constantes ────────────────────────────────────────────────────────────────

const DOCUMENT_SLOTS = [
  { key: 'contrato', type: 'company_document', label: 'Contrato / Doc. da Empresa', fieldName: 'contrato' },
  { key: 'proof_of_address', type: 'proof_of_address', label: 'Comprovante de Endereço', fieldName: 'documentos', docIndex: 0 },
  { key: 'bank_account_proof', type: 'bank_account_proof', label: 'Comprovante Bancário', fieldName: 'documentos', docIndex: 1 },
  { key: 'card_machine_proof', type: 'card_machine_proof', label: 'Comprovante de Maquininha', fieldName: 'documentos', docIndex: 2 },
];

const BENEFIT_OPTIONS = [
  { value: 'food', label: 'Vale Alimentação' },
  { value: 'meal', label: 'Vale Refeição' },
  { value: 'both', label: 'Alimentação + Refeição' },
];

const ACCOUNT_TYPE_OPTIONS = [
  { value: 'checking', label: 'Conta Corrente' },
  { value: 'savings', label: 'Conta Poupança' },
];

const UF_OPTIONS = [
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN',
  'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO',
];

// ── Compressão de imagens ─────────────────────────────────────────────────────
// PDFs passam direto. Imagens são reduzidas para no máximo 1MB / 1920px.
const compressImage = async (file) => {
  if (!file.type.startsWith('image/')) return file;
  try {
    const compressed = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      fileType: file.type,
    });
    return new File([compressed], file.name, { type: file.type });
  } catch {
    return file; // fallback: envia o original se a compressão falhar
  }
};

// ── Masks ─────────────────────────────────────────────────────────────────────

const maskCNPJ = (v = '') => {
  const d = v.replace(/\D/g, '').slice(0, 14);
  if (d.length <= 2) return d;
  if (d.length <= 5) return `${d.slice(0, 2)}.${d.slice(2)}`;
  if (d.length <= 8) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`;
  if (d.length <= 12) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8)}`;
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`;
};

const maskPhone = (v = '') => {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const maskCEP = (v = '') => {
  const d = v.replace(/\D/g, '').slice(0, 8);
  if (d.length <= 5) return d;
  return `${d.slice(0, 5)}-${d.slice(5)}`;
};

const onlyDigits = (v = '') => v.replace(/\D/g, '');
const formatBRL = (n = 0) => Number(n).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const formatFileSize = (bytes) => {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// ── Skeleton ──────────────────────────────────────────────────────────────────

function CreateSkeleton() {
  const fields = (n) => Array.from({ length: n }).map((_, i) => (
    <Field key={i}>
      <SkeletonBar $w="45%" $h="11px" />
      <SkeletonBar $h="44px" style={{ borderRadius: '8px', marginTop: '2px' }} />
    </Field>
  ));
  return (
    <Container>
      <PageHeader>
        <SkeletonBar $w="80px" $h="36px" style={{ borderRadius: '6px' }} />
        <TitleGroup>
          <SkeletonBar $w="180px" $h="28px" />
          <SkeletonBar $w="120px" $h="14px" style={{ marginTop: '4px' }} />
        </TitleGroup>
      </PageHeader>
      <SkeletonCard><SkeletonBar $w="35%" $h="20px" /><Divider /><FormGrid>{fields(6)}</FormGrid></SkeletonCard>
      <SkeletonCard><SkeletonBar $w="40%" $h="20px" /><Divider /><SkeletonBar $h="120px" style={{ borderRadius: '8px' }} /></SkeletonCard>
    </Container>
  );
}

// ── Slot de documento ─────────────────────────────────────────────────────────

function DocumentSlot({ slot, selectedFile, onFileSelect, onClearFile, disabled }) {
  const inputRef = useRef(null);
  const hasFile = !!selectedFile;

  return (
    <DocumentUploadCard $hasFile={hasFile}>
      <DocumentUploadLabel>{slot.label}</DocumentUploadLabel>

      {hasFile && (
        <FileInfo>
          <FileIcon size={16} style={{ color: '#B45A14', flexShrink: 0 }} />
          <FileInfoText>
            <FileName>{selectedFile.name}</FileName>
            <FileMeta>{formatFileSize(selectedFile.size)} · Será comprimido ao enviar</FileMeta>
          </FileInfoText>
          <RemoveFileButton type="button" onClick={() => onClearFile(slot.key)} disabled={disabled}>
            <Trash2 size={13} />
          </RemoveFileButton>
        </FileInfo>
      )}

      <DropZone htmlFor={`doc-input-${slot.key}`}>
        <DropZoneIcon $hasFile={hasFile}><Upload size={22} /></DropZoneIcon>
        <DropZoneText>{hasFile ? 'Trocar arquivo' : 'Selecionar arquivo'}</DropZoneText>
        <DropZoneSubtext>PDF, JPG ou PNG · máx. 3 MB</DropZoneSubtext>
      </DropZone>

      <input
        ref={inputRef}
        id={`doc-input-${slot.key}`}
        type="file"
        accept="application/pdf,image/jpeg,image/png"
        style={{ display: 'none' }}
        disabled={disabled}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          if (file.size > 3 * 1024 * 1024) {
            toast.error('Arquivo muito grande. O limite é 3 MB.');
            return;
          }
          onFileSelect(slot.key, file);
          e.target.value = '';
        }}
      />
      <FieldHint>Imagens serão comprimidas automaticamente antes do envio.</FieldHint>
    </DocumentUploadCard>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────

export default function ClientCreatePage() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  const [plans, setPlans] = useState([]);
  const [flags, setFlags] = useState([]);
  const [partners, setPartners] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadPhase, setUploadPhase] = useState(''); // 'compressing' | 'uploading' | 'processing'
  const [mode, setMode] = useState('plan');
  const [selectedPlanId, setSelectedPlanId] = useState('');
  const [selectedFlags, setSelectedFlags] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState({});
  const [cnpjDisplay, setCnpjDisplay] = useState('');
  const cnpjDebounceRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createSchema),
    defaultValues: {
      corporate_name: '',
      cnpj: '',
      email: '',
      state_registration: '',
      trade_name: '',
      phone: '',
      benefit_type: 'food',
      notes: '',
      partner_id: '',
      address_street: '',
      address_number: '',
      address_complement: '',
      address_neighborhood: '',
      address_city: '',
      address_state: '',
      address_zip: '',
      bank_bank_name: '',
      bank_agency: '',
      bank_agency_digit: '',
      bank_account: '',
      bank_account_digit: '',
      bank_account_type: 'checking',
    },
  });

  const bankName = watch('bank_bank_name');
  const bankFilled = !!bankName;

  // ── Busca dados externos com cache ────────────────────────────────────────
  useEffect(() => {
    const fetchAll = async () => {
      setLoadingData(true);
      try {
        await Promise.all([
          (!plansCache || plansCache.length === 0)
            ? api.get('/plans?limit=100')
              .then(({ data }) => { plansCache = data.data ?? []; })
              .catch(() => { toast.error('Erro ao carregar planos.'); plansCache = []; })
            : Promise.resolve(),

          (!flagsCache || flagsCache.length === 0)
            ? api.get('/flags?limit=100')
              .then(({ data }) => { flagsCache = data.data ?? []; })
              .catch(() => { toast.error('Erro ao carregar bandeiras.'); flagsCache = []; })
            : Promise.resolve(),

          (isAdmin && (!partnersCache || partnersCache.length === 0))
            ? api.get('/users?role=partner&limit=100')
              .then(({ data }) => { partnersCache = data.data ?? []; })
              .catch(() => { partnersCache = []; })
            : Promise.resolve(),
        ]);
      } finally {
        setPlans(plansCache ?? []);
        setFlags(flagsCache ?? []);
        setPartners(partnersCache ?? []);
        setLoadingData(false);
      }
    };
    fetchAll();
  }, []);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleFileSelect = (slotKey, file) => {
    setSelectedFiles((prev) => ({ ...prev, [slotKey]: file }));
  };

  const handleClearFile = (slotKey) => {
    setSelectedFiles((prev) => {
      const next = { ...prev };
      delete next[slotKey];
      return next;
    });
  };

  const handleCnpjChange = (e) => {
    const raw = e.target.value;
    setCnpjDisplay(maskCNPJ(raw));
    if (cnpjDebounceRef.current) clearTimeout(cnpjDebounceRef.current);
    cnpjDebounceRef.current = setTimeout(() => {
      setValue('cnpj', onlyDigits(raw), { shouldValidate: true });
    }, 400);
  };

  // ── Totais ────────────────────────────────────────────────────────────────
  const selectedFlagObjects = flags.filter((f) => selectedFlags.includes(f.id));
  const totalIndividual = selectedFlagObjects.reduce((acc, f) => acc + parseFloat(f.price || 0), 0);
  const selectedPlan = plans.find((p) => p.id === selectedPlanId);

  // ── Submit ────────────────────────────────────────────────────────────────
  const onSubmit = async (formData) => {
    if (mode === 'plan' && !selectedPlanId) {
      toast.error('Selecione um plano para continuar.');
      return;
    }
    if (mode === 'individual' && selectedFlags.length === 0) {
      toast.error('Selecione ao menos uma bandeira.');
      return;
    }

    setIsSubmitting(true);
    setUploadProgress(0);
    setUploadPhase('compressing');

    try {
      // ── Fase 1: Compressão em paralelo ─────────────────────────────────
      const hasFiles = Object.keys(selectedFiles).length > 0;
      const compressedFiles = {};

      if (hasFiles) {
        const entries = Object.entries(selectedFiles);
        for (let i = 0; i < entries.length; i++) {
          const [key, file] = entries[i];
          compressedFiles[key] = await compressImage(file);
          setUploadProgress(Math.round(((i + 1) / entries.length) * 20));
        }
      }

      setUploadPhase('uploading');

      // ── Fase 2: Payload ───────────────────────────────────────────────
      const textPayload = {
        corporate_name: formData.corporate_name,
        cnpj: onlyDigits(formData.cnpj || cnpjDisplay),
        benefit_type: formData.benefit_type,
        trade_name: formData.trade_name || undefined,
        email: formData.email || undefined,
        state_registration: formData.state_registration || undefined,
        phone: onlyDigits(formData.phone) || undefined,
        notes: formData.notes || undefined,
        partner_id: formData.partner_id || undefined,
        address_street: formData.address_street || undefined,
        address_number: formData.address_number || undefined,
        address_complement: formData.address_complement || undefined,
        address_neighborhood: formData.address_neighborhood || undefined,
        address_city: formData.address_city || undefined,
        address_state: formData.address_state || undefined,
        address_zip: formData.address_zip || undefined,
        ...(mode === 'plan'
          ? { plan_id: selectedPlanId }
          : { flag_ids: selectedFlags }
        ),
        ...(bankFilled ? {
          bank_name: formData.bank_bank_name,
          agency: formData.bank_agency,
          agency_digit: formData.bank_agency_digit || undefined,
          account: formData.bank_account,
          account_digit: formData.bank_account_digit || undefined,
          account_type: formData.bank_account_type,
        } : {}),
      };

      Object.keys(textPayload).forEach(
        (k) => textPayload[k] === undefined && delete textPayload[k]
      );

      const formDataObj = new FormData();
      formDataObj.append('data', JSON.stringify(textPayload));

      if (compressedFiles['contrato']) {
        formDataObj.append('contrato', compressedFiles['contrato']);
      }
      ['proof_of_address', 'bank_account_proof', 'card_machine_proof'].forEach((key) => {
        if (compressedFiles[key]) formDataObj.append('documentos', compressedFiles[key]);
      });

      // ── Fase 3: Upload com progresso (apiUpload = timeout 120s) ──────
      const { data } = await apiUpload.post('/onboarding', formDataObj, {
        onUploadProgress: (e) => {
          // Progresso do network: mapeado de 20% a 90%
          const pct = Math.round((e.loaded / (e.total || 1)) * 70);
          setUploadProgress(20 + pct);
          if (e.loaded >= e.total) setUploadPhase('processing');
        },
      });

      setUploadProgress(100);

      toast.success(
        `Cliente cadastrado! Protocolo: ${data.data?.client?.protocol ?? ''}`,
        { autoClose: 5000 }
      );

      const clientId = data.data?.client?.id;
      navigate(clientId ? `/clientes/${clientId}` : '/clientes', { replace: true });

    } catch (error) {
      setUploadProgress(0);
      setUploadPhase('');
      toast.error(getApiErrorMessage(error, 'Erro ao cadastrar cliente.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Label dinâmico do botão ───────────────────────────────────────────────
  const submitLabel = () => {
    if (!isSubmitting) return <><Save size={15} />Cadastrar Cliente</>;
    if (uploadPhase === 'compressing') return <><Spinner />Comprimindo imagens…</>;
    if (uploadPhase === 'processing') return <><Spinner />Processando…</>;
    return <><Spinner />Enviando… {uploadProgress}%</>;
  };

  // ── Render ────────────────────────────────────────────────────────────────
  if (loadingData) return <CreateSkeleton />;

  const err = (field) => errors[field]?.message;

  return (
    <>
      <Container>

        {/* ── Header ──────────────────────────────────────────── */}
        <PageHeader>
          <BackButton type="button" onClick={() => navigate('/clientes')}>
            <ArrowLeft size={15} /> Voltar
          </BackButton>
          <TitleGroup>
            <PageTitle>Novo Cliente</PageTitle>
            <PageSubtitle>Preencha os dados para iniciar o onboarding</PageSubtitle>
          </TitleGroup>
        </PageHeader>

        <form id="create-client-form" onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* ── Card: Dados da Empresa ───────────────────────── */}
          <Card style={{ marginBottom: '24px' }}>
            <CardHeader>
              <CardIconWrapper><Building2 size={18} /></CardIconWrapper>
              <CardTitle>Dados da Empresa</CardTitle>
            </CardHeader>
            <FormGrid>

              <Field>
                <Label htmlFor="corporate_name">Razão Social *</Label>
                <Input id="corporate_name" type="text" placeholder="Razão social completa"
                  $hasError={!!err('corporate_name')} disabled={isSubmitting}
                  {...register('corporate_name')} />
                {err('corporate_name') && <FieldError><AlertCircle size={11} />{err('corporate_name')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input id="cnpj" type="text" placeholder="00.000.000/0001-00"
                  value={cnpjDisplay} $hasError={!!err('cnpj')} disabled={isSubmitting}
                  onChange={handleCnpjChange} />
                {err('cnpj') && <FieldError><AlertCircle size={11} />{err('cnpj')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="trade_name">Nome Fantasia</Label>
                <Input id="trade_name" type="text" placeholder="Nome fantasia (opcional)"
                  disabled={isSubmitting} {...register('trade_name')} />
              </Field>

              <Field>
                <Label htmlFor="state_registration">Inscrição Estadual</Label>
                <Input id="state_registration" type="text" placeholder="Inscrição estadual (opcional)"
                  $hasError={!!err('state_registration')} disabled={isSubmitting}
                  {...register('state_registration')} />
                {err('state_registration') && <FieldError><AlertCircle size={11} />{err('state_registration')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" placeholder="(00) 00000-0000"
                  $hasError={!!err('phone')} disabled={isSubmitting}
                  {...register('phone', {
                    onChange: (e) => setValue('phone', maskPhone(e.target.value)),
                  })} />
                {err('phone') && <FieldError><AlertCircle size={11} />{err('phone')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="email">E-mail *</Label>
                <Input id="email" type="email" placeholder="contato@empresa.com.br"
                  $hasError={!!err('email')} disabled={isSubmitting}
                  {...register('email')} />
                {err('email') && <FieldError><AlertCircle size={11} />{err('email')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="benefit_type">Tipo de Benefício *</Label>
                <Select id="benefit_type" $hasError={!!err('benefit_type')}
                  disabled={isSubmitting} {...register('benefit_type')}>
                  {BENEFIT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </Select>
                {err('benefit_type') && <FieldError><AlertCircle size={11} />{err('benefit_type')}</FieldError>}
              </Field>

              {isAdmin && (
                <Field>
                  <Label>Parceiro responsável</Label>
                  <Select {...register('partner_id')} disabled={loadingData}>
                    <option value="">Nenhum</option>
                    {partners.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </Select>
                </Field>
              )}

              <FullSpan>
                <Field>
                  <Label htmlFor="notes">Observações</Label>
                  <Textarea id="notes" placeholder="Observações internas…"
                    disabled={isSubmitting} {...register('notes')} />
                  <FieldHint>Visível apenas para a equipe interna.</FieldHint>
                </Field>
              </FullSpan>

            </FormGrid>
          </Card>

          {/* ── Card: Contratação ────────────────────────────── */}
          <Card style={{ marginBottom: '24px' }}>
            <CardHeader>
              <CardIconWrapper><PackageCheck size={18} /></CardIconWrapper>
              <CardTitle>Contratação</CardTitle>
            </CardHeader>

            <ModeToggle>
              <ModeButton type="button" $active={mode === 'plan'} disabled={isSubmitting}
                onClick={() => { setMode('plan'); setSelectedFlags([]); }}>
                <PackageCheck size={16} /> Escolher Plano
              </ModeButton>
              <ModeButton type="button" $active={mode === 'individual'} disabled={isSubmitting}
                onClick={() => { setMode('individual'); setSelectedPlanId(''); }}>
                <Layers size={16} /> Bandeiras Individuais
              </ModeButton>
            </ModeToggle>

            {mode === 'plan' && (
              <>
                {plans.length === 0 ? (
                  <EmptyState><EmptyText>Nenhum plano ativo encontrado.</EmptyText></EmptyState>
                ) : (
                  <PlansGrid>
                    {plans.map((plan) => {
                      const isSelected = selectedPlanId === plan.id;
                      return (
                        <PlanCard key={plan.id} $selected={isSelected}
                          onClick={() => !isSubmitting && setSelectedPlanId(plan.id)}>
                          <PlanCardHeader>
                            <PlanName>{plan.name}</PlanName>
                            <PlanPrice>{formatBRL(plan.price)}</PlanPrice>
                          </PlanCardHeader>
                          {plan.description && <PlanDescription>{plan.description}</PlanDescription>}
                          {plan.flags?.length > 0 && (
                            <PlanFlagsPreview>
                              {plan.flags.map((f) => <PlanFlagTag key={f.id}>{f.name}</PlanFlagTag>)}
                            </PlanFlagsPreview>
                          )}
                        </PlanCard>
                      );
                    })}
                  </PlansGrid>
                )}
                {selectedPlan && (
                  <TotalBox>
                    <TotalLabel>Plano selecionado: {selectedPlan.name}</TotalLabel>
                    <TotalValue>{formatBRL(selectedPlan.price)}</TotalValue>
                  </TotalBox>
                )}
              </>
            )}

            {mode === 'individual' && (
              <>
                <FieldHint style={{ marginBottom: '12px', display: 'block' }}>
                  Selecione ao menos uma bandeira. O valor total será a soma dos preços individuais.
                </FieldHint>
                {flags.length === 0 ? (
                  <EmptyState><EmptyText>Nenhuma bandeira ativa encontrada.</EmptyText></EmptyState>
                ) : (
                  <FlagsGrid>
                    {flags.map((flag) => {
                      const isChecked = selectedFlags.includes(flag.id);
                      const toggle = () => {
                        if (isSubmitting) return;
                        setSelectedFlags((prev) =>
                          isChecked ? prev.filter((id) => id !== flag.id) : [...prev, flag.id]
                        );
                      };
                      return (
                        <FlagCheckCard key={flag.id} $checked={isChecked} onClick={toggle}>
                          <FlagCheckbox $checked={isChecked}>
                            {isChecked && <Check size={11} color="#fff" strokeWidth={3} />}
                          </FlagCheckbox>
                          <FlagCheckInfo>
                            <FlagCheckName>{flag.name}</FlagCheckName>
                            <FlagCheckPrice>{formatBRL(flag.price)}</FlagCheckPrice>
                          </FlagCheckInfo>
                        </FlagCheckCard>
                      );
                    })}
                  </FlagsGrid>
                )}
                {selectedFlags.length > 0 && (
                  <TotalBox>
                    <TotalLabel>
                      {selectedFlags.length} bandeira{selectedFlags.length !== 1 ? 's' : ''} selecionada{selectedFlags.length !== 1 ? 's' : ''}
                    </TotalLabel>
                    <TotalValue>{formatBRL(totalIndividual)}</TotalValue>
                  </TotalBox>
                )}
              </>
            )}
          </Card>

          {/* ── Card: Endereço ───────────────────────────────── */}
          <Card style={{ marginBottom: '24px' }}>
            <CardHeader>
              <CardIconWrapper><MapPin size={18} /></CardIconWrapper>
              <CardTitle>Endereço</CardTitle>
            </CardHeader>
            <FormGrid>

              <FullSpan>
                <Field>
                  <Label htmlFor="address_street">Logradouro</Label>
                  <Input id="address_street" type="text" placeholder="Rua, Avenida, etc."
                    $hasError={!!err('address_street')} disabled={isSubmitting}
                    {...register('address_street')} />
                  {err('address_street') && <FieldError><AlertCircle size={11} />{err('address_street')}</FieldError>}
                </Field>
              </FullSpan>

              <Field>
                <Label htmlFor="address_number">Número</Label>
                <Input id="address_number" type="text" placeholder="Nº"
                  $hasError={!!err('address_number')} disabled={isSubmitting}
                  {...register('address_number')} />
                {err('address_number') && <FieldError><AlertCircle size={11} />{err('address_number')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="address_complement">Complemento</Label>
                <Input id="address_complement" type="text" placeholder="Sala, Andar, Bloco…"
                  disabled={isSubmitting} {...register('address_complement')} />
              </Field>

              <Field>
                <Label htmlFor="address_neighborhood">Bairro</Label>
                <Input id="address_neighborhood" type="text" placeholder="Bairro"
                  disabled={isSubmitting} {...register('address_neighborhood')} />
              </Field>

              <Field>
                <Label htmlFor="address_city">Cidade</Label>
                <Input id="address_city" type="text" placeholder="Cidade"
                  disabled={isSubmitting} {...register('address_city')} />
              </Field>

              <Field>
                <Label htmlFor="address_state">UF</Label>
                <Select id="address_state" disabled={isSubmitting} {...register('address_state')}>
                  <option value="">Selecione</option>
                  {UF_OPTIONS.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
                </Select>
              </Field>

              <Field>
                <Label htmlFor="address_zip">CEP</Label>
                <Input id="address_zip" type="text" placeholder="00000-000"
                  $hasError={!!err('address_zip')} disabled={isSubmitting}
                  {...register('address_zip', {
                    onChange: (e) => setValue('address_zip', maskCEP(e.target.value)),
                  })} />
                {err('address_zip') && <FieldError><AlertCircle size={11} />{err('address_zip')}</FieldError>}
              </Field>

            </FormGrid>
          </Card>

          {/* ── Card: Conta Bancária ─────────────────────────── */}
          <Card style={{ marginBottom: '24px' }}>
            <CardHeader>
              <CardIconWrapper><Landmark size={18} /></CardIconWrapper>
              <CardTitle>Conta Bancária</CardTitle>
            </CardHeader>
            <BankSection>
              <BankSectionTitle>Dados Bancários</BankSectionTitle>
              {bankFilled && (
                <FieldHint style={{ marginBottom: '12px', display: 'block' }}>
                  Agência e conta são obrigatórios quando o banco é informado.
                </FieldHint>
              )}
              <FormGrid>

                <Field>
                  <Label htmlFor="bank_bank_name">Nome do Banco</Label>
                  <Input id="bank_bank_name" type="text" placeholder="Ex: Bradesco, Nubank…"
                    $hasError={!!err('bank_bank_name')} disabled={isSubmitting}
                    {...register('bank_bank_name')} />
                  {err('bank_bank_name') && <FieldError><AlertCircle size={11} />{err('bank_bank_name')}</FieldError>}
                </Field>

                <Field>
                  <Label htmlFor="bank_agency">
                    Agência {bankFilled && <span style={{ color: '#dc2626' }}>*</span>}
                  </Label>
                  <Input id="bank_agency" type="text" placeholder="0000"
                    $hasError={!!err('bank_agency')} disabled={isSubmitting}
                    {...register('bank_agency')} />
                  {err('bank_agency') && <FieldError><AlertCircle size={11} />{err('bank_agency')}</FieldError>}
                </Field>

                <Field>
                  <Label htmlFor="bank_agency_digit">Dígito Agência</Label>
                  <Input id="bank_agency_digit" type="text" placeholder="X"
                    maxLength={2} disabled={isSubmitting} {...register('bank_agency_digit')} />
                </Field>

                <Field>
                  <Label htmlFor="bank_account">
                    Conta {bankFilled && <span style={{ color: '#dc2626' }}>*</span>}
                  </Label>
                  <Input id="bank_account" type="text" placeholder="000000"
                    $hasError={!!err('bank_account')} disabled={isSubmitting}
                    {...register('bank_account')} />
                  {err('bank_account') && <FieldError><AlertCircle size={11} />{err('bank_account')}</FieldError>}
                </Field>

                <Field>
                  <Label htmlFor="bank_account_digit">Dígito Conta</Label>
                  <Input id="bank_account_digit" type="text" placeholder="0"
                    maxLength={2} disabled={isSubmitting} {...register('bank_account_digit')} />
                </Field>

                <Field>
                  <Label htmlFor="bank_account_type">
                    Tipo de Conta {bankFilled && <span style={{ color: '#dc2626' }}>*</span>}
                  </Label>
                  <Select id="bank_account_type" $hasError={!!err('bank_account_type')}
                    disabled={isSubmitting} {...register('bank_account_type')}>
                    {ACCOUNT_TYPE_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </Select>
                  {err('bank_account_type') && <FieldError><AlertCircle size={11} />{err('bank_account_type')}</FieldError>}
                </Field>

              </FormGrid>
            </BankSection>
          </Card>

          {/* ── Card: Documentos ────────────────────────────── */}
          <Card style={{ marginBottom: '24px' }}>
            <CardHeader>
              <CardIconWrapper><FileText size={18} /></CardIconWrapper>
              <CardTitle>Documentos</CardTitle>
            </CardHeader>
            <FieldHint style={{ marginBottom: '16px', display: 'block' }}>
              Documentos são opcionais e podem ser adicionados depois pela edição do cliente.
            </FieldHint>
            <DocumentsGrid>
              {DOCUMENT_SLOTS.map((slot) => (
                <DocumentSlot key={slot.key} slot={slot}
                  selectedFile={selectedFiles[slot.key]}
                  onFileSelect={handleFileSelect}
                  onClearFile={handleClearFile}
                  disabled={isSubmitting} />
              ))}
            </DocumentsGrid>
          </Card>

        </form>
      </Container>

      {/* ── Footer fixo ─────────────────────────────────────── */}
      <FormFooter>
        <CancelButton type="button" disabled={isSubmitting}
          onClick={() => navigate('/clientes')}>
          <X size={15} /> Cancelar
        </CancelButton>

        {/* Barra de progresso + botão empilhados verticalmente */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
          {isSubmitting && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '220px' }}>
              <UploadProgressBar>
                <UploadProgressFill $percent={uploadProgress} />
              </UploadProgressBar>
              <UploadProgressLabel>{uploadProgress}%</UploadProgressLabel>
            </div>
          )}
          <SaveButton type="submit" form="create-client-form"
            $isSubmitting={isSubmitting} disabled={isSubmitting}>
            {submitLabel()}
          </SaveButton>
        </div>
      </FormFooter>
    </>
  );
}