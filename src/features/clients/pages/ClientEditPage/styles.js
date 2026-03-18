// ============================================================
// src/features/clients/pages/ClientEditPage/styles.js
// Styled Components — Edição de Cliente
// Reutiliza a linguagem visual da ClientDetailPage
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

// ── Container raiz ────────────────────────────────────────────────────────────

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  /* Padding extra embaixo para o footer fixo não sobrepor o conteúdo */
  padding-bottom: 88px;
  animation: ${fadeInUp} 0.3s ease both;
`;

// ── Header da página ──────────────────────────────────────────────────────────

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;
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
  flex-shrink: 0;
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

export const PageSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.secondary};
  margin: 0;
`;

// ── Cards ─────────────────────────────────────────────────────────────────────

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

// ── Grid de campos ────────────────────────────────────────────────────────────

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols ?? 2}, 1fr);
  gap: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

// Campo que ocupa toda a largura do grid
export const FullSpan = styled.div`
  grid-column: 1 / -1;
`;

// ── Campos do formulário ──────────────────────────────────────────────────────

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
`;

// Estilo base compartilhado entre Input, Select e Textarea
const fieldBase = ({ theme, $hasError }) => `
  width: 100%;
  background-color: ${theme.surface.card};
  border: 1.5px solid ${$hasError ? theme.colors.error.base : theme.colors.neutral[200]};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.text.primary};
  outline: none;
  transition:
    border-color ${theme.transitions.fast},
    box-shadow ${theme.transitions.fast};
  box-sizing: border-box;

  &::placeholder {
    color: ${theme.colors.neutral[300]};
  }

  &:focus {
    border-color: ${$hasError ? theme.colors.error.base : theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${$hasError
      ? theme.colors.error.base + '20'
      : theme.colors.primary[600] + '18'};
  }

  &:disabled {
    background-color: ${theme.colors.neutral[50]};
    color: ${theme.text.muted};
    cursor: not-allowed;
    opacity: 0.75;
  }
`;

export const Input = styled.input`
  ${({ theme, $hasError }) => fieldBase({ theme, $hasError })}
  height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`;

export const Select = styled.select`
  ${({ theme, $hasError }) => fieldBase({ theme, $hasError })}
  height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({ theme }) => theme.spacing[3]} center;
  padding-right: ${({ theme }) => theme.spacing[10]};
`;

export const Textarea = styled.textarea`
  ${({ theme, $hasError }) => fieldBase({ theme, $hasError })}
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  resize: vertical;
  min-height: 96px;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

// Mensagem de erro abaixo do campo
export const FieldError = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.error.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
`;

// Texto auxiliar abaixo do campo (dica/hint)
export const FieldHint = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
`;

// ── Seção de conta bancária ───────────────────────────────────────────────────

export const BankSection = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const BankSectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.secondary};
  margin: 0 0 ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

// ── Footer fixo com botões de ação ────────────────────────────────────────────

export const FormFooter = styled.div`
  position: fixed;
  bottom: 0;
  /* Alinha com a área de conteúdo (descontando a sidebar de 240px) */
  left: 240px;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background-color: ${({ theme }) => theme.surface.card};
  border-top: 1px solid ${({ theme }) => theme.border.default};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[3]};
  box-shadow: 0 -4px 16px rgba(35, 27, 21, 0.06);

  @media (max-width: 900px) {
    /* No mobile a sidebar some, então o footer ocupa tudo */
    left: 0;
    padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  }
`;

export const CancelButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
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
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    color: ${({ theme }) => theme.text.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $isSubmitting, theme }) =>
    $isSubmitting
      ? theme.colors.primary[700]
      : `linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.primary[500]})`};
  color: #fff;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: ${({ $isSubmitting }) => ($isSubmitting ? 'not-allowed' : 'pointer')};
  box-shadow: 0 3px 12px ${({ theme }) => theme.colors.primary[900]}35;
  transition:
    background ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.base};

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary[700]},
      ${({ theme }) => theme.colors.primary[600]}
    );
    box-shadow: 0 6px 20px ${({ theme }) => theme.colors.primary[900]}45;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Spinner = styled.span`
  width: 15px;
  height: 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _spin 0.7s linear infinite;
  flex-shrink: 0;

  @keyframes _spin { to { transform: rotate(360deg); } }
`;

// ── Loading skeleton ──────────────────────────────────────────────────────────

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

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.border.default};
  margin: ${({ theme }) => theme.spacing[2]} 0;
`;