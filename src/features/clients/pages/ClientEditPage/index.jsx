// ============================================================
// src/features/clients/pages/ClientEditPage/index.jsx
//
// Validação com Yup espelhando as regras das models do backend:
//   Client.js, ClientBankAccount.js, ClientDocument.js
//
// Protocolo de envio:
//   • Sem arquivos  → PATCH /clients/:id  (application/json)
//   • Com arquivos  → PATCH /clients/:id  (multipart/form-data)
//       campo "data"       = JSON.stringify(dadosTextuais)
//       campo "contrato"   = File (company_document)
//       campo "documentos" = File[] até 3 (endereço → banco → maquininha)
//
// Campos imutáveis (unique no banco):
//   cnpj, corporate_name, email, state_registration
// ============================================================
import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import {
  ArrowLeft, Building2, MapPin, Landmark,
  FileText, Save, X, AlertCircle, Lock,
  Upload, File as FileIcon, Trash2,
} from 'lucide-react';

import api, { getApiErrorMessage } from '../../../../lib/api';
import {
  Container, PageHeader, BackButton, TitleGroup,
  PageTitle, PageSubtitle,
  Card, CardHeader, CardIconWrapper, CardTitle,
  FormGrid, FullSpan,
  Field, Label, LockIcon, Input, Select, Textarea,
  ReadonlyField, ReadonlyHint,
  FieldError, FieldHint,
  BankSection, BankSectionTitle,
  DocumentsGrid, DocumentUploadCard, DocumentUploadLabel,
  DropZone, DropZoneIcon, DropZoneText, DropZoneSubtext,
  FileInfo, FileInfoText, FileName, FileMeta, RemoveFileButton,
  FormFooter, CancelButton, SaveButton, Spinner,
  SkeletonBar, SkeletonCard, Divider,
} from './styles';

// ── Schema Yup ────────────────────────────────────────────────────────────────
// ATENÇÃO: .transform() sempre ANTES de .test() — o Yup transforma e depois valida.
// Campos imutáveis (cnpj, corporate_name, email, state_registration) não entram
// no schema pois não são registrados no react-hook-form.

const clientSchema = yup.object({

  // ── Empresa ───────────────────────────────────────────────────────────────
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
    .oneOf(['food', 'meal', 'both'], 'Selecione um tipo de benefício válido.'),

  notes: yup
    .string()
    .nullable()
    .transform((v) => v || null),

  partner_id: yup
    .string()
    .nullable()
    .transform((v) => v || null),

  // ── Endereço ──────────────────────────────────────────────────────────────
  address_street: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(255, 'Logradouro deve ter no máximo 255 caracteres.'),

  address_number: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(10, 'Número deve ter no máximo 10 caracteres.'),

  address_complement: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(100, 'Complemento deve ter no máximo 100 caracteres.'),

  address_neighborhood: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(100, 'Bairro deve ter no máximo 100 caracteres.'),

  address_city: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(100, 'Cidade deve ter no máximo 100 caracteres.'),

  address_state: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(2, 'UF deve ter 2 caracteres.'),

  // FIX: .transform() ANTES de .test() para evitar falso positivo em campo vazio
  address_zip: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .test('cep-valido', 'CEP inválido. Use o formato 00000-000.', (v) => {
      if (!v) return true; // campo opcional — vazio é válido
      const digits = v.replace(/\D/g, '');
      return digits.length === 8;
    }),

  // ── Banco (condicional) ───────────────────────────────────────────────────
  // Agência e Conta tornam-se obrigatórios quando o nome do banco é informado.
  // bank_account_digit é opcional mesmo quando o banco está preenchido.

  bank_bank_name: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(100, 'Nome do banco deve ter no máximo 100 caracteres.'),

  bank_agency: yup
    .string()
    .max(10, 'Agência deve ter no máximo 10 caracteres.')
    .when('bank_bank_name', {
      is:        (v) => !!v,
      then:      (s) => s.required('Agência é obrigatória quando o banco é informado.'),
      otherwise: (s) => s.nullable().transform((v) => v || null),
    }),

  bank_agency_digit: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(2, 'Dígito da agência deve ter no máximo 2 caracteres.'),

  bank_account: yup
    .string()
    .max(20, 'Conta deve ter no máximo 20 caracteres.')
    .when('bank_bank_name', {
      is:        (v) => !!v,
      then:      (s) => s.required('Conta é obrigatória quando o banco é informado.'),
      otherwise: (s) => s.nullable().transform((v) => v || null),
    }),

  // Intencional: opcional mesmo quando banco preenchido (decisão de negócio)
  bank_account_digit: yup
    .string()
    .nullable()
    .transform((v) => v || null)
    .max(2, 'Dígito da conta deve ter no máximo 2 caracteres.'),

  bank_account_type: yup
    .string()
    .when('bank_bank_name', {
      is:        (v) => !!v,
      then:      (s) => s
        .required('Tipo de conta é obrigatório.')
        .oneOf(['checking', 'savings'], 'Tipo de conta inválido.'),
      otherwise: (s) => s.nullable().transform((v) => v || null),
    }),
});

// ── Constantes ────────────────────────────────────────────────────────────────

const DOCUMENT_SLOTS = [
  {
    key:      'contrato',
    fieldName: 'contrato',
    type:     'company_document',
    label:    'Contrato / Doc. da Empresa',
    hint:     'Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.',
  },
  {
    key:      'proof_of_address',
    fieldName: 'documentos',
    type:     'proof_of_address',
    label:    'Comprovante de Endereço',
    hint:     'Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.',
    docIndex: 0,
  },
  {
    key:      'bank_account_proof',
    fieldName: 'documentos',
    type:     'bank_account_proof',
    label:    'Comprovante Bancário',
    hint:     'Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.',
    docIndex: 1,
  },
  {
    key:      'card_machine_proof',
    fieldName: 'documentos',
    type:     'card_machine_proof',
    label:    'Comprovante de Maquininha',
    hint:     'Substitui o documento existente. PDF, JPG ou PNG · máx. 3 MB.',
    docIndex: 2,
  },
];

const BENEFIT_OPTIONS = [
  { value: 'food', label: 'Vale Alimentação'        },
  { value: 'meal', label: 'Vale Refeição'            },
  { value: 'both', label: 'Alimentação + Refeição'  },
];

const ACCOUNT_TYPE_OPTIONS = [
  { value: 'checking', label: 'Conta Corrente' },
  { value: 'savings',  label: 'Conta Poupança'  },
];

const UF_OPTIONS = [
  'AC','AL','AM','AP','BA','CE','DF','ES','GO','MA',
  'MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN',
  'RO','RR','RS','SC','SE','SP','TO',
];

// Cache em memória — evita re-fetch a cada abertura da página de edição
let partnersCache = null;

// ── Masks ─────────────────────────────────────────────────────────────────────

const maskPhone = (v = '') => {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2)  return `(${d}`;
  if (d.length <= 6)  return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
};

const maskCEP = (v = '') => {
  const d = v.replace(/\D/g, '').slice(0, 8);
  if (d.length <= 5) return d;
  return `${d.slice(0,5)}-${d.slice(5)}`;
};

const onlyDigits = (v = '') => v.replace(/\D/g, '');

const formatFileSize = (bytes) => {
  if (!bytes) return '';
  if (bytes < 1024)          return `${bytes} B`;
  if (bytes < 1024 * 1024)   return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// ── Skeleton ──────────────────────────────────────────────────────────────────

function EditSkeleton() {
  const fakeFields = (n) =>
    Array.from({ length: n }).map((_, i) => (
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
          <SkeletonBar $w="200px" $h="28px" />
          <SkeletonBar $w="140px" $h="14px" style={{ marginTop: '4px' }} />
        </TitleGroup>
      </PageHeader>
      <SkeletonCard>
        <SkeletonBar $w="35%" $h="20px" /><Divider />
        <FormGrid>{fakeFields(6)}</FormGrid>
      </SkeletonCard>
      <SkeletonCard>
        <SkeletonBar $w="30%" $h="20px" /><Divider />
        <FormGrid>{fakeFields(4)}</FormGrid>
      </SkeletonCard>
    </Container>
  );
}

// ── Slot de documento ─────────────────────────────────────────────────────────

function DocumentSlot({ slot, existingDoc, selectedFile, onFileSelect, onClearFile, disabled }) {
  const inputRef    = useRef(null);
  const hasFile     = !!selectedFile;
  const hasExisting = !!existingDoc;

  return (
    <DocumentUploadCard $hasFile={hasFile}>
      <DocumentUploadLabel>{slot.label}</DocumentUploadLabel>

      {hasFile ? (
        <FileInfo>
          <FileIcon size={16} style={{ color: '#B45A14', flexShrink: 0 }} />
          <FileInfoText>
            <FileName>{selectedFile.name}</FileName>
            <FileMeta>{formatFileSize(selectedFile.size)} · Novo arquivo</FileMeta>
          </FileInfoText>
          <RemoveFileButton
            type="button"
            onClick={() => onClearFile(slot.key)}
            disabled={disabled}
            title="Remover seleção"
          >
            <Trash2 size={13} />
          </RemoveFileButton>
        </FileInfo>
      ) : hasExisting ? (
        <FileInfo>
          <FileIcon size={16} style={{ color: '#7a6455', flexShrink: 0 }} />
          <FileInfoText>
            <FileName>{existingDoc.original_name ?? 'Documento existente'}</FileName>
            <FileMeta>
              {existingDoc.file_size ? formatFileSize(existingDoc.file_size) + ' · ' : ''}
              Substituir clicando abaixo
            </FileMeta>
          </FileInfoText>
        </FileInfo>
      ) : null}

      <DropZone htmlFor={`doc-input-${slot.key}`}>
        <DropZoneIcon $hasFile={hasFile}><Upload size={22} /></DropZoneIcon>
        <DropZoneText>
          {hasFile ? 'Trocar arquivo' : hasExisting ? 'Substituir documento' : 'Selecionar arquivo'}
        </DropZoneText>
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
      <FieldHint>{slot.hint}</FieldHint>
    </DocumentUploadCard>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────

export default function ClientEditPage() {
  const { id }   = useParams();
  const navigate = useNavigate();

  const [isLoading,       setIsLoading]      = useState(true);
  const [isSubmitting,    setIsSubmitting]    = useState(false);
  const [clientName,      setClientName]      = useState('');
  const [partners,        setPartners]        = useState([]);
  const [loadingPartners, setLoadingPartners] = useState(false);
  const [existingDocs,    setExistingDocs]    = useState({});
  const [selectedFiles,   setSelectedFiles]   = useState({});

  // Campos únicos imutáveis — só exibição, nunca no payload nem no schema
  const [readonlyFields, setReadonlyFields] = useState({
    corporate_name:     '',
    cnpj:               '',
    email:              '',
    state_registration: '',
  });

  // ── react-hook-form + Yup ────────────────────────────────────────────────
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(clientSchema),
    defaultValues: {
      trade_name:           '',
      phone:                '',
      benefit_type:         'food',
      notes:                '',
      address_street:       '',
      address_number:       '',
      address_complement:   '',
      address_neighborhood: '',
      address_city:         '',
      address_state:        '',
      address_zip:          '',
      partner_id:           '',
      bank_bank_name:       '',
      bank_agency:          '',
      bank_agency_digit:    '',
      bank_account:         '',
      bank_account_digit:   '',
      bank_account_type:    'checking',
    },
  });

  // Indica se os campos bancários condicionais devem ser obrigatórios
  const bankName   = watch('bank_bank_name');
  const bankFilled = !!bankName;

  // ── Carrega dados do cliente ──────────────────────────────────────────────
  const fetchClient = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`/clients/${id}`);
      const c = data.data;

      setClientName(c.trade_name || c.corporate_name || '');

      setReadonlyFields({
        corporate_name:     c.corporate_name     ?? '',
        cnpj:               c.cnpj               ?? '',
        email:              c.email              ?? '',
        state_registration: c.state_registration ?? '',
      });

      const docsMap = {};
      (c.documents ?? []).forEach((doc) => { docsMap[doc.document_type] = doc; });
      setExistingDocs(docsMap);

      const bank = c.bankAccounts?.[0];

      reset({
        trade_name:           c.trade_name            ?? '',
        phone:                maskPhone(c.phone        ?? ''),
        benefit_type:         c.benefit_type          ?? 'food',
        notes:                c.notes                 ?? '',
        address_street:       c.address_street        ?? '',
        address_number:       c.address_number        ?? '',
        address_complement:   c.address_complement    ?? '',
        address_neighborhood: c.address_neighborhood  ?? '',
        address_city:         c.address_city          ?? '',
        address_state:        c.address_state         ?? '',
        address_zip:          maskCEP(c.address_zip   ?? ''),
        partner_id:           c.partner?.id           ?? c.partner_id ?? '',
        bank_bank_name:       bank?.bank_name         ?? '',
        bank_agency:          bank?.agency            ?? '',
        bank_agency_digit:    bank?.agency_digit      ?? '',
        bank_account:         bank?.account           ?? '',
        bank_account_digit:   bank?.account_digit     ?? '',
        bank_account_type:    bank?.account_type      ?? 'checking',
      });
    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao carregar dados do cliente.'));
      navigate(`/clientes/${id}`, { replace: true });
    } finally {
      setIsLoading(false);
    }
  }, [id, navigate, reset]);

  useEffect(() => { fetchClient(); }, [fetchClient]);

  // ── Carrega parceiros com cache ───────────────────────────────────────────
  // FIX: removido &is_active=true — o backend compara string vs boolean e retorna 0 resultados
  useEffect(() => {
    const fetchPartners = async () => {
      if (partnersCache) {
        setPartners(partnersCache);
        return;
      }
      setLoadingPartners(true);
      try {
        const { data } = await api.get('/users?role=partner&limit=100');
        const list = data.data ?? [];
        partnersCache = list;
        setPartners(list);
      } catch {
        // Silencioso — parceiros são opcionais, não bloqueia o formulário
      } finally {
        setLoadingPartners(false);
      }
    };
    fetchPartners();
  }, []);

  // ── Handlers de arquivo ───────────────────────────────────────────────────
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

  // ── Submit ────────────────────────────────────────────────────────────────
  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const hasFiles = Object.keys(selectedFiles).length > 0;

      const textPayload = {
        trade_name:           formData.trade_name           || undefined,
        phone:                onlyDigits(formData.phone)    || undefined,
        benefit_type:         formData.benefit_type,
        notes:                formData.notes                || undefined,
        address_street:       formData.address_street       || undefined,
        address_number:       formData.address_number       || undefined,
        address_complement:   formData.address_complement   || undefined,
        address_neighborhood: formData.address_neighborhood || undefined,
        address_city:         formData.address_city         || undefined,
        address_state:        formData.address_state        || undefined,
        address_zip: formData.address_zip || undefined,
        partner_id:           formData.partner_id           || null,
        ...(bankFilled
          ? {
              bankAccount: {
                bank_name:     formData.bank_bank_name,
                agency:        formData.bank_agency,
                agency_digit:  formData.bank_agency_digit || undefined,
                account:       formData.bank_account,
                account_digit: formData.bank_account_digit || undefined,
                account_type:  formData.bank_account_type,
              },
            }
          : {}),
      };

      // Remove chaves undefined para não poluir o payload
      Object.keys(textPayload).forEach(
        (k) => textPayload[k] === undefined && delete textPayload[k]
      );

      if (hasFiles) {
        const formDataObj = new FormData();
        formDataObj.append('data', JSON.stringify(textPayload));

        if (selectedFiles['contrato']) {
          formDataObj.append('contrato', selectedFiles['contrato']);
        }

        // Ordem obrigatória: endereço → banco → maquininha
        // O backend atribui o tipo pelo índice posicional do array
        ['proof_of_address', 'bank_account_proof', 'card_machine_proof'].forEach((key) => {
          if (selectedFiles[key]) formDataObj.append('documentos', selectedFiles[key]);
        });

        await api.patch(`/clients/${id}`, formDataObj, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await api.patch(`/clients/${id}`, textPayload);
      }

      toast.success('Cliente atualizado com sucesso!', { toastId: 'client-updated' });
      navigate(`/clientes/${id}`, { replace: true });

    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao salvar alterações.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  if (isLoading) return <EditSkeleton />;

  const hasChanges = isDirty || Object.keys(selectedFiles).length > 0;
  const err = (field) => errors[field]?.message;

  return (
    <>
      <Container>

        {/* ── Header ──────────────────────────────────────────── */}
        <PageHeader>
          <BackButton type="button" onClick={() => navigate(`/clientes/${id}`)}>
            <ArrowLeft size={15} /> Voltar
          </BackButton>
          <TitleGroup>
            <PageTitle>Editar Cliente</PageTitle>
            <PageSubtitle>{clientName}</PageSubtitle>
          </TitleGroup>
        </PageHeader>

        <form id="edit-client-form" onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* ── Card: Dados da Empresa ───────────────────────── */}
          <Card style={{ marginBottom: '24px' }}>
            <CardHeader>
              <CardIconWrapper><Building2 size={18} /></CardIconWrapper>
              <CardTitle>Dados da Empresa</CardTitle>
            </CardHeader>
            <FormGrid>

              {/* Imutáveis — readonly */}
              <Field>
                <Label><LockIcon><Lock size={11} /></LockIcon>Razão Social</Label>
                <ReadonlyField>{readonlyFields.corporate_name || '—'}</ReadonlyField>
                <ReadonlyHint>Campo único, não pode ser editado.</ReadonlyHint>
              </Field>

              <Field>
                <Label><LockIcon><Lock size={11} /></LockIcon>CNPJ</Label>
                <ReadonlyField>{readonlyFields.cnpj || '—'}</ReadonlyField>
                <ReadonlyHint>Campo único, não pode ser editado.</ReadonlyHint>
              </Field>

              <Field>
                <Label htmlFor="trade_name">Nome Fantasia</Label>
                <Input
                  id="trade_name"
                  type="text"
                  placeholder="Nome fantasia (opcional)"
                  $hasError={!!err('trade_name')}
                  disabled={isSubmitting}
                  {...register('trade_name')}
                />
                {err('trade_name') && <FieldError><AlertCircle size={11} />{err('trade_name')}</FieldError>}
              </Field>

              <Field>
                <Label><LockIcon><Lock size={11} /></LockIcon>Inscrição Estadual</Label>
                <ReadonlyField>{readonlyFields.state_registration || '—'}</ReadonlyField>
                <ReadonlyHint>Campo único, não pode ser editado.</ReadonlyHint>
              </Field>

              <Field>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  $hasError={!!err('phone')}
                  disabled={isSubmitting}
                  {...register('phone', {
                    onChange: (e) => setValue('phone', maskPhone(e.target.value)),
                  })}
                />
                {err('phone') && <FieldError><AlertCircle size={11} />{err('phone')}</FieldError>}
              </Field>

              <Field>
                <Label><LockIcon><Lock size={11} /></LockIcon>E-mail</Label>
                <ReadonlyField>{readonlyFields.email || '—'}</ReadonlyField>
                <ReadonlyHint>Campo único, não pode ser editado.</ReadonlyHint>
              </Field>

              <Field>
                <Label htmlFor="benefit_type">Tipo de Benefício *</Label>
                <Select
                  id="benefit_type"
                  $hasError={!!err('benefit_type')}
                  disabled={isSubmitting}
                  {...register('benefit_type')}
                >
                  {BENEFIT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </Select>
                {err('benefit_type') && <FieldError><AlertCircle size={11} />{err('benefit_type')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="partner_id">Parceiro Vinculado</Label>
                <Select
                  id="partner_id"
                  disabled={isSubmitting || loadingPartners}
                  {...register('partner_id')}
                >
                  <option value="">
                    {loadingPartners ? 'Carregando parceiros…' : 'Sem parceiro vinculado'}
                  </option>
                  {partners.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </Select>
                <FieldHint>
                  {loadingPartners
                    ? 'Buscando parceiros…'
                    : `${partners.length} parceiro${partners.length !== 1 ? 's' : ''} disponível${partners.length !== 1 ? 'is' : ''}`}
                </FieldHint>
              </Field>

              <FullSpan>
                <Field>
                  <Label htmlFor="notes">Observações</Label>
                  <Textarea
                    id="notes"
                    placeholder="Observações internas…"
                    disabled={isSubmitting}
                    {...register('notes')}
                  />
                  <FieldHint>Visível apenas para a equipe interna.</FieldHint>
                </Field>
              </FullSpan>

            </FormGrid>
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
                  <Input
                    id="address_street"
                    type="text"
                    placeholder="Rua, Avenida, etc."
                    $hasError={!!err('address_street')}
                    disabled={isSubmitting}
                    {...register('address_street')}
                  />
                  {err('address_street') && <FieldError><AlertCircle size={11} />{err('address_street')}</FieldError>}
                </Field>
              </FullSpan>

              <Field>
                <Label htmlFor="address_number">Número</Label>
                <Input
                  id="address_number"
                  type="text"
                  placeholder="Nº"
                  $hasError={!!err('address_number')}
                  disabled={isSubmitting}
                  {...register('address_number')}
                />
                {err('address_number') && <FieldError><AlertCircle size={11} />{err('address_number')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="address_complement">Complemento</Label>
                <Input
                  id="address_complement"
                  type="text"
                  placeholder="Sala, Andar, Bloco…"
                  $hasError={!!err('address_complement')}
                  disabled={isSubmitting}
                  {...register('address_complement')}
                />
                {err('address_complement') && <FieldError><AlertCircle size={11} />{err('address_complement')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="address_neighborhood">Bairro</Label>
                <Input
                  id="address_neighborhood"
                  type="text"
                  placeholder="Bairro"
                  $hasError={!!err('address_neighborhood')}
                  disabled={isSubmitting}
                  {...register('address_neighborhood')}
                />
                {err('address_neighborhood') && <FieldError><AlertCircle size={11} />{err('address_neighborhood')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="address_city">Cidade</Label>
                <Input
                  id="address_city"
                  type="text"
                  placeholder="Cidade"
                  $hasError={!!err('address_city')}
                  disabled={isSubmitting}
                  {...register('address_city')}
                />
                {err('address_city') && <FieldError><AlertCircle size={11} />{err('address_city')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="address_state">UF</Label>
                <Select
                  id="address_state"
                  $hasError={!!err('address_state')}
                  disabled={isSubmitting}
                  {...register('address_state')}
                >
                  <option value="">Selecione</option>
                  {UF_OPTIONS.map((uf) => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </Select>
                {err('address_state') && <FieldError><AlertCircle size={11} />{err('address_state')}</FieldError>}
              </Field>

              <Field>
                <Label htmlFor="address_zip">CEP</Label>
                <Input
                  id="address_zip"
                  type="text"
                  placeholder="00000-000"
                  $hasError={!!err('address_zip')}
                  disabled={isSubmitting}
                  {...register('address_zip', {
                    onChange: (e) => setValue('address_zip', maskCEP(e.target.value)),
                  })}
                />
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
              <BankSectionTitle>Dados Bancários Principais</BankSectionTitle>
              {bankFilled && (
                <FieldHint style={{ marginBottom: '12px', display: 'block' }}>
                  Agência e conta são obrigatórios quando o banco é informado.
                </FieldHint>
              )}
              <FormGrid>

                <Field>
                  <Label htmlFor="bank_bank_name">Nome do Banco</Label>
                  <Input
                    id="bank_bank_name"
                    type="text"
                    placeholder="Ex: Bradesco, Nubank…"
                    $hasError={!!err('bank_bank_name')}
                    disabled={isSubmitting}
                    {...register('bank_bank_name')}
                  />
                  {err('bank_bank_name') && <FieldError><AlertCircle size={11} />{err('bank_bank_name')}</FieldError>}
                </Field>

                <Field>
                  <Label htmlFor="bank_agency">
                    Agência {bankFilled && <span style={{ color: '#dc2626' }}>*</span>}
                  </Label>
                  <Input
                    id="bank_agency"
                    type="text"
                    placeholder="0000"
                    $hasError={!!err('bank_agency')}
                    disabled={isSubmitting}
                    {...register('bank_agency')}
                  />
                  {err('bank_agency') && <FieldError><AlertCircle size={11} />{err('bank_agency')}</FieldError>}
                </Field>

                <Field>
                  <Label htmlFor="bank_agency_digit">Dígito Agência</Label>
                  <Input
                    id="bank_agency_digit"
                    type="text"
                    placeholder="X"
                    maxLength={2}
                    $hasError={!!err('bank_agency_digit')}
                    disabled={isSubmitting}
                    {...register('bank_agency_digit')}
                  />
                  {err('bank_agency_digit') && <FieldError><AlertCircle size={11} />{err('bank_agency_digit')}</FieldError>}
                </Field>

                <Field>
                  <Label htmlFor="bank_account">
                    Conta {bankFilled && <span style={{ color: '#dc2626' }}>*</span>}
                  </Label>
                  <Input
                    id="bank_account"
                    type="text"
                    placeholder="000000"
                    $hasError={!!err('bank_account')}
                    disabled={isSubmitting}
                    {...register('bank_account')}
                  />
                  {err('bank_account') && <FieldError><AlertCircle size={11} />{err('bank_account')}</FieldError>}
                </Field>

                <Field>
                  <Label htmlFor="bank_account_digit">Dígito Conta</Label>
                  <Input
                    id="bank_account_digit"
                    type="text"
                    placeholder="0"
                    maxLength={2}
                    $hasError={!!err('bank_account_digit')}
                    disabled={isSubmitting}
                    {...register('bank_account_digit')}
                  />
                  {err('bank_account_digit') && <FieldError><AlertCircle size={11} />{err('bank_account_digit')}</FieldError>}
                </Field>

                <Field>
                  <Label htmlFor="bank_account_type">
                    Tipo de Conta {bankFilled && <span style={{ color: '#dc2626' }}>*</span>}
                  </Label>
                  <Select
                    id="bank_account_type"
                    $hasError={!!err('bank_account_type')}
                    disabled={isSubmitting}
                    {...register('bank_account_type')}
                  >
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
              Selecione um novo arquivo para <strong>substituir</strong> o documento
              existente. O arquivo antigo é removido automaticamente do Cloudinary.
            </FieldHint>
            <DocumentsGrid>
              {DOCUMENT_SLOTS.map((slot) => (
                <DocumentSlot
                  key={slot.key}
                  slot={slot}
                  existingDoc={existingDocs[slot.type]}
                  selectedFile={selectedFiles[slot.key]}
                  onFileSelect={handleFileSelect}
                  onClearFile={handleClearFile}
                  disabled={isSubmitting}
                />
              ))}
            </DocumentsGrid>
          </Card>

        </form>
      </Container>

      {/* ── Footer fixo ─────────────────────────────────────── */}
      <FormFooter>
        <CancelButton
          type="button"
          disabled={isSubmitting}
          onClick={() => navigate(`/clientes/${id}`)}
        >
          <X size={15} /> Cancelar
        </CancelButton>

        <SaveButton
          type="submit"
          form="edit-client-form"
          disabled={isSubmitting || !hasChanges}
          $isSubmitting={isSubmitting}
          title={!hasChanges ? 'Nenhuma alteração detectada' : undefined}
        >
          {isSubmitting
            ? <><Spinner />Salvando…</>
            : <><Save size={15} />Salvar Alterações</>}
        </SaveButton>
      </FormFooter>
    </>
  );
}