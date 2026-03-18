// ============================================================
// src/features/clients/pages/ClientEditPage/index.jsx
//
// Protocolo de envio:
//   • Sem arquivos  → PATCH /clients/:id  (application/json)
//   • Com arquivos  → PATCH /clients/:id  (multipart/form-data)
//       campo "data"       = JSON.stringify(dadosTextuais)
//       campo "contrato"   = File (substitui company_document)
//       campo "documentos" = File[] até 3 (proof_of_address,
//                            bank_account_proof, card_machine_proof)
//
// Campos imutáveis (unique no banco):
//   cnpj, corporate_name, email, state_registration
// ============================================================
import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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

// ── Constantes de documentos ──────────────────────────────────────────────────

// O backend processa nesta ordem exata:
//   campo "contrato"   → document_type: 'company_document'
//   campo "documentos" → ['proof_of_address', 'bank_account_proof', 'card_machine_proof']
const DOCUMENT_SLOTS = [
  {
    key: 'contrato',
    fieldName: 'contrato',     // nome do campo no FormData
    type: 'company_document',
    label: 'Contrato / Doc. da Empresa',
    hint: 'Substitui o documento existente',
    multiple: false,
  },
  {
    key: 'proof_of_address',
    fieldName: 'documentos',   // campo "documentos" — índice 0
    type: 'proof_of_address',
    label: 'Comprovante de Endereço',
    hint: 'Substitui o documento existente',
    multiple: false,
    docIndex: 0,
  },
  {
    key: 'bank_account_proof',
    fieldName: 'documentos',   // campo "documentos" — índice 1
    type: 'bank_account_proof',
    label: 'Comprovante Bancário',
    hint: 'Substitui o documento existente',
    multiple: false,
    docIndex: 1,
  },
  {
    key: 'card_machine_proof',
    fieldName: 'documentos',   // campo "documentos" — índice 2
    type: 'card_machine_proof',
    label: 'Comprovante de Maquininha',
    hint: 'Substitui o documento existente',
    multiple: false,
    docIndex: 2,
  },
];

// ── Opções ────────────────────────────────────────────────────────────────────

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

// ── Formatadores / masks ──────────────────────────────────────────────────────

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

const formatFileSize = (bytes) => {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
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
        <SkeletonBar $w="35%" $h="20px" />
        <Divider />
        <FormGrid>{fakeFields(6)}</FormGrid>
      </SkeletonCard>
      <SkeletonCard>
        <SkeletonBar $w="30%" $h="20px" />
        <Divider />
        <FormGrid>{fakeFields(4)}</FormGrid>
      </SkeletonCard>
    </Container>
  );
}

// ── Sub-componente: slot de upload de documento ───────────────────────────────

function DocumentSlot({ slot, existingDoc, selectedFile, onFileSelect, onClearFile, disabled }) {
  const inputRef = useRef(null);
  const hasFile = !!selectedFile;
  const hasExisting = !!existingDoc;

  return (
    <DocumentUploadCard $hasFile={hasFile}>
      <DocumentUploadLabel>{slot.label}</DocumentUploadLabel>

      {/* Arquivo já selecionado pelo usuário (novo upload) */}
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
        /* Documento existente no Cloudinary */
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

      {/* Área de drop / click para selecionar arquivo */}
      <DropZone htmlFor={`doc-input-${slot.key}`}>
        <DropZoneIcon $hasFile={hasFile}>
          <Upload size={22} />
        </DropZoneIcon>
        <DropZoneText>
          {hasFile ? 'Trocar arquivo' : hasExisting ? 'Substituir documento' : 'Selecionar arquivo'}
        </DropZoneText>
        <DropZoneSubtext>PDF, JPG ou PNG · máx. 3 MB</DropZoneSubtext>
      </DropZone>

      {/* Input file oculto */}
      <input
        ref={inputRef}
        id={`doc-input-${slot.key}`}
        type="file"
        accept="application/pdf,image/jpeg,image/png"
        style={{ display: 'none' }}
        disabled={disabled}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onFileSelect(slot.key, file);
          // Reset para permitir re-selecionar o mesmo arquivo
          e.target.value = '';
        }}
      />

      <FieldHint>{slot.hint}</FieldHint>
    </DocumentUploadCard>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────

export default function ClientEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clientName, setClientName] = useState('');
  const [partners, setPartners] = useState([]);
  const [loadingPartners, setLoadingPartners] = useState(false);
  

  // Campos únicos imutáveis — só exibição, nunca vão no payload
  const [readonlyFields, setReadonlyFields] = useState({
    corporate_name: '',
    cnpj: '',
    email: '',
    state_registration: '',
  });

  // Documentos existentes vindos da API (para exibir no slot)
  const [existingDocs, setExistingDocs] = useState({});

  // Arquivos selecionados pelo usuário (não enviados ainda)
  // { [slot.key]: File }
  const [selectedFiles, setSelectedFiles] = useState({});

  // ── react-hook-form ───────────────────────────────────────────────────────
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      trade_name: '',
      phone: '',
      benefit_type: 'food',
      notes: '',
      address_street: '',
      address_number: '',
      address_complement: '',
      address_neighborhood: '',
      address_city: '',
      address_state: '',
      address_zip: '',
      bank_bank_name: '',
      bank_bank_code: '',
      bank_agency: '',
      bank_agency_digit: '',
      bank_account: '',
      bank_account_digit: '',
      bank_account_type: 'checking',
      partner_id: '',
    },
  });

  // ── Carrega dados e popula o form ─────────────────────────────────────────
  const fetchClient = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`/clients/${id}`);
      const c = data.data;
      
      setClientName(c.trade_name || c.corporate_name || '');

      // Armazena campos únicos imutáveis para exibição
      setReadonlyFields({
        corporate_name: c.corporate_name ?? '',
        cnpj: c.cnpj ?? '',
        email: c.email ?? '',
        state_registration: c.state_registration ?? '',
      });

      // Mapeia documentos existentes por tipo para os slots
      const docsMap = {};
      (c.documents ?? []).forEach((doc) => {
        docsMap[doc.document_type] = doc;
      });
      setExistingDocs(docsMap);

      const bank = c.bankAccounts?.[0];

      reset({
        trade_name: c.trade_name ?? '',
        phone: maskPhone(c.phone ?? ''),
        benefit_type: c.benefit_type ?? 'food',
        notes: c.notes ?? '',
        address_street: c.address_street ?? '',
        address_number: c.address_number ?? '',
        address_complement: c.address_complement ?? '',
        address_neighborhood: c.address_neighborhood ?? '',
        address_city: c.address_city ?? '',
        address_state: c.address_state ?? '',
        address_zip: maskCEP(c.address_zip ?? ''),
        bank_bank_name: bank?.bank_name ?? '',
        bank_bank_code: bank?.bank_code ?? '',
        bank_agency: bank?.agency ?? '',
        bank_agency_digit: bank?.agency_digit ?? '',
        bank_account: bank?.account ?? '',
        bank_account_digit: bank?.account_digit ?? '',
        bank_account_type: bank?.account_type ?? 'checking',
        partner_id: c.partner?.id ?? c.partner_id ?? '',
      });
    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao carregar dados do cliente.'));
      navigate(`/clientes/${id}`, { replace: true });
    } finally {
      setIsLoading(false);
    }
  }, [id, navigate, reset]);

  useEffect(() => { fetchClient(); }, [fetchClient]);

  // Busca parceiros para o select — apenas admin tem acesso a GET /users
  useEffect(() => {
  const fetchPartners = async () => {      
    setLoadingPartners(true);
    try {
      // 1. Chamada à API
      const response = await api.get('/users?role=partner&limit=100');
      
      // 2. Debug para termos certeza absoluta do que o servidor enviou
      console.log("Resposta bruta da API /users:", response);

      // 3. Extração segura: tenta encontrar o array de usuários
      const fetchedData = response.data?.data || response.data || [];
      
      // Garante que o que estamos salvando é realmente um array
      if (Array.isArray(fetchedData)) {
        setPartners(fetchedData);
      } else {
        console.warn("A API não retornou um array de parceiros:", fetchedData);
        setPartners([]);
      }

    } catch (error) {
      console.error("Erro na busca de parceiros:", error);
      // Opcional: toast.warn("Não foi possível carregar a lista de parceiros.");
    } finally {
      setLoadingPartners(false);
    }
  };
  fetchPartners();
}, []);
  // useEffect(() => {
  //   const fetchPartners = async () => {      
  //     setLoadingPartners(true);
  //     try {
  //       const { data } = await api.get('/users?role=partner&limit=100&is_active=true');
  //       console.log(data)
  //       setPartners(data.data ?? []);
  //     } catch {
  //       // Silencioso — parceiros são opcionais, não bloqueia o formulário
  //     } finally {
  //       setLoadingPartners(false);
  //     }
  //   };
  //   fetchPartners();
  // }, []);

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

      // ── Monta o payload de dados textuais ─────────────────────────────────
      const textPayload = {
        trade_name: formData.trade_name || undefined,
        phone: onlyDigits(formData.phone) || undefined,
        benefit_type: formData.benefit_type,
        notes: formData.notes || undefined,
        address_street: formData.address_street || undefined,
        address_number: formData.address_number || undefined,
        address_complement: formData.address_complement || undefined,
        address_neighborhood: formData.address_neighborhood || undefined,
        address_city: formData.address_city || undefined,
        address_state: formData.address_state || undefined,
        address_zip: formData.address_zip || undefined,
        partner_id: formData.partner_id || null,
        ...(formData.bank_bank_name && formData.bank_agency && formData.bank_account
          ? {
            bankAccount: {
              bank_name: formData.bank_bank_name,
              bank_code: formData.bank_bank_code || undefined,
              agency: formData.bank_agency,
              agency_digit: formData.bank_agency_digit || undefined,
              account: formData.bank_account,
              account_digit: formData.bank_account_digit,
              account_type: formData.bank_account_type,
            },
          }
          : {}),
      };

      // Remove undefined para não poluir o payload
      Object.keys(textPayload).forEach(
        (k) => textPayload[k] === undefined && delete textPayload[k]
      );

      if (hasFiles) {
        // ── Envio com arquivos: multipart/form-data ───────────────────────
        // O backend espera:
        //   campo "data"      = JSON string dos dados textuais
        //   campo "contrato"  = File (1 arquivo)
        //   campo "documentos"= File[] (até 3, na ordem: endereço, banco, maquininha)
        const formDataObj = new FormData();
        formDataObj.append('data', JSON.stringify(textPayload));

        // Contrato
        if (selectedFiles['contrato']) {
          formDataObj.append('contrato', selectedFiles['contrato']);
        }

        // Documentos complementares: monta array na ordem correta dos índices
        const docOrder = ['proof_of_address', 'bank_account_proof', 'card_machine_proof'];
        docOrder.forEach((docKey) => {
          if (selectedFiles[docKey]) {
            formDataObj.append('documentos', selectedFiles[docKey]);
          }
        });

        // O Axios detecta automaticamente o Content-Type multipart/form-data
        // quando o body é um FormData — não definir manualmente
        await api.patch(`/clients/${id}`, formDataObj, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

      } else {
        // ── Envio sem arquivos: application/json ──────────────────────────
        await api.patch(`/clients/${id}`, textPayload);
      }

      toast.success('Cliente atualizado com sucesso!', { toastId: 'client-updated' });
      navigate(`/clientes/${id}`, { replace: true });

    } catch (error) {
      if (error.response?.data?.errors) {
    console.table(error.response.data.errors); // Mostra uma tabela com os erros de validação
  }
      toast.error(getApiErrorMessage(error, 'Erro ao salvar alterações.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Renderização ──────────────────────────────────────────────────────────

  if (isLoading) return <EditSkeleton />;

  // Checa se houve mudança: formulário dirty OU algum arquivo selecionado
  const hasChanges = isDirty || Object.keys(selectedFiles).length > 0;

  return (
    <>
      <Container>

        {/* ── Header ──────────────────────────────────────────── */}
        <PageHeader>
          <BackButton type="button" onClick={() => navigate(`/clientes/${id}`)}>
            <ArrowLeft size={15} />
            Voltar
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

              {/* ── Campos imutáveis (unique no banco) ─────────────────────
                  Exibidos como readonly — não registrados no react-hook-form
                  pois não devem ser enviados no payload.
              ─────────────────────────────────────────────────────────── */}

              <Field>
                <Label>
                  <LockIcon><Lock size={11} /></LockIcon>
                  Razão Social
                </Label>
                <ReadonlyField title="Campo único — não pode ser alterado">
                  {readonlyFields.corporate_name || '—'}
                </ReadonlyField>
                <ReadonlyHint>Campo único, não pode ser editado.</ReadonlyHint>
              </Field>

              <Field>
                <Label>
                  <LockIcon><Lock size={11} /></LockIcon>
                  CNPJ
                </Label>
                <ReadonlyField title="Campo único — não pode ser alterado">
                  {readonlyFields.cnpj || '—'}
                </ReadonlyField>
                <ReadonlyHint>Campo único, não pode ser editado.</ReadonlyHint>
              </Field>

              <Field>
                <Label htmlFor="trade_name">Nome Fantasia</Label>
                <Input
                  id="trade_name"
                  type="text"
                  placeholder="Nome fantasia (opcional)"
                  disabled={isSubmitting}
                  {...register('trade_name')}
                />
              </Field>

              <Field>
                <Label>
                  <LockIcon><Lock size={11} /></LockIcon>
                  Inscrição Estadual
                </Label>
                <ReadonlyField title="Campo único — não pode ser alterado">
                  {readonlyFields.state_registration || '—'}
                </ReadonlyField>
                <ReadonlyHint>Campo único, não pode ser editado.</ReadonlyHint>
              </Field>

              <Field>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  disabled={isSubmitting}
                  {...register('phone', {
                    onChange: (e) => setValue('phone', maskPhone(e.target.value)),
                  })}
                />
              </Field>

              <Field>
                <Label>
                  <LockIcon><Lock size={11} /></LockIcon>
                  E-mail
                </Label>
                <ReadonlyField title="Campo único — não pode ser alterado">
                  {readonlyFields.email || '—'}
                </ReadonlyField>
                <ReadonlyHint>Campo único, não pode ser editado.</ReadonlyHint>
              </Field>

              <Field>
                <Label htmlFor="benefit_type">Tipo de Benefício *</Label>
                <Select
                  id="benefit_type"
                  $hasError={!!errors.benefit_type}
                  disabled={isSubmitting}
                  {...register('benefit_type', { required: 'Selecione o tipo.' })}
                >
                  {BENEFIT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </Select>
                {errors.benefit_type && (
                  <FieldError><AlertCircle size={11} />{errors.benefit_type.message}</FieldError>
                )}
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
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </Select>
                <FieldHint>
                  {loadingPartners
                    ? 'Buscando parceiros cadastrados…'
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
                    disabled={isSubmitting}
                    {...register('address_street')}
                  />
                </Field>
              </FullSpan>

              <Field>
                <Label htmlFor="address_number">Número</Label>
                <Input
                  id="address_number"
                  type="text"
                  placeholder="Nº"
                  disabled={isSubmitting}
                  {...register('address_number')}
                />
              </Field>

              <Field>
                <Label htmlFor="address_complement">Complemento</Label>
                <Input
                  id="address_complement"
                  type="text"
                  placeholder="Sala, Andar, Bloco…"
                  disabled={isSubmitting}
                  {...register('address_complement')}
                />
              </Field>

              <Field>
                <Label htmlFor="address_neighborhood">Bairro</Label>
                <Input
                  id="address_neighborhood"
                  type="text"
                  placeholder="Bairro"
                  disabled={isSubmitting}
                  {...register('address_neighborhood')}
                />
              </Field>

              <Field>
                <Label htmlFor="address_city">Cidade</Label>
                <Input
                  id="address_city"
                  type="text"
                  placeholder="Cidade"
                  disabled={isSubmitting}
                  {...register('address_city')}
                />
              </Field>

              <Field>
                <Label htmlFor="address_state">UF</Label>
                <Select
                  id="address_state"
                  disabled={isSubmitting}
                  {...register('address_state')}
                >
                  <option value="">Selecione</option>
                  {UF_OPTIONS.map((uf) => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </Select>
              </Field>

              <Field>
                <Label htmlFor="address_zip">CEP</Label>
                <Input
                  id="address_zip"
                  type="text"
                  placeholder="00000-000"
                  disabled={isSubmitting}
                  {...register('address_zip', {
                    onChange: (e) => setValue('address_zip', maskCEP(e.target.value)),
                  })}
                />
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

              <FormGrid>
                <Field>
                  <Label htmlFor="bank_bank_name">Nome do Banco</Label>
                  <Input
                    id="bank_bank_name"
                    type="text"
                    placeholder="Ex: Bradesco, Nubank…"
                    disabled={isSubmitting}
                    {...register('bank_bank_name')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="bank_bank_code">Código COMPE</Label>
                  <Input
                    id="bank_bank_code"
                    type="text"
                    placeholder="Ex: 237"
                    disabled={isSubmitting}
                    {...register('bank_bank_code')}
                  />
                  <FieldHint>Código de 3 dígitos (opcional).</FieldHint>
                </Field>

                <Field>
                  <Label htmlFor="bank_agency">Agência</Label>
                  <Input
                    id="bank_agency"
                    type="text"
                    placeholder="0000"
                    disabled={isSubmitting}
                    {...register('bank_agency')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="bank_agency_digit">Dígito Agência</Label>
                  <Input
                    id="bank_agency_digit"
                    type="text"
                    placeholder="X"
                    maxLength={2}
                    disabled={isSubmitting}
                    {...register('bank_agency_digit')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="bank_account">Conta</Label>
                  <Input
                    id="bank_account"
                    type="text"
                    placeholder="000000"
                    disabled={isSubmitting}
                    {...register('bank_account')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="bank_account_digit">Dígito Conta</Label>
                  <Input
                    id="bank_account_digit"
                    type="text"
                    placeholder="0"
                    maxLength={2}
                    disabled={isSubmitting}
                    {...register('bank_account_digit')}
                  />
                </Field>

                <Field>
                  <Label htmlFor="bank_account_type">Tipo de Conta</Label>
                  <Select
                    id="bank_account_type"
                    disabled={isSubmitting}
                    {...register('bank_account_type')}
                  >
                    {ACCOUNT_TYPE_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </Select>
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

            <FieldHint style={{ marginBottom: '16px' }}>
              Selecione um novo arquivo para <strong>substituir</strong> o documento
              existente no servidor. O arquivo antigo é removido automaticamente do Cloudinary.
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
          <X size={15} />
          Cancelar
        </CancelButton>

        <SaveButton
          type="submit"
          form="edit-client-form"
          disabled={isSubmitting || !hasChanges}
          $isSubmitting={isSubmitting}
          title={!hasChanges ? 'Nenhuma alteração detectada' : undefined}
        >
          {isSubmitting ? (
            <><Spinner />Salvando…</>
          ) : (
            <><Save size={15} />Salvar Alterações</>
          )}
        </SaveButton>
      </FormFooter>
    </>
  );
}