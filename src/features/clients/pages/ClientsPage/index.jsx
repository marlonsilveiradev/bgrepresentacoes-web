// ============================================================
// src/features/clients/pages/ClientsPage/index.jsx
// Lista de clientes com busca, filtro e paginação
// ============================================================
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Search, UserPlus, Users, ChevronLeft, ChevronRight } from 'lucide-react';

import { useQuery } from '@tanstack/react-query';
import api, { getApiErrorMessage } from '../../../../lib/api';
import { useAuth } from '../../../../contexts/AuthContext';
import {
  PageHeader, PageTitleGroup, PageTitle, PageSubtitle, PrimaryButton,
  FilterBar, SearchWrapper, SearchIcon, SearchInput, FilterSelect,
  TableWrapper, Table, Thead, Th, Tbody, Tr, Td, TdMuted,
  EmptyState, EmptyIcon, EmptyTitle, EmptySubtitle, StatusBadge, STATUS_LABELS,
  SkeletonRow, SkeletonCell, SkeletonBar,
  Pagination, PaginationInfo, PaginationButtons, PageButton,
} from './styles';

// ── Configurações ─────────────────────────────────────────────────────────────
const PER_PAGE = 15;

// ── Badge de status ───────────────────────────────────────────────────────────
const StatusBadgeComponent = ({ status }) => (
  <StatusBadge $status={status}>
    {STATUS_LABELS[status] ?? status}
  </StatusBadge>
);

// ── Skeleton de carregamento ──────────────────────────────────────────────────
function TableSkeleton() {
  return Array.from({ length: 5 }).map((_, i) => (
    <SkeletonRow key={i}>
      <SkeletonCell><SkeletonBar $w="60%" /></SkeletonCell>
      <SkeletonCell><SkeletonBar $w="80%" /></SkeletonCell>
      <SkeletonCell><SkeletonBar $w="50%" /></SkeletonCell>
      <SkeletonCell><SkeletonBar $w="70%" /></SkeletonCell>
      <SkeletonCell><SkeletonBar $w="40%" /></SkeletonCell>
    </SkeletonRow>
  ));
}

// ── Helpers ───────────────────────────────────────────────────────────────────

// Aplica máscara de CNPJ: 00.000.000/0001-00
const maskCNPJ = (digits = '') => {
  const d = digits.slice(0, 14);
  if (d.length <= 2) return d;
  if (d.length <= 5) return `${d.slice(0, 2)}.${d.slice(2)}`;
  if (d.length <= 8) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`;
  if (d.length <= 12) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8)}`;
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`;
};

// Retorna true se a string contiver apenas dígitos (e separadores de CNPJ)
const looksLikeCNPJ = (v = '') => /^[\d.\-/]+$/.test(v) && /\d/.test(v);

const formatDate = (iso) => {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  });
};

const formatBenefitType = (type) => {
  const labels = { food: 'Alimentação', meal: 'Refeição', both: 'Ambos' };
  return labels[type] ?? type ?? '—';
};

const fetchClients = async () => {
  const { data } = await api.get('/clients');
  return data.data || data;
};

// ── Componente principal ──────────────────────────────────────────────────────
export default function ClientsPage() {
  const navigate = useNavigate();
  const { hasRole } = useAuth();

  // ── Estado ───────────────────────────────────────────────────────────────────
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);

  // Dois valores de busca separados:
  //   displaySearch → o que o usuário VÊ no input (com máscara se for CNPJ)
  //   apiSearch     → o que é ENVIADO para a API (sempre sem máscara)
  const [displaySearch, setDisplaySearch] = useState('');
  const [apiSearch, setApiSearch] = useState('');
  const debounceRef = useRef(null);

  // ── Busca clientes na API ─────────────────────────────────────────────────────
  const { data, isLoading, error } = useQuery({
    queryKey: ['clients', page, apiSearch, status],
    queryFn: async () => {
      const params = new URLSearchParams({ page, limit: PER_PAGE });

      if (apiSearch) params.set('search', apiSearch);
      if (status) params.set('overall_status', status);

      const { data } = await api.get(`/clients?${params.toString()}`);

      return {
        clients: data.data ?? [],
        pagination: {
          total: data.pagination?.total ?? 0,
          totalPages: data.pagination?.totalPages ?? 1,
          currentPage: data.pagination?.currentPage ?? 1,
        },
      };
    },
    keepPreviousData: true,
  });

  if (error) {
    toast.error(getApiErrorMessage(error, 'Erro ao carregar clientes.'));
  }

  // ── Handler do campo de busca ─────────────────────────────────────────────────
  //
  // Estratégia:
  //   1. Extrai apenas os dígitos do que o usuário digitou
  //   2. Se o input for só numérico (CNPJ): exibe COM máscara, envia SÓ dígitos
  //   3. Se o input tiver letras (nome/razão social): exibe SEM máscara, envia como está
  //
  const handleSearch = (e) => {
    const raw = e.target.value;
    const digits = raw.replace(/\D/g, '');

    if (looksLikeCNPJ(raw)) {
      const masked = maskCNPJ(digits);
      setDisplaySearch(masked);
      scheduleSearch(masked);
    } else if (raw === '') {
      setDisplaySearch('');
      scheduleSearch('');
    } else {
      setDisplaySearch(raw);
      scheduleSearch(raw);
    }
  };

  // Aguarda 400ms após o usuário parar de digitar antes de chamar a API
  const scheduleSearch = (value) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setApiSearch(value);
      setPage(1);
    }, 400);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setPage(1);
  };

  // ── Renderização ──────────────────────────────────────────────────────────────
  return (
    <>
      {/* Cabeçalho */}
      <PageHeader>
        <PageTitleGroup>
          <PageTitle>Clientes</PageTitle>
          <PageSubtitle>
            {data?.pagination.total > 0
              ? `${data?.pagination.total} cliente${data?.pagination.total !== 1 ? 's' : ''} cadastrado${data?.pagination.total !== 1 ? 's' : ''}`
              : 'Nenhum cliente cadastrado ainda'}
          </PageSubtitle>
        </PageTitleGroup>

        {hasRole('admin', 'user') && (
          <PrimaryButton type="button" onClick={() => navigate('/onboarding')}>
            <UserPlus size={16} />
            Novo Cliente
          </PrimaryButton>
        )}
      </PageHeader>

      {/* Filtros */}
      <FilterBar>
        <SearchWrapper>
          <SearchIcon> <Search size={15} /></SearchIcon>
          <SearchInput
            type="text"
            placeholder="Buscar por Razão Social ou CNPJ…"
            style={{ paddingLeft: '30px' }}
            value={displaySearch}
            onChange={handleSearch}
          />
        </SearchWrapper>

        <FilterSelect value={status} onChange={handleStatus}>
          <option value="">Todos os status</option>
          <option value="pending">Pendente</option>
          <option value="analysis">Em análise</option>
          <option value="approved">Aprovado</option>
        </FilterSelect>
      </FilterBar>

      {/* Tabela */}
      <TableWrapper>
        <Table>
          <Thead>
            <tr>
              <Th>Razão Social</Th>
              <Th>CNPJ</Th>
              <Th>Benefício</Th>
              <Th>Status</Th>
              <Th>Cadastro</Th>
            </tr>
          </Thead>

          <Tbody>
            {isLoading && <TableSkeleton />}

            {!isLoading && data?.clients.map((client) => (
              <Tr
                key={client.id}
                onClick={() => navigate(`/clientes/${client.id}`)}
                title="Ver detalhes"
              >
                <Td>{client.corporate_name}</Td>
                <TdMuted>{maskCNPJ(client.cnpj) ?? '—'}</TdMuted>
                <TdMuted>{formatBenefitType(client.benefit_type)}</TdMuted>
                <Td><StatusBadgeComponent status={client.overall_status} /></Td>
                <TdMuted>{formatDate(client.createdAt)}</TdMuted>
              </Tr>
            ))}

            {!isLoading && data?.clients.length === 0 && (
              <tr>
                <td colSpan={5}>
                  <EmptyState>
                    <EmptyIcon><Users size={40} /></EmptyIcon>
                    <EmptyTitle>Nenhum cliente encontrado</EmptyTitle>
                    <EmptySubtitle>
                      {displaySearch || status
                        ? 'Tente ajustar os filtros para ver mais resultados.'
                        : 'Clique em "Novo Cliente" para iniciar o cadastro.'}
                    </EmptySubtitle>
                  </EmptyState>
                </td>
              </tr>
            )}
          </Tbody>
        </Table>

        {/* Paginação */}
        {!isLoading && data?.pagination.totalPages > 1 && (
          <Pagination>
            <PaginationInfo>
              Página {data?.pagination.currentPage} de {data?.pagination.totalPages}
              {' '}· {data?.pagination.total} registros
            </PaginationInfo>

            <PaginationButtons>
              <PageButton
                type="button"
                onClick={() => setPage((p) => Math.min(data?.pagination.totalPages || 1, p + 1))}
                disabled={page >= (data?.pagination.totalPages || 1)}
                aria-label="Página anterior"
              >
                <ChevronLeft size={15} />
              </PageButton>

              {Array.from({ length: data?.pagination.totalPages }, (_, i) => i + 1)
                .filter((p) =>
                  p === 1 ||
                  p === data?.pagination.totalPages ||
                  Math.abs(p - page) <= 2
                )
                .reduce((acc, p, idx, arr) => {
                  if (idx > 0 && p - arr[idx - 1] > 1) acc.push('…');
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, i) =>
                  p === '…' ? (
                    <PageButton key={`ellipsis-${i}`} disabled as="span">…</PageButton>
                  ) : (
                    <PageButton
                      key={p}
                      type="button"
                      $active={p === page}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </PageButton>
                  )
                )}

              <PageButton
                type="button"
                onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                disabled={page >= pagination.totalPages}
                aria-label="Próxima página"
              >
                <ChevronRight size={15} />
              </PageButton>
            </PaginationButtons>
          </Pagination>
        )}
      </TableWrapper>
    </>
  );
}