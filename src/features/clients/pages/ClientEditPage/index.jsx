import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import {
  ArrowLeft, Building2, MapPin, Landmark,
  Save, X, AlertCircle, Lock,
  Upload, File as FileIcon, Trash2,
} from 'lucide-react';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import api, { apiUpload, getApiErrorMessage } from '../../../../lib/api';
import { useAuth } from '../../../../contexts/AuthContext';
import {
  Container, PageHeader, BackButton, TitleGroup, PageTitle, PageSubtitle,
  Card, CardHeader, CardIconWrapper, CardTitle,
  FormGrid, FullSpan, Field, Label, Input, Select, Textarea,
  FieldError, BankSectionTitle, Divider,
  DocumentsGrid, DocumentUploadCard, DocumentUploadLabel,
  DropZone, DropZoneIcon, DropZoneText, FileInfo, FileInfoText, 
  FileName, FileMeta, RemoveFileButton,
  FormFooter, CancelButton, SaveButton, Spinner, FieldHint
} from './styles';

// ── Helpers de Formatação ──────────────────────────────────────────────────
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

const formatFileSize = (bytes) => {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// ── Schema de Validação ─────────────────────────────────────────────────────
const editSchema = yup.object({
  trade_name: yup.string().nullable().max(200, 'Máximo 200 caracteres.'),
  state_registration: yup.string().nullable().transform((v) => v?.replace(/\D/g, '') || null).matches(/^\d*$/, 'A inscrição estadual deve conter apenas números.').max(15, 'Inscrição estadual deve ter no máximo 15 caracteres.'),
  phone: yup.string().nullable().max(20, 'Máximo 20 caracteres.'),
  benefit_type: yup.string().required('Obrigatório.').oneOf(['food', 'meal', 'both']),
  notes: yup.string().nullable(),
  address_street: yup.string().nullable().max(255),
  address_number: yup.string().nullable().max(10),
  address_complement: yup.string().nullable().max(100),
  address_neighborhood: yup.string().nullable().max(100),
  address_city: yup.string().nullable().max(100),
  address_state: yup.string().nullable().max(2),
  address_zip: yup.string().nullable().test('cep', 'CEP inválido', v => !v || v.replace(/\D/g, '').length === 8),
  bank_bank_name: yup.string().nullable(),
  bank_agency: yup.string().nullable(),
  bank_account: yup.string().nullable(),
  bank_account_type: yup.string().nullable().oneOf(['checking', 'savings', '']),
});

const DOCUMENT_SLOTS = [
  { key: 'contrato', type: 'company_document', label: 'Contrato / Doc. Empresa' },
  { key: 'proof_of_address', type: 'proof_of_address', label: 'Comprovante de Endereço' },
  { key: 'bank_account_proof', type: 'bank_account_proof', label: 'Comprovante Bancário' },
  { key: 'card_machine_proof', type: 'card_machine_proof', label: 'Comprovante de Maquininha' },
];

// ── Componente de Upload de Documento ───────────────────────────────────────
function DocumentSlot({ slot, existingDoc, selectedFile, onFileSelect, onClearFile, disabled }) {
  const hasFile = !!selectedFile;
  return (
    <DocumentUploadCard $hasFile={hasFile || !!existingDoc}>
      <DocumentUploadLabel>{slot.label}</DocumentUploadLabel>
      {existingDoc && !hasFile && (
        <FileInfo>
          <FileIcon size={16} color="#059669" />
          <FileInfoText>
            <FileName>Documento já enviado</FileName>
            <FileMeta>Clique abaixo para substituir</FileMeta>
          </FileInfoText>
        </FileInfo>
      )}
      {hasFile && (
        <FileInfo>
          <FileIcon size={16} color="#B45A14" />
          <FileInfoText>
            <FileName>{selectedFile.name}</FileName>
            <FileMeta>{formatFileSize(selectedFile.size)}</FileMeta>
          </FileInfoText>
          <RemoveFileButton type="button" onClick={() => onClearFile(slot.key)} disabled={disabled}>
            <Trash2 size={13} />
          </RemoveFileButton>
        </FileInfo>
      )}
      <DropZone htmlFor={`file-${slot.key}`}>
        <DropZoneIcon $hasFile={hasFile}><Upload size={20} /></DropZoneIcon>
        <DropZoneText>{hasFile || existingDoc ? 'Trocar arquivo' : 'Selecionar arquivo'}</DropZoneText>
      </DropZone>
      <input
        id={`file-${slot.key}`}
        type="file"
        hidden
        disabled={disabled}
        accept="application/pdf,image/*"
        onChange={(e) => e.target.files?.[0] && onFileSelect(slot.key, e.target.files[0])}
      />
    </DocumentUploadCard>
  );
}

// ── Componente Principal ─────────────────────────────────────────────────────
export default function ClientEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState({});

  // 1. Busca dos dados via React Query
  const { data: client, isLoading } = useQuery({
    queryKey: ['client', id],
    queryFn: async () => {
      const res = await api.get(`/clients/${id}`);
      return res.data.data;
    },
  });

  // 2. Configuração do Form (Sincronização automática via 'values')
  const { register, handleSubmit, watch, setValue, formState: { errors, isDirty } } = useForm({
    resolver: yupResolver(editSchema),
    values: useMemo(() => {
      if (!client) return undefined;
      return {
        trade_name: client.trade_name || '',
        state_registration: client.state_registration || '',
        phone: maskPhone(client.phone || ''),
        benefit_type: client.benefit_type || 'food',
        notes: client.notes || '',
        address_street: client.address?.street || '',
        address_number: client.address?.number || '',
        address_complement: client.address?.complement || '',
        address_neighborhood: client.address?.neighborhood || '',
        address_city: client.address?.city || '',
        address_state: client.address?.state || '',
        address_zip: client.address?.zip_code || '',
        bank_bank_name: client.bank_account?.bank_name || '',
        bank_agency: client.bank_account?.agency || '',
        bank_account: client.bank_account?.account || '',
        bank_account_type: client.bank_account?.account_type || '',
      };
    }, [client])
  });

  // 3. Valores derivados para exibição
  const existingDocs = useMemo(() => {
    return client?.documents?.reduce((acc, doc) => ({ ...acc, [doc.type]: doc }), {}) || {};
  }, [client]);

  const hasFiles = Object.keys(selectedFiles).length > 0;
  const isSaveDisabled = !isDirty && !hasFiles;

  const handleFileSelect = (key, file) => setSelectedFiles(prev => ({ ...prev, [key]: file }));
  const handleClearFile = (key) => setSelectedFiles(prev => {
    const next = { ...prev }; delete next[key]; return next;
  });

  // 4. Submit
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const payload = {
        ...data,
        phone: data.phone?.replace(/\D/g, ''),
        address_zip: data.address_zip?.replace(/\D/g, ''),
      };

      if (hasFiles) {
        const formData = new FormData();
        formData.append('data', JSON.stringify(payload));
        if (selectedFiles.contrato) formData.append('contrato', selectedFiles.contrato);
        ['proof_of_address', 'bank_account_proof', 'card_machine_proof'].forEach(key => {
          if (selectedFiles[key]) formData.append('documentos', selectedFiles[key]);
        });
        await apiUpload.patch(`/clients/${id}`, formData);
      } else {
        await api.patch(`/clients/${id}`, payload);
      }

      // Invalidação completa
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['client', id] }),
        queryClient.invalidateQueries({ queryKey: ['clients'] }),
        queryClient.invalidateQueries({ queryKey: ['dashboard-recent-clients'] }),
      ]);

      toast.success('Cliente atualizado com sucesso!');
      navigate(`/clientes/${id}`);
    } catch (err) {
      toast.error(getApiErrorMessage(err, 'Erro ao salvar alterações.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <Container><Spinner /> Carregando dados do cliente...</Container>;

  return (
    <Container>
      <PageHeader>
        <BackButton type="button" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} /> Voltar
        </BackButton>
        <TitleGroup>
          <PageTitle>Editar Cliente</PageTitle>
          <PageSubtitle>
            Alterando dados de: <strong>{client?.corporate_name}</strong>
          </PageSubtitle>
        </TitleGroup>
      </PageHeader>

      <form id="edit-client-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Dados Imutáveis */}
        <Card style={{ marginBottom: '24px' }}>
          <CardHeader>
            <CardIconWrapper><Building2 size={18} /></CardIconWrapper>
            <CardTitle>Dados da Empresa (Bloqueados)</CardTitle>
          </CardHeader>
          <FormGrid>
            <Field>
              <Label>Razão Social</Label>
              <Input value={client?.corporate_name || ''} disabled style={{ backgroundColor: '#f9fafb' }} />
            </Field>
            <Field>
              <Label>CNPJ</Label>
              <Input value={maskCNPJ(client?.cnpj || '')} disabled style={{ backgroundColor: '#f9fafb' }} />
            </Field>
            <Field>
              <Label>Nome Fantasia</Label>
              <Input {...register('trade_name')} placeholder="Nome fantasia" />
            </Field>
            <Field>
              <Label>Inscrição Estadual</Label>
              <Input {...register('state_registration')} placeholder="Inscrição estadual" />
            </Field>
            
          </FormGrid>
          <FieldHint style={{ marginTop: '12px' }}>
            <Lock size={12} /> Dados fiscais e de identificação não podem ser alterados após o cadastro.
          </FieldHint>
        </Card>

        {/* Informações Editáveis */}
        <Card style={{ marginBottom: '24px' }}>
          <CardHeader>
            <CardIconWrapper><MapPin size={18} /></CardIconWrapper>
            <CardTitle>Endereço e Contato</CardTitle>
          </CardHeader>
          <FormGrid>
            <Field>
              <Label>E-mail Principal</Label>
              <Input value={client?.email || ''} disabled style={{ backgroundColor: '#f9fafb' }} />
            </Field>
            
            <Field>
              <Label>Telefone</Label>
              <Input 
                {...register('phone')} 
                onChange={(e) => setValue('phone', maskPhone(e.target.value))}
                placeholder="(00) 00000-0000"
              />
            </Field>
            <FullSpan>
              <Field>
                <Label>Logradouro</Label>
                <Input {...register('address_street')} placeholder="Rua, Av..." />
              </Field>
            </FullSpan>
            <Field>
              <Label>Número</Label>
              <Input {...register('address_number')} />
            </Field>
            <Field>
              <Label>Bairro</Label>
              <Input {...register('address_neighborhood')} />
            </Field>
          </FormGrid>
        </Card>

        {/* Bancário */}
        <Card style={{ marginBottom: '24px' }}>
          <CardHeader>
            <CardIconWrapper><Landmark size={18} /></CardIconWrapper>
            <CardTitle>Dados Bancários</CardTitle>
          </CardHeader>
          <FormGrid>
            <Field>
              <Label>Banco</Label>
              <Input {...register('bank_bank_name')} />
            </Field>
            <Field>
              <Label>Agência</Label>
              <Input {...register('bank_agency')} />
            </Field>
            <Field>
              <Label>Conta</Label>
              <Input {...register('bank_account')} />
            </Field>
          </FormGrid>
        </Card>

        {/* Documentos */}
        <Card style={{ marginBottom: '24px' }}>
          <CardHeader>
            <CardIconWrapper><FileIcon size={18} /></CardIconWrapper>
            <CardTitle>Documentação</CardTitle>
          </CardHeader>
          <FieldHint style={{ marginBottom: '16px' }}>
            Ao selecionar um novo arquivo, o documento anterior será substituído automaticamente.
          </FieldHint>
          <DocumentsGrid>
            {DOCUMENT_SLOTS.map(slot => (
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

        <FormFooter>
          <CancelButton type="button" onClick={() => navigate(-1)} disabled={isSubmitting}>
            <X size={15} /> Cancelar
          </CancelButton>
          <SaveButton 
            type="submit" 
            disabled={isSubmitting || isSaveDisabled}
          >
            {isSubmitting ? <><Spinner /> Salvando...</> : <><Save size={15} /> Salvar Alterações</>}
          </SaveButton>
        </FormFooter>
      </form>
    </Container>
  );
}