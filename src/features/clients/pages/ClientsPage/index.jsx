// ============================================================
// src/features/clients/pages/ClientsPage/index.jsx
// Lista de clientes com busca, filtro e paginação
// ============================================================
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Search, UserPlus, Users, ChevronLeft, ChevronRight } from 'lucide-react';

import api, { getApiErrorMessage } from '../../../../lib/api';
import { useAuth } from '../../../../contexts/AuthContext';
import {
  PageHeader, PageTitleGroup, PageTitle, PageSubtitle, PrimaryButton,
  FilterBar, SearchWrapper, SearchIcon, SearchInput, FilterSelect,
  TableWrapper, Table, Thead, Th, Tbody, Tr, Td, TdMuted,
  EmptyState, EmptyIcon, EmptyTitle, EmptySubtitle, StatusBadge,STATUS_LABELS,
  SkeletonRow, SkeletonCell, SkeletonBar,
  Pagination, PaginationInfo, PaginationButtons, PageButton,
} from './styles';

// ── Configurações ─────────────────────────────────────────────────────────────
const PER_PAGE = 15;

// Componente auxiliar para o badge
const StatusBadgeComponent = ({ status }) => (
  <StatusBadge $status={status}>
    {STATUS_LABELS[status] ?? status}
  </StatusBadge>
);

// ── Skeleton de carregamento (5 linhas) ───────────────────────────────────────
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

// ── Componente principal ──────────────────────────────────────────────────────
export default function ClientsPage() {
  const navigate = useNavigate();
  const { hasRole } = useAuth();

  // ── Estado ──────────────────────────────────────────────────────────────────
  const [clients,    setClients]    = useState([]);
  const [pagination, setPagination] = useState({ total: 0, totalPages: 1, currentPage: 1 });
  const [isLoading,  setIsLoading]  = useState(true);
  const [search,     setSearch]     = useState('');
  const [status,     setStatus]     = useState('');
  const [page,       setPage]       = useState(1);

  // ── Busca clientes na API ────────────────────────────────────────────────────
  const fetchClients = useCallback(async () => {
    setIsLoading(true);
    try {
      // O interceptor do api.js injeta o Bearer token automaticamente
      const params = new URLSearchParams({ page, limit: PER_PAGE });
      if (search) params.set('search', search);
      if (status) params.set('overall_status', status);

      const { data } = await api.get(`/clients?${params.toString()}`);

      setClients(data.data ?? []);
      setPagination({
        total:       data.pagination?.total       ?? 0,
        totalPages:  data.pagination?.totalPages  ?? 1,
        currentPage: data.pagination?.currentPage ?? 1,
      });
    } catch (error) {
      toast.error(getApiErrorMessage(error, 'Erro ao carregar clientes.'));
      setClients([]);
    } finally {
      setIsLoading(false);
    }
  }, [page, search, status]);

  // Re-busca quando page, search ou status mudar
  useEffect(() => { fetchClients(); }, [fetchClients]);

  // Reseta para página 1 ao mudar filtros
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setPage(1);
  };

  // ── Formatadores ─────────────────────────────────────────────────────────────
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

  // ── Renderização ─────────────────────────────────────────────────────────────
  return (
    <>
      {/* Cabeçalho da página */}
      <PageHeader>
        <PageTitleGroup>
          <PageTitle>Clientes</PageTitle>
          <PageSubtitle>
            {pagination.total > 0
              ? `${pagination.total} cliente${pagination.total !== 1 ? 's' : ''} cadastrado${pagination.total !== 1 ? 's' : ''}`
              : 'Nenhum cliente cadastrado ainda'}
          </PageSubtitle>
        </PageTitleGroup>

        {/* Botão novo cliente — apenas admin e user */}
        {hasRole('admin', 'user') && (
          <PrimaryButton
            type="button"
            onClick={() => navigate('/onboarding')}
          >
            <UserPlus size={16} />
            Novo Cliente
          </PrimaryButton>
        )}
      </PageHeader>

      {/* Barra de filtros */}
      <FilterBar>
        <SearchWrapper>
          <SearchIcon><Search size={15} /></SearchIcon>
          <SearchInput
            type="text"
            placeholder="Buscar por nome, CPF ou e-mail…"
            value={search}
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
              <Th>CPF / CNPJ</Th>
              <Th>Benefício</Th>
              <Th>Status</Th>
              <Th>Cadastro</Th>
            </tr>
          </Thead>

          <Tbody>
            {/* Estado de carregamento */}
            {isLoading && <TableSkeleton />}

            {/* Dados carregados */}
            {!isLoading && clients.map((client) => (
              <Tr
                key={client.id}
                onClick={() => navigate(`/clientes/${client.id}`)}
                title="Ver detalhes"
              >
                <Td>{client.corporate_name}</Td>
                <TdMuted>{client.cnpj ?? '—'}</TdMuted>
                <TdMuted>{formatBenefitType(client.benefit_type)}</TdMuted>
                <Td>
                  <StatusBadgeComponent status={client.overall_status} />
                </Td>
                <TdMuted>{formatDate(client.createdAt)}</TdMuted>
              </Tr>
            ))}

            {/* Empty state */}
            {!isLoading && clients.length === 0 && (
              <tr>
                <td colSpan={5}>
                  <EmptyState>
                    <EmptyIcon><Users size={40} /></EmptyIcon>
                    <EmptyTitle>Nenhum cliente encontrado</EmptyTitle>
                    <EmptySubtitle>
                      {search || status
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
        {!isLoading && pagination.totalPages > 1 && (
          <Pagination>
            <PaginationInfo>
              Página {pagination.currentPage} de {pagination.totalPages}
              {' '}· {pagination.total} registros
            </PaginationInfo>

            <PaginationButtons>
              <PageButton
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                aria-label="Página anterior"
              >
                <ChevronLeft size={15} />
              </PageButton>

              {/* Botões numerados — mostra no máximo 5 ao redor da página atual */}
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                .filter((p) =>
                  p === 1 ||
                  p === pagination.totalPages ||
                  Math.abs(p - page) <= 2
                )
                .reduce((acc, p, idx, arr) => {
                  if (idx > 0 && p - arr[idx - 1] > 1) {
                    acc.push('…');
                  }
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
