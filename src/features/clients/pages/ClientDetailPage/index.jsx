// // ============================================================
// // src/features/clients/pages/ClientDetailPage/index.jsx
// //
// // Otimizações de requisições:
// //   - Atualização otimista de bandeiras: a tela atualiza imediatamente
// //     sem esperar a API. Só 1 re-fetch ao final para sincronizar o
// //     overall_status calculado pelo backend.
// //
// // Permissões:
// //   admin   → vê tudo + editar + alterar status de bandeiras
// //   user    → vê tudo + editar (se criou o cliente) + alterar status (se criou)
// //   partner → vê apenas: razão social, cnpj, telefone, protocolo,
// //             status geral, plano contratado, status de cada bandeira (readonly)
// // ============================================================
// import { useState, useEffect, useCallback, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import {
//   ArrowLeft, Building2, MapPin, CreditCard,
//   FileText, Flag, Landmark, Download, Loader2, Pencil,
// } from 'lucide-react';

// import api, { getApiErrorMessage } from '../../../../lib/api';
// import { useAuth } from '../../../../contexts/AuthContext';
// import {
//   Container, PageHeader, HeaderLeft, BackButton,
//   TitleGroup, PageTitle, ProtocolTag, HeaderActions,
//   Card, CardHeader, CardIconWrapper, CardTitle,
//   TwoColumnGrid, InfoGrid, InfoGroup, InfoLabel,
//   InfoValue, InfoValueMuted,
//   StatusBadge, STATUS_LABELS,
//   FlagList, FlagItem, FlagInfo, FlagName, FlagOrigin, FlagPrice,
//   DocumentList, DocumentItem, DocumentIconWrapper,
//   DocumentInfo, DocumentName, DocumentMeta, DocumentDownloadButton,
//   BankCard, EmptyState, EmptyText,
//   SkeletonBar, SkeletonCard, Divider,
// } from './styles';

// // ── Formatadores ──────────────────────────────────────────────────────────────

// const formatCNPJ = (v) => {
//   if (!v) return '—';
//   const d = v.replace(/\D/g, '');
//   if (d.length !== 14) return v;
//   return d.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
// };

// const formatPhone = (v) => {
//   if (!v) return '—';
//   const d = v.replace(/\D/g, '');
//   if (d.length === 11) return d.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
//   if (d.length === 10) return d.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
//   return v;
// };

// const formatDate = (iso) => {
//   if (!iso) return '—';
//   return new Date(iso).toLocaleDateString('pt-BR', {
//     day: '2-digit', month: '2-digit', year: 'numeric',
//   });
// };

// const formatCurrency = (v) => {
//   if (v === null || v === undefined) return '—';
//   return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
// };

// const BENEFIT_LABELS = {
//   food: 'Vale Alimentação',
//   meal: 'Vale Refeição',
//   both: 'Alimentação + Refeição',
// };

// const DOCUMENT_TYPE_LABELS = {
//   company_document:   'Documento da Empresa',
//   proof_of_address:   'Comprovante de Endereço',
//   bank_account_proof: 'Comprovante Bancário',
//   card_machine_proof: 'Comprovante de Maquininha',
// };

// const ACCOUNT_TYPE_LABELS = {
//   checking: 'Conta Corrente',
//   savings:  'Conta Poupança',
// };

// const formatFileSize = (bytes) => {
//   if (!bytes) return '';
//   if (bytes < 1024) return `${bytes} B`;
//   if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
//   return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
// };

// // ── Skeleton ──────────────────────────────────────────────────────────────────

// function DetailSkeleton() {
//   return (
//     <Container>
//       <PageHeader>
//         <HeaderLeft>
//           <SkeletonBar $w="80px" $h="36px" style={{ borderRadius: '6px' }} />
//           <TitleGroup>
//             <SkeletonBar $w="220px" $h="28px" />
//             <SkeletonBar $w="120px" $h="14px" style={{ marginTop: '4px' }} />
//           </TitleGroup>
//         </HeaderLeft>
//       </PageHeader>
//       <TwoColumnGrid>
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
//           <SkeletonCard>
//             <SkeletonBar $w="40%" $h="18px" /><Divider />
//             <InfoGrid>
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <InfoGroup key={i}>
//                   <SkeletonBar $w="50%" $h="11px" />
//                   <SkeletonBar $w="80%" $h="16px" style={{ marginTop: '4px' }} />
//                 </InfoGroup>
//               ))}
//             </InfoGrid>
//           </SkeletonCard>
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
//           <SkeletonCard>
//             <SkeletonBar $w="55%" $h="18px" /><Divider />
//             {Array.from({ length: 3 }).map((_, i) => (
//               <SkeletonBar key={i} $h="52px" style={{ borderRadius: '8px' }} />
//             ))}
//           </SkeletonCard>
//         </div>
//       </TwoColumnGrid>
//     </Container>
//   );
// }

// // ── Botão Editar ──────────────────────────────────────────────────────────────

// const EditButton = ({ onClick }) => (
//   <button
//     type="button"
//     onClick={onClick}
//     style={{
//       display: 'inline-flex', alignItems: 'center', gap: '6px',
//       padding: '8px 14px',
//       border: '1.5px solid #e4d9cf', borderRadius: '8px',
//       background: 'transparent', fontFamily: 'inherit',
//       fontSize: '13px', fontWeight: 500, color: '#7a6455',
//       cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 150ms ease',
//     }}
//     onMouseEnter={e => {
//       e.currentTarget.style.backgroundColor = '#f2ece6';
//       e.currentTarget.style.color = '#3d3028';
//     }}
//     onMouseLeave={e => {
//       e.currentTarget.style.backgroundColor = 'transparent';
//       e.currentTarget.style.color = '#7a6455';
//     }}
//   >
//     <Pencil size={14} /> Editar
//   </button>
// );

// // ── Select de status de bandeira ──────────────────────────────────────────────
// // Atualização otimista: a UI muda imediatamente, a API é chamada em paralelo.
// // Se a API falhar, reverte para o status anterior.
// // Só dispara 1 re-fetch ao final para sincronizar o overall_status do cliente.

// const FLAG_STATUS_OPTIONS = [
//   { value: 'pending',  label: 'Pendente'   },
//   { value: 'analysis', label: 'Em análise' },
//   { value: 'approved', label: 'Aprovado'   },
// ];

// const STATUS_SELECT_COLORS = {
//   approved: { bg: '#d1fae5', color: '#065f46' },
//   analysis: { bg: '#dbeafe', color: '#1e40af' },
//   pending:  { bg: '#fef3c7', color: '#92400e' },
// };

// function FlagStatusSelect({ clientFlagId, currentStatus, onUpdated, onOptimisticUpdate }) {
//   const [isUpdating, setIsUpdating]   = useState(false);
//   // Estado local para refletir a mudança imediatamente na UI
//   const [localStatus, setLocalStatus] = useState(currentStatus);
//   const colors = STATUS_SELECT_COLORS[localStatus] ?? STATUS_SELECT_COLORS.pending;

//   // Sincroniza se o prop mudar externamente (ex: após re-fetch)
//   useEffect(() => { setLocalStatus(currentStatus); }, [currentStatus]);

//   const handleChange = async (e) => {
//     const newStatus   = e.target.value;
//     const prevStatus  = localStatus;
//     if (newStatus === prevStatus) return;

//     // 1. Atualiza a UI imediatamente (otimista)
//     setLocalStatus(newStatus);
//     onOptimisticUpdate(clientFlagId, newStatus);

//     setIsUpdating(true);
//     try {
//       // 2. Chama a API em paralelo
//       await api.patch(`/client-flags/${clientFlagId}/status`, { status: newStatus });
//       toast.success('Status da bandeira atualizado.');
//       // 3. Um único re-fetch para pegar o overall_status recalculado pelo backend
//       onUpdated();
//     } catch (error) {
//       // 4. Reverte se a API falhar
//       setLocalStatus(prevStatus);
//       onOptimisticUpdate(clientFlagId, prevStatus);
//       toast.error(getApiErrorMessage(error, 'Erro ao atualizar status da bandeira.'));
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   return (
//     <select
//       value={localStatus}
//       onChange={handleChange}
//       disabled={isUpdating}
//       style={{
//         height: '28px', padding: '0 28px 0 8px',
//         border: '1.5px solid #e4d9cf', borderRadius: '99px',
//         fontFamily: 'inherit', fontSize: '11px', fontWeight: 600,
//         cursor: isUpdating ? 'not-allowed' : 'pointer',
//         appearance: 'none',
//         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
//         backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center',
//         opacity: isUpdating ? 0.6 : 1,
//         backgroundColor: colors.bg,
//         color: colors.color,
//         minWidth: '110px',
//         transition: 'background-color 200ms ease, color 200ms ease',
//       }}
//     >
//       {FLAG_STATUS_OPTIONS.map(opt => (
//         <option key={opt.value} value={opt.value}>{opt.label}</option>
//       ))}
//     </select>
//   );
// }

// // ── Componente principal ──────────────────────────────────────────────────────

// export default function ClientDetailPage() {
//   const { id }   = useParams();
//   const navigate = useNavigate();
//   const { isAdmin, isPartner, isUser, user } = useAuth();

//   const [client,      setClient]      = useState(null);
//   const [isLoading,   setIsLoading]   = useState(true);
//   const [downloading, setDownloading] = useState(null);

//   // ── Busca o cliente ───────────────────────────────────────────────────────
//   // Chamado apenas na montagem e após alteração de bandeira (para sincronizar
//   // o overall_status). Não tem dependências voláteis para evitar loops.
//   const fetchClient = useCallback(async () => {
//     setIsLoading((prev) => {
//       // Só mostra skeleton no carregamento inicial, não nos re-fetches
//       return prev === true ? true : false;
//     });
//     try {
//       const { data } = await api.get(`/clients/${id}`);
//       setClient(data.data);
//     } catch (error) {
//       toast.error(getApiErrorMessage(error, 'Erro ao carregar dados do cliente.'));
//       navigate('/clientes', { replace: true });
//     } finally {
//       setIsLoading(false);
//     }
//   }, [id, navigate]);

//   useEffect(() => { fetchClient(); }, [fetchClient]);

//   // ── Atualização otimista de bandeira ──────────────────────────────────────
//   // Atualiza o estado local sem re-fetch. O FlagStatusSelect chama isso
//   // imediatamente, e depois dispara 1 re-fetch para pegar o overall_status.
//   const handleOptimisticFlagUpdate = useCallback((flagId, newStatus) => {
//     setClient((prev) => {
//       if (!prev) return prev;
//       return {
//         ...prev,
//         clientFlags: prev.clientFlags.map((cf) =>
//           cf.id === flagId ? { ...cf, status: newStatus } : cf
//         ),
//       };
//     });
//   }, []);

//   // ── Re-fetch leve após alterar bandeira ───────────────────────────────────
//   // Não mostra skeleton — só atualiza o overall_status silenciosamente
//   const refetchAfterFlagUpdate = useCallback(async () => {
//     try {
//       const { data } = await api.get(`/clients/${id}`);
//       setClient(data.data);
//     } catch {
//       // Silencioso — a UI já está atualizada otimisticamente
//     }
//   }, [id]);

//   // ── Download de documento ─────────────────────────────────────────────────
//   const handleDownload = async (doc) => {
//     setDownloading(doc.id);
//     try {
//       const response = await api.get(`/documents/${doc.id}/download`, {
//         responseType: 'blob',
//       });
//       const url    = URL.createObjectURL(response.data);
//       const anchor = document.createElement('a');
//       anchor.href  = url;
//       anchor.download = doc.original_name ?? `documento-${doc.id}`;
//       document.body.appendChild(anchor);
//       anchor.click();
//       anchor.remove();
//       URL.revokeObjectURL(url);
//     } catch (error) {
//       toast.error(getApiErrorMessage(error, 'Erro ao baixar o documento.'));
//     } finally {
//       setDownloading(null);
//     }
//   };

//   // ── Renderização ──────────────────────────────────────────────────────────
//   if (isLoading) return <DetailSkeleton />;
//   if (!client)   return null;

//   const {
//     corporate_name, trade_name, cnpj, state_registration,
//     phone, email, protocol, benefit_type, overall_status,
//     notes, createdAt,
//     address_street, address_number, address_complement,
//     address_neighborhood, address_city, address_state, address_zip,
//     clientFlags  = [],
//     documents    = [],
//     bankAccounts = [],
//   } = client;

//   const canEdit      = isAdmin || (isUser && client.created_by === user?.id);
//   const canEditFlags = isAdmin || (isUser && client.created_by === user?.id);

//   const hasAddress  = address_street || address_city;
//   const addressLine = [address_street, address_number, address_complement]
//     .filter(Boolean).join(', ');
//   const addressCity = [address_neighborhood, address_city, address_state]
//     .filter(Boolean).join(' — ');

//   // ── VISÃO PARCEIRO ────────────────────────────────────────────────────────
//   if (isPartner) {
//     return (
//       <Container>
//         <PageHeader>
//           <HeaderLeft>
//             <BackButton type="button" onClick={() => navigate(-1)}>
//               <ArrowLeft size={15} /> Voltar
//             </BackButton>
//             <TitleGroup>
//               <PageTitle>{trade_name || corporate_name}</PageTitle>
//               <ProtocolTag>Protocolo #{protocol}</ProtocolTag>
//             </TitleGroup>
//           </HeaderLeft>
//           <HeaderActions>
//             <StatusBadge $status={overall_status}>
//               {STATUS_LABELS[overall_status] ?? overall_status}
//             </StatusBadge>
//           </HeaderActions>
//         </PageHeader>

//         <TwoColumnGrid>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
//             <Card>
//               <CardHeader>
//                 <CardIconWrapper><Building2 size={18} /></CardIconWrapper>
//                 <CardTitle>Dados da Empresa</CardTitle>
//               </CardHeader>
//               <InfoGrid>
//                 <InfoGroup><InfoLabel>Razão Social</InfoLabel><InfoValue>{corporate_name || '—'}</InfoValue></InfoGroup>
//                 <InfoGroup><InfoLabel>CNPJ</InfoLabel><InfoValue>{formatCNPJ(cnpj)}</InfoValue></InfoGroup>
//                 <InfoGroup><InfoLabel>Telefone</InfoLabel><InfoValue>{formatPhone(phone)}</InfoValue></InfoGroup>
//                 <InfoGroup><InfoLabel>Tipo de Benefício</InfoLabel><InfoValue>{BENEFIT_LABELS[benefit_type] ?? benefit_type ?? '—'}</InfoValue></InfoGroup>
//                 <InfoGroup><InfoLabel>Cadastrado em</InfoLabel><InfoValue>{formatDate(createdAt)}</InfoValue></InfoGroup>
//               </InfoGrid>
//             </Card>
//           </div>

//           <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
//             <Card>
//               <CardHeader>
//                 <CardIconWrapper><Flag size={18} /></CardIconWrapper>
//                 <CardTitle>Bandeiras</CardTitle>
//               </CardHeader>
//               {clientFlags.length > 0 ? (
//                 <FlagList>
//                   {clientFlags.map((cf) => (
//                     <FlagItem key={cf.id}>
//                       <FlagInfo>
//                         <FlagName>{cf.flag?.name ?? `Bandeira #${cf.flag_id}`}</FlagName>
//                         <FlagOrigin>{cf.origin}</FlagOrigin>
//                       </FlagInfo>
//                       <StatusBadge $status={cf.status} style={{ fontSize: '10px', padding: '2px 8px' }}>
//                         {STATUS_LABELS[cf.status] ?? cf.status}
//                       </StatusBadge>
//                     </FlagItem>
//                   ))}
//                 </FlagList>
//               ) : (
//                 <EmptyState><EmptyText>Nenhuma bandeira vinculada.</EmptyText></EmptyState>
//               )}
//             </Card>

//             {client.plan && (
//               <Card>
//                 <CardHeader>
//                   <CardIconWrapper><CreditCard size={18} /></CardIconWrapper>
//                   <CardTitle>Plano</CardTitle>
//                 </CardHeader>
//                 <InfoGrid $cols={1}>
//                   <InfoGroup><InfoLabel>Nome do Plano</InfoLabel><InfoValue>{client.plan.name}</InfoValue></InfoGroup>
//                   {client.plan.description && (
//                     <InfoGroup><InfoLabel>Descrição</InfoLabel><InfoValueMuted>{client.plan.description}</InfoValueMuted></InfoGroup>
//                   )}
//                   <InfoGroup><InfoLabel>Valor</InfoLabel><InfoValue>{formatCurrency(client.plan.price)}</InfoValue></InfoGroup>
//                 </InfoGrid>
//               </Card>
//             )}
//           </div>
//         </TwoColumnGrid>
//       </Container>
//     );
//   }

//   // ── VISÃO ADMIN / USER ────────────────────────────────────────────────────
//   return (
//     <Container>
//       <PageHeader>
//         <HeaderLeft>
//           <BackButton onClick={() => navigate('/clientes')} title="Voltar para a lista">
//             <ArrowLeft size={18} /> Voltar
//           </BackButton>
//           <TitleGroup>
//             <PageTitle>{client.trade_name || client.corporate_name}</PageTitle>
//             <ProtocolTag>Protocolo #{protocol}</ProtocolTag>
//           </TitleGroup>
//         </HeaderLeft>
//         {!isPartner && (
//         <HeaderActions>
//           {canEdit && <EditButton onClick={() => navigate(`/clientes/${id}/editar`)} />}
//           <StatusBadge $status={overall_status}>
//             {STATUS_LABELS[overall_status] ?? overall_status}
//           </StatusBadge>
//         </HeaderActions>
//         )}
//       </PageHeader>

//       <TwoColumnGrid>

//         {/* ── COLUNA PRINCIPAL ─────────────────────────────── */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

//           <Card>
//             <CardHeader>
//               <CardIconWrapper><Building2 size={18} /></CardIconWrapper>
//               <CardTitle>Dados da Empresa</CardTitle>
//             </CardHeader>
//             <InfoGrid>
//               <InfoGroup><InfoLabel>Razão Social</InfoLabel><InfoValue>{corporate_name || '—'}</InfoValue></InfoGroup>
//               <InfoGroup><InfoLabel>Nome Fantasia</InfoLabel><InfoValue>{trade_name || '—'}</InfoValue></InfoGroup>
//               <InfoGroup><InfoLabel>CNPJ</InfoLabel><InfoValue>{formatCNPJ(cnpj)}</InfoValue></InfoGroup>
//               <InfoGroup><InfoLabel>Inscrição Estadual</InfoLabel><InfoValue>{state_registration || '—'}</InfoValue></InfoGroup>
//               <InfoGroup><InfoLabel>Telefone</InfoLabel><InfoValue>{formatPhone(phone)}</InfoValue></InfoGroup>
//               <InfoGroup><InfoLabel>E-mail</InfoLabel><InfoValue>{email || '—'}</InfoValue></InfoGroup>
//               <InfoGroup><InfoLabel>Tipo de Benefício</InfoLabel><InfoValue>{BENEFIT_LABELS[benefit_type] ?? benefit_type ?? '—'}</InfoValue></InfoGroup>
//               <InfoGroup><InfoLabel>Cadastrado em</InfoLabel><InfoValue>{formatDate(createdAt)}</InfoValue></InfoGroup>
//               <InfoGroup><InfoLabel>Parceiro</InfoLabel><InfoValue>{client.partner?.name || '—'}</InfoValue></InfoGroup>
//               {notes && (
//                 <InfoGroup $span>
//                   <InfoLabel>Observações</InfoLabel>
//                   <InfoValueMuted>{notes}</InfoValueMuted>
//                 </InfoGroup>
//               )}
//             </InfoGrid>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardIconWrapper><MapPin size={18} /></CardIconWrapper>
//               <CardTitle>Endereço</CardTitle>
//             </CardHeader>
//             {hasAddress ? (
//               <InfoGrid $cols={2}>
//                 <InfoGroup $span><InfoLabel>Logradouro</InfoLabel><InfoValue>{addressLine || '—'}</InfoValue></InfoGroup>
//                 <InfoGroup><InfoLabel>Bairro / Cidade / UF</InfoLabel><InfoValue>{addressCity || '—'}</InfoValue></InfoGroup>
//                 <InfoGroup>
//                   <InfoLabel>CEP</InfoLabel>
//                   <InfoValue>{address_zip ? address_zip.replace(/^(\d{5})(\d{3})$/, '$1-$2') : '—'}</InfoValue>
//                 </InfoGroup>
//               </InfoGrid>
//             ) : (
//               <EmptyState><EmptyText>Endereço não informado.</EmptyText></EmptyState>
//             )}
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardIconWrapper><FileText size={18} /></CardIconWrapper>
//               <CardTitle>Documentos</CardTitle>
//             </CardHeader>
//             {documents.length > 0 ? (
//               <DocumentList>
//                 {documents.map((doc) => (
//                   <DocumentItem key={doc.id}>
//                     <DocumentIconWrapper><FileText size={16} /></DocumentIconWrapper>
//                     <DocumentInfo>
//                       <DocumentName>
//                         {doc.original_name || DOCUMENT_TYPE_LABELS[doc.document_type] || 'Documento'}
//                       </DocumentName>
//                       <DocumentMeta>
//                         {DOCUMENT_TYPE_LABELS[doc.document_type] ?? doc.document_type}
//                         {doc.file_size ? ` · ${formatFileSize(doc.file_size)}` : ''}
//                       </DocumentMeta>
//                     </DocumentInfo>
//                     <DocumentDownloadButton
//                       type="button"
//                       onClick={() => handleDownload(doc)}
//                       disabled={downloading === doc.id}
//                       title="Baixar documento"
//                     >
//                       {downloading === doc.id
//                         ? <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />
//                         : <Download size={14} />}
//                     </DocumentDownloadButton>
//                   </DocumentItem>
//                 ))}
//               </DocumentList>
//             ) : (
//               <EmptyState><EmptyText>Nenhum documento anexado.</EmptyText></EmptyState>
//             )}
//           </Card>
//         </div>

//         {/* ── COLUNA LATERAL ───────────────────────────────── */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

//           {/* Bandeiras */}
//           <Card>
//             <CardHeader>
//               <CardIconWrapper><Flag size={18} /></CardIconWrapper>
//               <CardTitle>Bandeiras</CardTitle>
//             </CardHeader>

//             {canEditFlags && clientFlags.length > 0 && (
//               <p style={{
//                 fontFamily: 'inherit', fontSize: '11px',
//                 color: '#96806e', marginBottom: '12px', lineHeight: 1.5,
//               }}>
//                 O status geral muda para <strong>Aprovado</strong> somente quando
//                 todas as bandeiras estiverem aprovadas.
//               </p>
//             )}

//             {clientFlags.length > 0 ? (
//               <FlagList>
//                 {clientFlags.map((cf) => (
//                   <FlagItem key={cf.id}>
//                     <FlagInfo>
//                       <FlagName>{cf.flag?.name ?? `Bandeira #${cf.flag_id}`}</FlagName>
//                       <FlagOrigin>{cf.origin}</FlagOrigin>
//                     </FlagInfo>

//                     {canEditFlags ? (
//                       <FlagStatusSelect
//                         clientFlagId={cf.id}
//                         currentStatus={cf.status}
//                         onUpdated={refetchAfterFlagUpdate}
//                         onOptimisticUpdate={handleOptimisticFlagUpdate}
//                       />
//                     ) : (
//                       <StatusBadge $status={cf.status} style={{ fontSize: '10px', padding: '2px 8px' }}>
//                         {STATUS_LABELS[cf.status] ?? cf.status}
//                       </StatusBadge>
//                     )}

//                     {cf.price && <FlagPrice>{formatCurrency(cf.price)}</FlagPrice>}
//                   </FlagItem>
//                 ))}
//               </FlagList>
//             ) : (
//               <EmptyState><EmptyText>Nenhuma bandeira vinculada.</EmptyText></EmptyState>
//             )}
//           </Card>

//           {/* Conta Bancária */}
//           <Card>
//             <CardHeader>
//               <CardIconWrapper><Landmark size={18} /></CardIconWrapper>
//               <CardTitle>Conta Bancária</CardTitle>
//             </CardHeader>
//             {bankAccounts.length > 0 ? (
//               bankAccounts.map((bank) => (
//                 <BankCard key={bank.id}>
//                   <InfoGrid $cols={1}>
//                     <InfoGroup>
//                       <InfoLabel>Banco</InfoLabel>
//                       <InfoValue>{bank.bank_name}{bank.bank_code ? ` (${bank.bank_code})` : ''}</InfoValue>
//                     </InfoGroup>
//                     <InfoGroup>
//                       <InfoLabel>Agência</InfoLabel>
//                       <InfoValue>{bank.agency}{bank.agency_digit ? `-${bank.agency_digit}` : ''}</InfoValue>
//                     </InfoGroup>
//                     <InfoGroup>
//                       <InfoLabel>Conta</InfoLabel>
//                       <InfoValue>{bank.account}-{bank.account_digit}</InfoValue>
//                     </InfoGroup>
//                     <InfoGroup>
//                       <InfoLabel>Tipo</InfoLabel>
//                       <InfoValue>{ACCOUNT_TYPE_LABELS[bank.account_type] ?? bank.account_type}</InfoValue>
//                     </InfoGroup>
//                   </InfoGrid>
//                 </BankCard>
//               ))
//             ) : (
//               <EmptyState><EmptyText>Nenhuma conta bancária cadastrada.</EmptyText></EmptyState>
//             )}
//           </Card>

//           {/* Plano */}
//           {client.plan && (
//             <Card>
//               <CardHeader>
//                 <CardIconWrapper><CreditCard size={18} /></CardIconWrapper>
//                 <CardTitle>Plano</CardTitle>
//               </CardHeader>
//               <InfoGrid $cols={1}>
//                 <InfoGroup><InfoLabel>Nome do Plano</InfoLabel><InfoValue>{client.plan.name}</InfoValue></InfoGroup>
//                 {client.plan.description && (
//                   <InfoGroup><InfoLabel>Descrição</InfoLabel><InfoValueMuted>{client.plan.description}</InfoValueMuted></InfoGroup>
//                 )}
//                 <InfoGroup><InfoLabel>Valor</InfoLabel><InfoValue>{formatCurrency(client.plan.price)}</InfoValue></InfoGroup>
//               </InfoGrid>
//             </Card>
//           )}
//         </div>
//       </TwoColumnGrid>

//       <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//     </Container>
//   );
// }

// ============================================================
// src/features/clients/pages/ClientDetailPage/index.jsx
// ============================================================
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    ArrowLeft, Building2, MapPin, CreditCard,
    FileText, Flag, Landmark, Download, Loader2, Pencil,
} from 'lucide-react';

import api, { getApiErrorMessage } from '../../../../lib/api';
import { useAuth } from '../../../../contexts/AuthContext';
import {
    Container, PageHeader, HeaderLeft, BackButton,
    TitleGroup, PageTitle, ProtocolTag, HeaderActions,
    Card, CardHeader, CardIconWrapper, CardTitle,
    TwoColumnGrid, InfoGrid, InfoGroup, InfoLabel,
    InfoValue, InfoValueMuted,
    StatusBadge, STATUS_LABELS,
    FlagList, FlagItem, FlagInfo, FlagName, FlagOrigin, FlagPrice,
    DocumentList, DocumentItem, DocumentIconWrapper,
    DocumentInfo, DocumentName, DocumentMeta, DocumentDownloadButton,
    BankCard, EmptyState, EmptyText,
    SkeletonBar, SkeletonCard, Divider,
} from './styles';

// ── Formatadores ──────────────────────────────────────────────────────────────
const formatCNPJ = (v) => {
    if (!v) return '—';
    const d = v.replace(/\D/g, '');
    if (d.length !== 14) return v;
    return d.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
};

const formatPhone = (v) => {
    if (!v) return '—';
    const d = v.replace(/\D/g, '');
    if (d.length === 11) return d.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    if (d.length === 10) return d.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    return v;
};

const formatDate = (iso) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

const formatCurrency = (v) => {
    if (v === null || v === undefined) return '—';
    return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const BENEFIT_LABELS = { food: 'Vale Alimentação', meal: 'Vale Refeição', both: 'Alimentação + Refeição' };
const DOCUMENT_TYPE_LABELS = { company_document: 'Documento da Empresa', proof_of_address: 'Comprovante de Endereço', bank_account_proof: 'Comprovante Bancário', card_machine_proof: 'Comprovante de Maquininha' };
const ACCOUNT_TYPE_LABELS = { checking: 'Conta Corrente', savings: 'Conta Poupança' };

const formatFileSize = (bytes) => {
    if (!bytes) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// ── Skeleton (O QUE ESTAVA FALTANDO) ──────────────────────────────────────────
function DetailSkeleton() {
    return (
        <Container>
            <PageHeader>
                <HeaderLeft>
                    <SkeletonBar $w="80px" $h="36px" style={{ borderRadius: '6px' }} />
                    <TitleGroup>
                        <SkeletonBar $w="220px" $h="28px" />
                        <SkeletonBar $w="120px" $h="14px" style={{ marginTop: '4px' }} />
                    </TitleGroup>
                </HeaderLeft>
            </PageHeader>
            <TwoColumnGrid>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <SkeletonCard>
                        <SkeletonBar $w="40%" $h="18px" /><Divider />
                        <InfoGrid>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <InfoGroup key={i}>
                                    <SkeletonBar $w="50%" $h="11px" />
                                    <SkeletonBar $w="80%" $h="16px" style={{ marginTop: '4px' }} />
                                </InfoGroup>
                            ))}
                        </InfoGrid>
                    </SkeletonCard>
                </div>
            </TwoColumnGrid>
        </Container>
    );
}

// ── Select de status de bandeira ──────────────────────────────────────────────
const FLAG_STATUS_OPTIONS = [
    { value: 'pending', label: 'Pendente' },
    { value: 'analysis', label: 'Em análise' },
    { value: 'approved', label: 'Aprovado' },
];

const STATUS_SELECT_COLORS = {
    approved: { bg: '#d1fae5', color: '#065f46' },
    analysis: { bg: '#dbeafe', color: '#1e40af' },
    pending: { bg: '#fef3c7', color: '#92400e' },
};

function FlagStatusSelect({ clientFlagId, currentStatus, onUpdated, onOptimisticUpdate }) {
    const [isUpdating, setIsUpdating] = useState(false);
    const [localStatus, setLocalStatus] = useState(currentStatus);
    const colors = STATUS_SELECT_COLORS[localStatus] ?? STATUS_SELECT_COLORS.pending;

    useEffect(() => { setLocalStatus(currentStatus); }, [currentStatus]);

    const handleChange = async (e) => {
        const newStatus = e.target.value;
        const prevStatus = localStatus;
        if (newStatus === prevStatus) return;

        setLocalStatus(newStatus);
        onOptimisticUpdate(clientFlagId, newStatus);
        setIsUpdating(true);
        try {
            await api.patch(`/client-flags/${clientFlagId}/status`, { status: newStatus });
            toast.success('Status da bandeira atualizado.');
            onUpdated();
        } catch (error) {
            setLocalStatus(prevStatus);
            onOptimisticUpdate(clientFlagId, prevStatus);
            toast.error(getApiErrorMessage(error, 'Erro ao atualizar status.'));
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <select
            value={localStatus}
            onChange={handleChange}
            disabled={isUpdating}
            style={{
                height: '28px', padding: '0 28px 0 8px',
                border: '1.5px solid #e4d9cf', borderRadius: '99px',
                fontFamily: 'inherit', fontSize: '11px', fontWeight: 600,
                backgroundColor: colors.bg, color: colors.color,
                cursor: 'pointer', appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center',
            }}
        >
            {FLAG_STATUS_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
    );
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function ClientDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isAdmin, isPartner, isUser, user } = useAuth();

    const [client, setClient] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [downloading, setDownloading] = useState(null);

    const fetchClient = useCallback(async () => {

        try {
            const { data } = await api.get(`/clients/${id}`);
            console.log(data.data)
            setClient(data.data);
        } catch (error) {
            toast.error(getApiErrorMessage(error, 'Erro ao carregar dados.'));
            navigate('/clientes', { replace: true });
        } finally {
            setIsLoading(false);
        }
    }, [id, navigate]);

    useEffect(() => { fetchClient(); }, [fetchClient]);

    const handleOptimisticFlagUpdate = useCallback((flagId, newStatus) => {
        setClient((prev) => {
            if (!prev) return prev;
            return {
                ...prev,
                clientFlags: prev.clientFlags.map((cf) => cf.id === flagId ? { ...cf, status: newStatus } : cf),
            };
        });
    }, []);

    const refetchAfterFlagUpdate = useCallback(async () => {
        try {
            const { data } = await api.get(`/clients/${id}`);

            setClient(data.data);
        } catch { /* silencioso */ }
    }, [id]);

    const handleDownload = async (doc) => {
        setDownloading(doc.id);
        try {
            const response = await api.get(`/documents/${doc.id}/download`, { responseType: 'blob' });
            const url = URL.createObjectURL(response.data);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = doc.original_name ?? `documento-${doc.id}`;
            document.body.appendChild(anchor);
            anchor.click();
            anchor.remove();
            URL.revokeObjectURL(url);
        } catch (error) {
            toast.error(getApiErrorMessage(error, 'Erro no download.'));
        } finally {
            setDownloading(null);
        }
    };

    if (isLoading) return <DetailSkeleton />;
    if (!client) return null;

    const {
        corporate_name, trade_name, cnpj, state_registration,
        phone, email, protocol, benefit_type, overall_status,
        notes, createdAt, address_street, address_number, address_complement,
        address_neighborhood, address_city, address_state, address_zip,
        clientFlags = [], documents = [], bankAccounts = [],
    } = client;

    const canEdit = !isPartner && (isAdmin || (isUser && client.created_by === user?.id));
    const canEditFlags = !isPartner && (isAdmin || (isUser && client.created_by === user?.id));

    const hasAddress = address_street || address_city;
    const addressLine = [address_street, address_number, address_complement].filter(Boolean).join(', ');
    const addressCity = [address_neighborhood, address_city, address_state].filter(Boolean).join(' — ');

    return (
        <Container>
            <PageHeader>
                <HeaderLeft>
                    <BackButton onClick={() => navigate('/clientes')} title="Voltar">
                        <ArrowLeft size={18} /> Voltar
                    </BackButton>
                    <TitleGroup>
                        <PageTitle>{trade_name || corporate_name}</PageTitle>
                        <ProtocolTag>Protocolo #{protocol}</ProtocolTag>
                    </TitleGroup>
                </HeaderLeft>

                <HeaderActions>
                    {canEdit && (
                        <button
                            onClick={() => navigate(`/clientes/${id}/editar`)}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px',
                                border: '1.5px solid #e4d9cf', borderRadius: '8px', background: 'transparent',
                                fontSize: '13px', fontWeight: 500, color: '#7a6455', cursor: 'pointer'
                            }}
                        >
                            <Pencil size={14} /> Editar
                        </button>
                    )}
                    <StatusBadge $status={overall_status}>
                        {STATUS_LABELS[overall_status] ?? overall_status}
                    </StatusBadge>
                </HeaderActions>
            </PageHeader>

            <TwoColumnGrid>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <Card>
                        <CardHeader>
                            <CardIconWrapper><Building2 size={18} /></CardIconWrapper>
                            <CardTitle>Dados da Empresa</CardTitle>
                        </CardHeader>
                        <InfoGrid>
                            <InfoGroup><InfoLabel>Razão Social</InfoLabel><InfoValue>{corporate_name || '—'}</InfoValue></InfoGroup>
                            {!isPartner && <InfoGroup><InfoLabel>Nome Fantasia</InfoLabel><InfoValue>{trade_name || '—'}</InfoValue></InfoGroup>}
                            <InfoGroup><InfoLabel>CNPJ</InfoLabel><InfoValue>{formatCNPJ(cnpj)}</InfoValue></InfoGroup>
                            {!isPartner && <InfoGroup><InfoLabel>Inscrição Estadual</InfoLabel><InfoValue>{state_registration || '—'}</InfoValue></InfoGroup>}
                            <InfoGroup><InfoLabel>Telefone</InfoLabel><InfoValue>{formatPhone(phone)}</InfoValue></InfoGroup>
                            {!isPartner && <InfoGroup><InfoLabel>E-mail</InfoLabel><InfoValue>{email || '—'}</InfoValue></InfoGroup>}
                            <InfoGroup><InfoLabel>Tipo de Benefício</InfoLabel><InfoValue>{BENEFIT_LABELS[benefit_type] ?? benefit_type ?? '—'}</InfoValue></InfoGroup>
                            <InfoGroup><InfoLabel>Cadastrado em</InfoLabel><InfoValue>{formatDate(createdAt)}</InfoValue></InfoGroup>
                            {!isPartner && notes && (
                                <InfoGroup $span>
                                    <InfoLabel>Observações Internas</InfoLabel>
                                    <InfoValueMuted>{notes}</InfoValueMuted>
                                </InfoGroup>
                            )}
                        </InfoGrid>
                    </Card>

                    <Card>
                        <CardHeader><CardIconWrapper><MapPin size={18} /></CardIconWrapper><CardTitle>Endereço</CardTitle></CardHeader>
                        {hasAddress ? (
                            <InfoGrid $cols={2}>
                                <InfoGroup $span><InfoLabel>Logradouro</InfoLabel><InfoValue>{addressLine || '—'}</InfoValue></InfoGroup>
                                <InfoGroup><InfoLabel>Bairro / Cidade / UF</InfoLabel><InfoValue>{addressCity || '—'}</InfoValue></InfoGroup>
                                <InfoGroup><InfoLabel>CEP</InfoLabel><InfoValue>{address_zip || '—'}</InfoValue></InfoGroup>
                            </InfoGrid>
                        ) : <EmptyState><EmptyText>Endereço não informado.</EmptyText></EmptyState>}
                    </Card>

                    {!isPartner && (
                        <Card>
                            <CardHeader><CardIconWrapper><FileText size={18} /></CardIconWrapper><CardTitle>Documentos</CardTitle></CardHeader>
                            {documents.length > 0 ? (
                                <DocumentList>
                                    {documents.map((doc) => (
                                        <DocumentItem key={doc.id}>
                                            <DocumentIconWrapper><FileText size={16} /></DocumentIconWrapper>
                                            <DocumentInfo>
                                                <DocumentName>{doc.original_name || 'Documento'}</DocumentName>
                                                <DocumentMeta>{DOCUMENT_TYPE_LABELS[doc.document_type] ?? doc.document_type}</DocumentMeta>
                                            </DocumentInfo>
                                            <DocumentDownloadButton onClick={() => handleDownload(doc)} disabled={downloading === doc.id}>
                                                {downloading === doc.id ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
                                            </DocumentDownloadButton>
                                        </DocumentItem>
                                    ))}
                                </DocumentList>
                            ) : <EmptyState><EmptyText>Sem documentos.</EmptyText></EmptyState>}
                        </Card>
                    )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <Card>
                        <CardHeader><CardIconWrapper><Flag size={18} /></CardIconWrapper><CardTitle>Bandeiras</CardTitle></CardHeader>
                        <FlagList>
                            {clientFlags.map((cf) => (
                                <FlagItem key={cf.id}>
                                    <FlagInfo><FlagName>{cf.flag?.name || 'Bandeira'}</FlagName><FlagOrigin>{cf.origin}</FlagOrigin></FlagInfo>
                                    {canEditFlags ? (
                                        <FlagStatusSelect clientFlagId={cf.id} currentStatus={cf.status} onUpdated={refetchAfterFlagUpdate} onOptimisticUpdate={handleOptimisticFlagUpdate} />
                                    ) : (
                                        <StatusBadge $status={cf.status} style={{ fontSize: '10px', padding: '2px 8px' }}>
                                            {STATUS_LABELS[cf.status] ?? cf.status}
                                        </StatusBadge>
                                    )}
                                </FlagItem>
                            ))}
                        </FlagList>
                    </Card>

                    {!isPartner && (
                        <Card>
                            <CardHeader><CardIconWrapper><Landmark size={18} /></CardIconWrapper><CardTitle>Dados Bancários</CardTitle></CardHeader>
                            {bankAccounts.length > 0 ? bankAccounts.map((bank) => (
                                <BankCard key={bank.id}>
                                    <InfoGrid $cols={1}>
                                        <InfoGroup><InfoLabel>Banco</InfoLabel><InfoValue>{bank.bank_name}</InfoValue></InfoGroup>
                                        <InfoGroup>
                                            <InfoLabel>Agência/Conta</InfoLabel>
                                            <InfoValue>
                                                {bank.agency}
                                                {bank.agency_digit ? `-${bank.agency_digit}` : ''}
                                                {" / "}
                                                {bank.account}
                                                {bank.account_digit ? `-${bank.account_digit}` : ''}
                                            </InfoValue>
                                        </InfoGroup>
                                    </InfoGrid>
                                </BankCard>
                            )) : <EmptyState><EmptyText>Sem dados bancários.</EmptyText></EmptyState>}
                        </Card>
                    )}

                    {client.sales && client.sales.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardIconWrapper><CreditCard size={18} /></CardIconWrapper>
                                <CardTitle>Plano Contratado</CardTitle>
                            </CardHeader>
                            <InfoGrid $cols={1}>
                                <InfoGroup>
                                    <InfoLabel>Nome do Plano</InfoLabel>
                                    {/* Acessando através de sales[0] */}
                                    <InfoValue>{client.sales[0]?.plan_name || '—'}</InfoValue>
                                </InfoGroup>
                                <InfoGroup>
                                    <InfoLabel>Valor</InfoLabel>
                                    <InfoValue>{formatCurrency(client.sales[0]?.total_value)}</InfoValue>
                                </InfoGroup>

                                <InfoGroup>
                                    <InfoLabel>Data da Venda</InfoLabel>
                                    <InfoValue>{formatDate(client.sales[0].createdAt)}</InfoValue>
                                </InfoGroup>
                            </InfoGrid>
                        </Card>
                    )}
                </div>
            </TwoColumnGrid>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } } .animate-spin { animation: spin 1s linear infinite; }`}</style>
        </Container>
    );
}