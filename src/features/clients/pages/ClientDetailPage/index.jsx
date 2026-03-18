// ============================================================
// src/features/clients/pages/ClientDetailPage/index.jsx
// Detalhes completos do cliente
// ============================================================
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    ArrowLeft, Building2, MapPin, CreditCard,
    FileText, Flag, Landmark, Download, Loader2,
} from 'lucide-react';
import { Pencil } from 'lucide-react';

import api, { getApiErrorMessage } from '../../../../lib/api';
import { useAuth } from '../../../../contexts/AuthContext';
import {
    Container,
    PageHeader,
    HeaderLeft,
    BackButton,
    TitleGroup,
    PageTitle,
    ProtocolTag,
    HeaderActions,
    Card,
    CardHeader,
    CardIconWrapper,
    CardTitle,
    TwoColumnGrid,
    InfoGrid,
    InfoGroup,
    InfoLabel,
    InfoValue,
    InfoValueMuted,
    StatusBadge,
    STATUS_LABELS,
    FlagList,
    FlagItem,
    FlagInfo,
    FlagName,
    FlagOrigin,
    FlagPrice,
    DocumentList,
    DocumentItem,
    DocumentIconWrapper,
    DocumentInfo,
    DocumentName,
    DocumentMeta,
    DocumentDownloadButton,
    BankCard,
    EmptyState,
    EmptyText,
    SkeletonBar,
    SkeletonCard,
    TwoColumnGrid as SkeletonGrid,
    Divider,
} from './styles';

// ── Formatadores ──────────────────────────────────────────────────────────────

// CNPJ: 00.000.000/0001-00
const formatCNPJ = (v) => {
    if (!v) return '—';
    const d = v.replace(/\D/g, '');
    if (d.length !== 14) return v;
    return d.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
};

// Telefone: (00) 00000-0000
const formatPhone = (v) => {
    if (!v) return '—';
    const d = v.replace(/\D/g, '');
    if (d.length === 11) return d.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    if (d.length === 10) return d.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    return v;
};

// Data: DD/MM/AAAA HH:MM
const formatDate = (iso) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric',
    });
};

// Moeda BRL
const formatCurrency = (v) => {
    if (v === null || v === undefined) return '—';
    return Number(v).toLocaleString('pt-BR', {
        style: 'currency', currency: 'BRL',
    });
};

// Tipo de benefício
const BENEFIT_LABELS = {
    food: 'Vale Alimentação',
    meal: 'Vale Refeição',
    both: 'Alimentação + Refeição',
};

// Tipo de documento
const DOCUMENT_TYPE_LABELS = {
    company_document: 'Documento da Empresa',
    proof_of_address: 'Comprovante de Endereço',
    bank_account_proof: 'Comprovante Bancário',
    card_machine_proof: 'Comprovante de Maquininha',
};

// Tipo de conta bancária
const ACCOUNT_TYPE_LABELS = {
    checking: 'Conta Corrente',
    savings: 'Conta Poupança',
};

// Tamanho de arquivo legível
const formatFileSize = (bytes) => {
    if (!bytes) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// ── Skeleton de carregamento ──────────────────────────────────────────────────

function DetailSkeleton() {
    return (
        <Container>
            {/* Header skeleton */}
            <PageHeader>
                <HeaderLeft>
                    <SkeletonBar $w="80px" $h="36px" style={{ borderRadius: '6px' }} />
                    <TitleGroup>
                        <SkeletonBar $w="220px" $h="28px" />
                        <SkeletonBar $w="120px" $h="14px" style={{ marginTop: '4px' }} />
                    </TitleGroup>
                </HeaderLeft>
            </PageHeader>

            {/* Cards skeleton */}
            <TwoColumnGrid>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <SkeletonCard>
                        <SkeletonBar $w="40%" $h="18px" />
                        <Divider />
                        <InfoGrid>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <InfoGroup key={i}>
                                    <SkeletonBar $w="50%" $h="11px" />
                                    <SkeletonBar $w="80%" $h="16px" style={{ marginTop: '4px' }} />
                                </InfoGroup>
                            ))}
                        </InfoGrid>
                    </SkeletonCard>
                    <SkeletonCard>
                        <SkeletonBar $w="35%" $h="18px" />
                        <Divider />
                        <InfoGrid>
                            {Array.from({ length: 4 }).map((_, i) => (
                                <InfoGroup key={i}>
                                    <SkeletonBar $w="45%" $h="11px" />
                                    <SkeletonBar $w="70%" $h="16px" style={{ marginTop: '4px' }} />
                                </InfoGroup>
                            ))}
                        </InfoGrid>
                    </SkeletonCard>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <SkeletonCard>
                        <SkeletonBar $w="55%" $h="18px" />
                        <Divider />
                        {Array.from({ length: 3 }).map((_, i) => (
                            <SkeletonBar key={i} $h="52px" style={{ borderRadius: '8px' }} />
                        ))}
                    </SkeletonCard>
                </div>
            </TwoColumnGrid>
        </Container>
    );
}

// ── Componente principal ──────────────────────────────────────────────────────

export default function ClientDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isAdmin } = useAuth();

    // ── Estado ────────────────────────────────────────────────────────────────
    const [client, setClient] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [downloading, setDownloading] = useState(null); // id do doc sendo baixado

    // ── Busca o cliente ───────────────────────────────────────────────────────
    const fetchClient = useCallback(async () => {
        setIsLoading(true);
        try {
            const { data } = await api.get(`/clients/${id}`);
            setClient(data.data);
        } catch (error) {
            toast.error(getApiErrorMessage(error, 'Erro ao carregar dados do cliente.'));
            navigate('/clientes', { replace: true });
        } finally {
            setIsLoading(false);
        }
    }, [id, navigate]);

    useEffect(() => { fetchClient(); }, [fetchClient]);

    // ── Download de documento via proxy do backend ────────────────────────────
    // O backend nunca expõe a URL do Cloudinary — baixa como blob
    const handleDownload = async (doc) => {
        setDownloading(doc.id);
        try {
            const response = await api.get(`/documents/${doc.id}/download`, {
                responseType: 'blob',
            });

            const url = URL.createObjectURL(response.data);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = doc.original_name ?? `documento-${doc.id}`;
            document.body.appendChild(anchor);
            anchor.click();
            anchor.remove();
            URL.revokeObjectURL(url);

        } catch (error) {
            toast.error(getApiErrorMessage(error, 'Erro ao baixar o documento.'));
        } finally {
            setDownloading(null);
        }
    };

    // ── Renderização ──────────────────────────────────────────────────────────

    if (isLoading) return <DetailSkeleton />;
    if (!client) return null;

    const {
        corporate_name, trade_name, cnpj, state_registration,
        phone, email, protocol, benefit_type, overall_status,
        notes, createdAt,
        address_street, address_number, address_complement,
        address_neighborhood, address_city, address_state, address_zip,
        clientFlags = [],
        documents = [],
        bankAccounts = [],
    } = client;

    // Endereço completo formatado
    const hasAddress = address_street || address_city;
    const addressLine = [
        address_street,
        address_number,
        address_complement,
    ].filter(Boolean).join(', ');
    const addressCity = [
        address_neighborhood,
        address_city,
        address_state,
    ].filter(Boolean).join(' — ');

    return (
        <Container>

            {/* ── Header ─────────────────────────────────────────── */}
            <PageHeader>
                <HeaderLeft>
                    <BackButton type="button" onClick={() => navigate(-1)}>
                        <ArrowLeft size={15} />
                        Voltar
                    </BackButton>

                    <TitleGroup>
                        <PageTitle>
                            {trade_name || corporate_name}
                        </PageTitle>
                        <ProtocolTag>Protocolo #{protocol}</ProtocolTag>
                    </TitleGroup>
                </HeaderLeft>

                <HeaderActions>
                    <button onClick={() => navigate(`/clientes/${id}/editar`)}>
                        <Pencil size={15} /> Editar
                    </button>
                    <StatusBadge $status={overall_status}>
                        {STATUS_LABELS[overall_status] ?? overall_status}
                    </StatusBadge>
                </HeaderActions>
            </PageHeader>

            {/* ── Layout de duas colunas ────────────────────────── */}
            <TwoColumnGrid>

                {/* ── COLUNA PRINCIPAL ─────────────────────────────── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    {/* Card: Dados da Empresa */}
                    <Card>
                        <CardHeader>
                            <CardIconWrapper><Building2 size={18} /></CardIconWrapper>
                            <CardTitle>Dados da Empresa</CardTitle>
                        </CardHeader>

                        <InfoGrid>
                            <InfoGroup>
                                <InfoLabel>Razão Social</InfoLabel>
                                <InfoValue>{corporate_name || '—'}</InfoValue>
                            </InfoGroup>

                            <InfoGroup>
                                <InfoLabel>Nome Fantasia</InfoLabel>
                                <InfoValue>{trade_name || '—'}</InfoValue>
                            </InfoGroup>

                            <InfoGroup>
                                <InfoLabel>CNPJ</InfoLabel>
                                <InfoValue>{formatCNPJ(cnpj)}</InfoValue>
                            </InfoGroup>

                            <InfoGroup>
                                <InfoLabel>Inscrição Estadual</InfoLabel>
                                <InfoValue>{state_registration || '—'}</InfoValue>
                            </InfoGroup>

                            <InfoGroup>
                                <InfoLabel>Telefone</InfoLabel>
                                <InfoValue>{formatPhone(phone)}</InfoValue>
                            </InfoGroup>

                            <InfoGroup>
                                <InfoLabel>E-mail</InfoLabel>
                                <InfoValue>{email || '—'}</InfoValue>
                            </InfoGroup>

                            <InfoGroup>
                                <InfoLabel>Tipo de Benefício</InfoLabel>
                                <InfoValue>{BENEFIT_LABELS[benefit_type] ?? benefit_type ?? '—'}</InfoValue>
                            </InfoGroup>

                            <InfoGroup>
                                <InfoLabel>Cadastrado em</InfoLabel>
                                <InfoValue>{formatDate(createdAt)}</InfoValue>
                            </InfoGroup>

                            {notes && (
                                <InfoGroup $span>
                                    <InfoLabel>Observações</InfoLabel>
                                    <InfoValueMuted>{notes}</InfoValueMuted>
                                </InfoGroup>
                            )}
                        </InfoGrid>
                    </Card>

                    {/* Card: Endereço */}
                    <Card>
                        <CardHeader>
                            <CardIconWrapper><MapPin size={18} /></CardIconWrapper>
                            <CardTitle>Endereço</CardTitle>
                        </CardHeader>

                        {hasAddress ? (
                            <InfoGrid $cols={2}>
                                <InfoGroup $span>
                                    <InfoLabel>Logradouro</InfoLabel>
                                    <InfoValue>{addressLine || '—'}</InfoValue>
                                </InfoGroup>

                                <InfoGroup>
                                    <InfoLabel>Bairro / Cidade / UF</InfoLabel>
                                    <InfoValue>{addressCity || '—'}</InfoValue>
                                </InfoGroup>

                                <InfoGroup>
                                    <InfoLabel>CEP</InfoLabel>
                                    <InfoValue>
                                        {address_zip
                                            ? address_zip.replace(/^(\d{5})(\d{3})$/, '$1-$2')
                                            : '—'}
                                    </InfoValue>
                                </InfoGroup>
                            </InfoGrid>
                        ) : (
                            <EmptyState>
                                <EmptyText>Endereço não informado.</EmptyText>
                            </EmptyState>
                        )}
                    </Card>

                    {/* Card: Documentos */}
                    <Card>
                        <CardHeader>
                            <CardIconWrapper><FileText size={18} /></CardIconWrapper>
                            <CardTitle>Documentos</CardTitle>
                        </CardHeader>

                        {documents.length > 0 ? (
                            <DocumentList>
                                {documents.map((doc) => (
                                    <DocumentItem key={doc.id}>
                                        <DocumentIconWrapper>
                                            <FileText size={16} />
                                        </DocumentIconWrapper>

                                        <DocumentInfo>
                                            <DocumentName>
                                                {doc.original_name ||
                                                    DOCUMENT_TYPE_LABELS[doc.document_type] ||
                                                    'Documento'}
                                            </DocumentName>
                                            <DocumentMeta>
                                                {DOCUMENT_TYPE_LABELS[doc.document_type] ?? doc.document_type}
                                                {doc.file_size ? ` · ${formatFileSize(doc.file_size)}` : ''}
                                            </DocumentMeta>
                                        </DocumentInfo>

                                        {/* Botão de download via proxy — nunca expõe URL do Cloudinary */}
                                        <DocumentDownloadButton
                                            type="button"
                                            onClick={() => handleDownload(doc)}
                                            disabled={downloading === doc.id}
                                            title="Baixar documento"
                                        >
                                            {downloading === doc.id
                                                ? <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
                                                : <Download size={14} />}
                                        </DocumentDownloadButton>
                                    </DocumentItem>
                                ))}
                            </DocumentList>
                        ) : (
                            <EmptyState>
                                <EmptyText>Nenhum documento anexado.</EmptyText>
                            </EmptyState>
                        )}
                    </Card>

                </div>

                {/* ── COLUNA LATERAL ───────────────────────────────── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    {/* Card: Plano / Benefício / Bandeiras */}
                    <Card>
                        <CardHeader>
                            <CardIconWrapper><Flag size={18} /></CardIconWrapper>
                            <CardTitle>Bandeiras</CardTitle>
                        </CardHeader>

                        {clientFlags.length > 0 ? (
                            <FlagList>
                                {clientFlags.map((cf) => (
                                    <FlagItem key={cf.id}>
                                        <FlagInfo>
                                            <FlagName>{cf.flag?.name ?? `Bandeira #${cf.flag_id}`}</FlagName>
                                            <FlagOrigin>
                                                {cf.origin} · <StatusBadge $status={cf.status} style={{ fontSize: '10px', padding: '2px 8px' }}>
                                                    {STATUS_LABELS[cf.status] ?? cf.status}
                                                </StatusBadge>
                                            </FlagOrigin>
                                        </FlagInfo>
                                        {cf.price && (
                                            <FlagPrice>{formatCurrency(cf.price)}</FlagPrice>
                                        )}
                                    </FlagItem>
                                ))}
                            </FlagList>
                        ) : (
                            <EmptyState>
                                <EmptyText>Nenhuma bandeira vinculada.</EmptyText>
                            </EmptyState>
                        )}
                    </Card>

                    {/* Card: Conta Bancária */}
                    <Card>
                        <CardHeader>
                            <CardIconWrapper><Landmark size={18} /></CardIconWrapper>
                            <CardTitle>Conta Bancária</CardTitle>
                        </CardHeader>

                        {bankAccounts.length > 0 ? (
                            bankAccounts.map((bank) => (
                                <BankCard key={bank.id}>
                                    <InfoGrid $cols={1}>
                                        <InfoGroup>
                                            <InfoLabel>Banco</InfoLabel>
                                            <InfoValue>
                                                {bank.bank_name}
                                                {bank.bank_code ? ` (${bank.bank_code})` : ''}
                                            </InfoValue>
                                        </InfoGroup>

                                        <InfoGroup>
                                            <InfoLabel>Agência</InfoLabel>
                                            <InfoValue>
                                                {bank.agency}
                                                {bank.agency_digit ? `-${bank.agency_digit}` : ''}
                                            </InfoValue>
                                        </InfoGroup>

                                        <InfoGroup>
                                            <InfoLabel>Conta</InfoLabel>
                                            <InfoValue>
                                                {bank.account}-{bank.account_digit}
                                            </InfoValue>
                                        </InfoGroup>

                                        <InfoGroup>
                                            <InfoLabel>Tipo</InfoLabel>
                                            <InfoValue>
                                                {ACCOUNT_TYPE_LABELS[bank.account_type] ?? bank.account_type}
                                            </InfoValue>
                                        </InfoGroup>
                                    </InfoGrid>
                                </BankCard>
                            ))
                        ) : (
                            <EmptyState>
                                <EmptyText>Nenhuma conta bancária cadastrada.</EmptyText>
                            </EmptyState>
                        )}
                    </Card>

                    {/* Card: Plano */}
                    {client.plan && (
                        <Card>
                            <CardHeader>
                                <CardIconWrapper><CreditCard size={18} /></CardIconWrapper>
                                <CardTitle>Plano</CardTitle>
                            </CardHeader>

                            <InfoGrid $cols={1}>
                                <InfoGroup>
                                    <InfoLabel>Nome do Plano</InfoLabel>
                                    <InfoValue>{client.plan.name}</InfoValue>
                                </InfoGroup>

                                {client.plan.description && (
                                    <InfoGroup>
                                        <InfoLabel>Descrição</InfoLabel>
                                        <InfoValueMuted>{client.plan.description}</InfoValueMuted>
                                    </InfoGroup>
                                )}

                                <InfoGroup>
                                    <InfoLabel>Valor</InfoLabel>
                                    <InfoValue>{formatCurrency(client.plan.price)}</InfoValue>
                                </InfoGroup>
                            </InfoGrid>
                        </Card>
                    )}

                </div>
            </TwoColumnGrid>

            {/* Animação do spinner inline para o botão de download */}
            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

        </Container>
    );
}