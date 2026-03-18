// ============================================================
// src/features/clients/pages/ClientsPage/styles.js
// ============================================================
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ── Header da página ──────────────────────────────────────────────────────────
export const PageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  animation: ${fadeInUp} 0.35s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const PageTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const PageSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.secondary};
  margin: 0;
`;

// Botão de ação primária no header
export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[600]},
    ${({ theme }) => theme.colors.primary[500]}
  );
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 3px 12px ${({ theme }) => theme.colors.primary[900]}35;
  transition:
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.base},
    background ${({ theme }) => theme.transitions.base};

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary[700]},
      ${({ theme }) => theme.colors.primary[600]}
    );
    box-shadow: 0 6px 20px ${({ theme }) => theme.colors.primary[900]}45;
    transform: translateY(-1px);
  }

  &:active { transform: translateY(0); }
`;

// ── Barra de filtros / busca ──────────────────────────────────────────────────
export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  animation: ${fadeInUp} 0.35s 0.05s ease both;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 360px;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.text.muted};
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing[4]} 0 ${({ theme }) => theme.spacing[9]};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.surface.card};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.primary};
  outline: none;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};
  box-sizing: border-box;

  &::placeholder { color: ${({ theme }) => theme.text.muted}; }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary[600]}18;
  }
`;

export const FilterSelect = styled.select`
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.surface.card};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.primary};
  outline: none;
  cursor: pointer;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus { border-color: ${({ theme }) => theme.colors.primary[500]}; }
`;

// ── Tabela ────────────────────────────────────────────────────────────────────
export const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.surface.card};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  animation: ${fadeInUp} 0.35s 0.1s ease both;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
`;

export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  text-align: left;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.muted};
  white-space: nowrap;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
  transition: background-color ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  &:last-child { border-bottom: none; }

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[50]};
  }
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.primary};
  vertical-align: middle;
`;

export const TdMuted = styled(Td)`
  color: ${({ theme }) => theme.text.secondary};
`;

// ── Status badge ──────────────────────────────────────────────────────────────
const STATUS_STYLES = {
  pending:  { bg: '#fef3c7', color: '#92400e' },
  analysis: { bg: '#dbeafe', color: '#1e40af' },
  approved: { bg: '#d1fae5', color: '#065f46' },
};

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  background-color: ${({ $status }) => STATUS_STYLES[$status]?.bg ?? '#f3f4f6'};
  color: ${({ $status }) => STATUS_STYLES[$status]?.color ?? '#374151'};
  white-space: nowrap;

  /* Bolinha de status */
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;

export const STATUS_LABELS = {
  pending:  'Pendente',
  analysis: 'Em análise',
  approved: 'Aprovado',
};



// ── Empty state ───────────────────────────────────────────────────────────────
export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[8]};
  gap: ${({ theme }) => theme.spacing[3]};
  text-align: center;
`;

export const EmptyIcon = styled.div`
  color: ${({ theme }) => theme.colors.neutral[300]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const EmptyTitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.secondary};
  margin: 0;
`;

export const EmptySubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.muted};
  margin: 0;
  max-width: 300px;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

// ── Loading skeleton ──────────────────────────────────────────────────────────
export const SkeletonRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
  &:last-child { border-bottom: none; }
`;

export const SkeletonCell = styled.td`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
`;

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

export const SkeletonBar = styled.div`
  height: 14px;
  width: ${({ $w }) => $w ?? '100%'};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.neutral[100]} 25%,
    ${({ theme }) => theme.colors.neutral[50]}  50%,
    ${({ theme }) => theme.colors.neutral[100]} 75%
  );
  background-size: 600px 100%;
  animation: ${shimmer} 1.4s ease infinite;
`;

// ── Paginação ─────────────────────────────────────────────────────────────────
export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  border-top: 1px solid ${({ theme }) => theme.border.default};
  background-color: ${({ theme }) => theme.colors.neutral[50]};

  @media (max-width: 500px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[3]};
    text-align: center;
  }
`;

export const PaginationInfo = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.muted};
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const PageButton = styled.button`
  height: 32px;
  min-width: 32px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1.5px solid ${({ theme, $active }) =>
    $active ? theme.colors.primary[500] : theme.border.default};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary[50] : theme.surface.card};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary[700] : theme.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ $active, theme }) =>
    $active ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.regular};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    border-color: ${({ theme }) => theme.colors.neutral[300]};
  }
`;
