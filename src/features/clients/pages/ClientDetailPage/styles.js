// ============================================================
// src/features/clients/pages/ClientDetailPage/styles.js
// Styled Components — Detalhes do Cliente
// ============================================================
import styled, { keyframes } from 'styled-components';

// ── Animações ─────────────────────────────────────────────────────────────────

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;

// ── Container raiz da página ──────────────────────────────────────────────────

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  animation: ${fadeInUp} 0.3s ease both;
`;

// ── Header da página (breadcrumb + ações) ────────────────────────────────────

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    color: ${({ theme }) => theme.text.primary};
    border-color: ${({ theme }) => theme.border.strong};
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const ProtocolTag = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
  letter-spacing: 0.04em;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

// ── Cards genéricos ───────────────────────────────────────────────────────────

export const Card = styled.div`
  background-color: ${({ theme }) => theme.surface.card};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
`;

export const CardIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.brand.primary};
  flex-shrink: 0;
`;

export const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
`;

// ── Grid de layout de dois painéis ────────────────────────────────────────────

// Coluna principal (maior) + coluna lateral (menor)
export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: ${({ theme }) => theme.spacing[6]};
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

// Grid de informações dentro dos cards (2 colunas)
export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols ?? 2}, 1fr);
  gap: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[8]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

// Grupo de Label + Valor empilhados
export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};

  /* Span full width dentro do grid (ex: campo "notes") */
  ${({ $span }) => $span && `grid-column: 1 / -1;`}
`;

export const InfoLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.muted};
`;

export const InfoValue = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.text.primary};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};

  /* Valor vazio */
  &:empty::after,
  &[data-empty]::after {
    content: '—';
    color: ${({ theme }) => theme.text.muted};
  }
`;

export const InfoValueMuted = styled(InfoValue)`
  color: ${({ theme }) => theme.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

// ── Status Badge ──────────────────────────────────────────────────────────────

// Mapa de estilos por status — exportado para uso no index.jsx
export const STATUS_STYLES = {
  pending:  { bg: '#fef3c7', color: '#92400e' },
  analysis: { bg: '#dbeafe', color: '#1e40af' },
  approved: { bg: '#d1fae5', color: '#065f46' },
};

// Mapa de labels — exportado para uso no index.jsx
export const STATUS_LABELS = {
  pending:  'Pendente',
  analysis: 'Em análise',
  approved: 'Aprovado',
};

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  background-color: ${({ $status }) => STATUS_STYLES[$status]?.bg ?? '#f3f4f6'};
  color: ${({ $status }) => STATUS_STYLES[$status]?.color ?? '#374151'};
  white-space: nowrap;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
    flex-shrink: 0;
  }
`;

// ── Seção de Bandeiras (ClientFlags) ─────────────────────────────────────────

export const FlagList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const FlagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const FlagInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;

export const FlagName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FlagOrigin = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
  text-transform: capitalize;
`;

export const FlagPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.brand.primary};
  white-space: nowrap;
`;

// ── Seção de Documentos ───────────────────────────────────────────────────────

export const DocumentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const DocumentItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.surface.card};
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[50]};
  }
`;

export const DocumentIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.primary[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.brand.primary};
  flex-shrink: 0;
`;

export const DocumentInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DocumentName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DocumentMeta = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
`;

export const DocumentDownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  background: transparent;
  color: ${({ theme }) => theme.text.muted};
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[50]};
    color: ${({ theme }) => theme.brand.primary};
    border-color: ${({ theme }) => theme.colors.primary[200]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// ── Conta bancária ────────────────────────────────────────────────────────────

export const BankCard = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

// ── Empty state dentro de cards ───────────────────────────────────────────────

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[4]};
  gap: ${({ theme }) => theme.spacing[2]};
  text-align: center;
  color: ${({ theme }) => theme.text.muted};
`;

export const EmptyText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.muted};
  margin: 0;
`;

// ── Loading Skeleton ──────────────────────────────────────────────────────────

export const SkeletonBar = styled.div`
  height: ${({ $h }) => $h ?? '14px'};
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

export const SkeletonCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

// ── Divider interno ───────────────────────────────────────────────────────────

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.border.default};
  margin: ${({ theme }) => theme.spacing[4]} 0;
`;