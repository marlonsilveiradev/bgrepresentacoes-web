// src/features/reports/pages/ReportsPage/index.jsx
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import {
    Search, X, BarChart2, Users,
    DollarSign, TrendingUp, ChevronLeft, ChevronRight,
} from 'lucide-react';

import api from '../../../../lib/api';
import {
    Container, PageHeader, TitleGroup, PageTitle, PageSubtitle,
    FilterCard, FilterGrid, FilterField, FilterLabel, FilterSelect, FilterActions, SearchButton, ClearButton,
    SummaryGrid, SummaryCard, SummaryLabel, SummaryValue, SummaryIcon,
    TableCard, TableWrapper, Table, Thead, Th, Tbody, Tr, Td, TdMuted,
    StatusBadge, EmptyState, EmptyIcon, EmptyTitle, EmptySubtitle,
    Pagination, PaginationInfo, PaginationButtons, PageButton,
    SkeletonBar, SkeletonRow, SkeletonCell,
} from './styles';

// ── Helpers ───────────────────────────────────────────────────────────────────
const formatCurrency = (v) =>
    Number(v || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const formatDate = (iso) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric',
    });
};

const exportToCSV = (data) => {
    if (!data || !data.length) return;
    const headers = ['Protocolo', 'Cliente', 'Plano', 'Valor', 'Status', 'Data'];
    const rows = data.map(sale => [
        sale.client?.protocol,
        sale.client?.corporate_name,
        sale.plan_name,
        sale.total_value,
        sale.status,
        format(new Date(sale.createdAt), 'dd/MM/yyyy')
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(";")).join("\n");
    const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `relatorio_vendas_${format(new Date(), 'dd_MM_yyyy')}.csv`);
    link.click();
};

const STATUS_LABELS = {
    pending: 'Pendente',
    analysis: 'Em análise',
    approved: 'Aprovado',
};

const MONTHS = [
    { value: '', label: 'Todos os meses' },
    { value: '1', label: 'Janeiro' }, { value: '2', label: 'Fevereiro' },
    { value: '3', label: 'Março' }, { value: '4', label: 'Abril' },
    { value: '5', label: 'Maio' }, { value: '6', label: 'Junho' },
    { value: '7', label: 'Julho' }, { value: '8', label: 'Agosto' },
    { value: '9', label: 'Setembro' }, { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' }, { value: '12', label: 'Dezembro' },
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 5 }, (_, i) => currentYear - i);

// ── Skeleton ──────────────────────────────────────────────────────────────────
function TableSkeleton() {
    return Array.from({ length: 5 }).map((_, i) => (
        <SkeletonRow key={i}>
            <SkeletonCell><SkeletonBar $w="60%" /></SkeletonCell>
            <SkeletonCell><SkeletonBar $w="50%" /></SkeletonCell>
            <SkeletonCell><SkeletonBar $w="70%" /></SkeletonCell>
            <SkeletonCell><SkeletonBar $w="40%" /></SkeletonCell>
            <SkeletonCell><SkeletonBar $w="55%" /></SkeletonCell>
        </SkeletonRow>
    ));
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function ReportsPage() {
    const navigate = useNavigate();

    // ── Filtros locais (só aplicados ao clicar em Buscar) ─────────────────────
    const [filters, setFilters] = useState({
        year: String(currentYear),
        month: '',
        overall_status: '',
        partner_id: '',
    });

    // ── Filtros ativos (enviados para a API) ──────────────────────────────────
    const [activeFilters, setActiveFilters] = useState({
        year: String(currentYear),
        month: '',
        overall_status: '',
        partner_id: '',
    });

    const [page, setPage] = useState(1);
    const PER_PAGE = 20;

    const printRef = useRef(null);

    // ── React Query ───────────────────────────────────────────────────────────
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['reports-sales', activeFilters, page],
        queryFn: async () => {
            const params = new URLSearchParams({ page, limit: PER_PAGE });
            if (activeFilters.year) params.set('year', activeFilters.year);
            if (activeFilters.month) params.set('month', activeFilters.month);
            if (activeFilters.overall_status) params.set('overall_status', activeFilters.overall_status);
            const { data } = await api.get(`/reports/sales?${params.toString()}`);
            return data;
        },
        keepPreviousData: true,
        staleTime: 1000 * 60 * 2,
    });

    const { data: partnersData } = useQuery({
        queryKey: ['partners-list'], // Chave única para o cache de parceiros
        queryFn: async () => {
            // Faz a chamada para a sua rota de usuários filtrando por role
            const response = await api.get('/users', { params: { role: 'partner' } });

            // Retorna os dados (ajuste se seu backend retornar dentro de .data.data ou apenas .data)
            return response.data.data || response.data;
        },
        staleTime: 1000 * 60 * 10,
    });

    const rows = data?.rows ?? [];
    const summary = data?.summary ?? {};
    const pagination = data?.pagination ?? {};

    // ── Handlers ──────────────────────────────────────────────────────────────
    const handleSearch = () => {
        setActiveFilters({ ...filters });
        setPage(1);
    };

    const handleClear = () => {
        const empty = { year: String(currentYear), month: '', overall_status: '', partner_id: '' };
        setFilters(empty);
        setActiveFilters(empty);
        setPage(1);
    };

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handlePrint = () => {
        const printContent = printRef.current;
        if (!printContent) return;

        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContent.innerHTML;

        window.print();

        document.body.innerHTML = originalContents;
        window.location.reload(); // garante re-render correto
    };

    return (
        <Container>

            {/* ── Header ──────────────────────────────────────────────────────── */}
            <PageHeader>
                <TitleGroup>
                    <PageTitle>Relatórios</PageTitle>
                    <PageSubtitle>Visão consolidada de vendas e clientes por período</PageSubtitle>
                </TitleGroup>
            </PageHeader>

            {/* ── Filtros ─────────────────────────────────────────────────────── */}
            <FilterCard>
                <FilterGrid>

                    <FilterField>
                        <FilterLabel>Ano</FilterLabel>
                        <FilterSelect
                            value={filters.year}
                            onChange={(e) => handleFilterChange('year', e.target.value)}
                        >
                            <option value="">Todos os anos</option>
                            {YEARS.map((y) => (
                                <option key={y} value={String(y)}>{y}</option>
                            ))}
                        </FilterSelect>
                    </FilterField>

                    <FilterField>
                        <FilterLabel>Mês</FilterLabel>
                        <FilterSelect
                            value={filters.month}
                            onChange={(e) => handleFilterChange('month', e.target.value)}
                        >
                            {MONTHS.map((m) => (
                                <option key={m.value} value={m.value}>{m.label}</option>
                            ))}
                        </FilterSelect>
                    </FilterField>

                    <FilterField>
                        <FilterLabel>Status do Cliente</FilterLabel>
                        <FilterSelect
                            value={filters.overall_status}
                            onChange={(e) => handleFilterChange('overall_status', e.target.value)}
                        >
                            <option value="">Todos os status</option>
                            <option value="pending">Pendente</option>
                            <option value="analysis">Em análise</option>
                            <option value="approved">Aprovado</option>
                        </FilterSelect>
                    </FilterField>

                    <FilterField>
                        <FilterLabel>Parceiro</FilterLabel>
                        <FilterSelect
                            value={filters.partner_id}
                            onChange={(e) => handleFilterChange('partner_id', e.target.value)}
                        >
                            <option value="">Todos os parceiros</option>
                            {partnersData?.map((p) => (
                                <option key={p.id} value={String(p.id)}>
                                    {p.name}
                                </option>
                            ))}
                        </FilterSelect>
                    </FilterField>

                </FilterGrid>

                <FilterActions>
                    <ClearButton type="button" onClick={handleClear}>
                        <X size={14} /> Limpar
                    </ClearButton>
                    <SearchButton type="button" onClick={handleSearch} disabled={isLoading || isFetching}>
                        <Search size={14} />
                        {isFetching ? 'Buscando…' : 'Buscar'}
                    </SearchButton>
                    <button type="button" onClick={handlePrint}>
                        Imprimir
                    </button>
                </FilterActions>
            </FilterCard>

            {/* ── Cards de resumo ──────────────────────────────────────────────── */}
            <SummaryGrid>
                <SummaryCard>
                    <SummaryIcon $color="#B45A14"><Users size={20} /></SummaryIcon>
                    <SummaryLabel>Total de Clientes</SummaryLabel>
                    <SummaryValue>{isLoading ? '—' : (summary.total_clients ?? 0)}</SummaryValue>
                </SummaryCard>

                <SummaryCard>
                    <SummaryIcon $color="#059669"><DollarSign size={20} /></SummaryIcon>
                    <SummaryLabel>Valor Total</SummaryLabel>
                    <SummaryValue>{isLoading ? '—' : formatCurrency(summary.total_value)}</SummaryValue>
                </SummaryCard>

                <SummaryCard>
                    <SummaryIcon $color="#2563eb"><BarChart2 size={20} /></SummaryIcon>
                    <SummaryLabel>Total de Vendas</SummaryLabel>
                    <SummaryValue>{isLoading ? '—' : (summary.total_sales ?? 0)}</SummaryValue>
                </SummaryCard>

                <SummaryCard>
                    <SummaryIcon $color="#8b5cf6"><TrendingUp size={20} /></SummaryIcon>
                    <SummaryLabel>Ticket Médio</SummaryLabel>
                    <SummaryValue>{isLoading ? '—' : formatCurrency(summary.average_ticket)}</SummaryValue>
                </SummaryCard>
            </SummaryGrid>

            {/* ── Tabela ───────────────────────────────────────────────────────── */}
            <div ref={printRef}>
                <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                    <h2>Relatório de Clientes</h2>
                    <p>Data: {new Date().toLocaleDateString('pt-BR')}</p>

                    <p>
                        Filtros:
                        {activeFilters.year && ` Ano: ${activeFilters.year}`}
                        {activeFilters.month && ` | Mês: ${activeFilters.month}`}
                        {activeFilters.overall_status && ` | Status: ${activeFilters.overall_status}`}
                    </p>
                </div>
                <TableCard>
                    <TableWrapper>
                        <Table>
                            <Thead>
                                <tr>
                                    <Th>Empresa</Th>
                                    <Th>Plano</Th>
                                    <Th>Valor Total</Th>
                                    <Th>Status</Th>
                                    <Th>Cadastro</Th>
                                </tr>
                            </Thead>
                            <Tbody>
                                {isLoading && <TableSkeleton />}

                                {!isLoading && rows.map((row) => (
                                    <Tr
                                        key={row.client_id}
                                        onClick={() => navigate(`/clientes/${row.client_id}`)}
                                        title="Ver detalhes do cliente"
                                    >
                                        <Td>{row.corporate_name}</Td>
                                        <TdMuted>{row.latest_plan || '—'}</TdMuted>
                                        <Td>{formatCurrency(row.total_value)}</Td>
                                        <Td>
                                            <StatusBadge $status={row.overall_status}>
                                                {STATUS_LABELS[row.overall_status] ?? row.overall_status}
                                            </StatusBadge>
                                        </Td>
                                        <TdMuted>{formatDate(row.registered_at)}</TdMuted>
                                    </Tr>
                                ))}

                                {!isLoading && rows.length === 0 && (
                                    <tr>
                                        <td colSpan={5}>
                                            <EmptyState>
                                                <EmptyIcon><BarChart2 size={40} /></EmptyIcon>
                                                <EmptyTitle>Nenhum resultado encontrado</EmptyTitle>
                                                <EmptySubtitle>Tente ajustar os filtros para ver mais resultados.</EmptySubtitle>
                                            </EmptyState>
                                        </td>
                                    </tr>
                                )}
                            </Tbody>
                        </Table>
                    </TableWrapper>

                    {/* ── Paginação ─────────────────────────────────────────────────── */}
                    {!isLoading && pagination.totalPages > 1 && (
                        <Pagination>
                            <PaginationInfo>
                                Página {pagination.currentPage} de {pagination.totalPages} · {pagination.total} registros
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

                                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                                    .filter((p) => p === 1 || p === pagination.totalPages || Math.abs(p - page) <= 2)
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
                </TableCard>
            </div>
        </Container>
    );
}