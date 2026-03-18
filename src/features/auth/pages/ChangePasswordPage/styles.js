// ============================================================
// src/features/auth/pages/LoginPage/styles.js
// Styled Components — LoginPage (Split Screen + Landing)
// ============================================================
import styled, { keyframes, css } from 'styled-components';

// ── Animações ─────────────────────────────────────────────────────────────────
export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(32px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-32px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export const subtlePulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.03); }
`;

// ── Wrapper principal ─────────────────────────────────────────────────────────
export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  /* Desktop: 55% brand | 45% form */
  grid-template-columns: 55fr 45fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  background-color: ${({ theme }) => theme.surface.page};

  @media (max-width: 900px) {
    /* Mobile/Tablet: coluna única, formulário empilhado abaixo */
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

// ── LADO A — Painel de marca / landing ────────────────────────────────────────
export const BrandPanel = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[12]};
  min-height: 100vh;

  /* Fundo âmbar escuro, fiel à referência */
  background-color: #5C3010;
  background-image:
    radial-gradient(ellipse 70% 60% at 10% 90%, rgba(180, 90, 20, 0.45) 0%, transparent 60%),
    radial-gradient(ellipse 50% 50% at 90% 10%, rgba(100, 50, 10, 0.6) 0%, transparent 55%),
    radial-gradient(ellipse 80% 40% at 50% 50%, rgba(80, 35, 5, 0.3) 0%, transparent 70%);

  /* Grain texture overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  /* Linha decorativa âmbar na direita — separador elegante */
  &::after {
    content: '';
    position: absolute;
    top: 15%;
    right: 0;
    width: 1px;
    height: 70%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${({ theme }) => theme.colors.primary[400]}88,
      transparent
    );
    z-index: 2;
  }

  @media (max-width: 900px) {
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
    justify-content: center;
    align-items: center;
    text-align: center;

    &::after { display: none; }
  }
`;

export const BrandContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const BrandTop = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  animation: ${slideInLeft} 0.6s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({ theme }) => theme.spacing[10]};
    justify-content: center;
  }
`;

export const LogoMark = styled.div`
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[400]},
    ${({ theme }) => theme.colors.primary[600]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #fff;
  letter-spacing: -0.5px;
  box-shadow: 0 4px 16px rgba(180, 90, 20, 0.5);
  flex-shrink: 0;
`;

export const LogoName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary[200]};
  letter-spacing: 0.02em;
`;

export const BrandHeadline = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({ theme }) => theme.spacing[6]};
  animation: ${slideInLeft} 0.6s 0.1s ease both;
  max-width: 480px;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.8rem, 7vw, 2.4rem);
    max-width: 340px;
  }
`;

export const BrandBody = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.neutral[400]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0 0 ${({ theme }) => theme.spacing[10]};
  max-width: 380px;
  animation: ${slideInLeft} 0.6s 0.2s ease both;

  @media (max-width: 900px) {
    max-width: 300px;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

// Métricas / bullets de credibilidade
export const StatRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  animation: ${slideInLeft} 0.6s 0.3s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({ theme }) => theme.spacing[6]};
  }

  @media (max-width: 380px) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const StatValue = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary[300]};
  line-height: 1;
`;

export const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.neutral[500]};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const BrandFooter = styled.div`
  position: relative;
  z-index: 3;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.neutral[600]};
  animation: ${fadeIn} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`;

// Botão mobile — abre formulário (visível apenas em mobile)
export const MobileLoginButton = styled.button`
  display: none;
  margin-top: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[500]},
    ${({ theme }) => theme.colors.primary[600]}
  );
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  box-shadow: 0 8px 24px rgba(180, 90, 20, 0.45);
  animation: ${slideUp} 0.6s 0.4s ease both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(180, 90, 20, 0.55);
  }

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

// ── LADO B — Painel do formulário ─────────────────────────────────────────────
export const FormPanel = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[10]};
  animation: ${slideInRight} 0.5s 0.15s ease both;

  @media (max-width: 900px) {
    /* No mobile, o painel de formulário é um drawer/sheet de baixo para cima */
    position: fixed;
    inset: 0;
    z-index: 200;
    background-color: ${({ theme }) => theme.colors.neutral[50]};
    padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
    overflow-y: auto;
    transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const FormInner = styled.div`
  width: 100%;
  max-width: 380px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const FormCloseButton = styled.button`
  display: none;
  position: absolute;
  top: ${({ theme }) => theme.spacing[5]};
  right: ${({ theme }) => theme.spacing[5]};
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.secondary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    color: ${({ theme }) => theme.text.primary};
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const FormHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[10]};
`;

export const FormEyebrow = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.brand.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
`;

export const FormTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const FormSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.secondary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

// Campos
export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
`;

// Input com linha inferior apenas — estilo clean/minimalista
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  /* Apenas borda inferior — visual clean */
  border: none;
  border-bottom: 2px solid ${({ theme, $hasError }) =>
    $hasError ? theme.border.error : theme.border.default};
  border-radius: 0;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.text.primary};
  outline: none;
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    padding-left ${({ theme }) => theme.transitions.fast};
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.text.muted};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  }

  &:focus {
    border-bottom-color: ${({ theme, $hasError }) =>
      $hasError ? theme.border.error : theme.brand.primary};
    padding-left: ${({ theme }) => theme.spacing[2]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Padding extra para botão de toggle */
  ${({ $hasToggle, theme }) => $hasToggle && css`
    padding-right: ${theme.spacing[10]};
  `}
`;

// Underline animado no foco
export const InputUnderline = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: ${({ theme }) => theme.brand.primary};
  transition: width ${({ theme }) => theme.transitions.slow};

  ${StyledInput}:focus ~ & {
    width: 100%;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text.muted};
  padding: ${({ theme }) => theme.spacing[2]};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover { color: ${({ theme }) => theme.brand.primary}; }
`;

export const FieldError = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.error.base};
`;

// Botão de submit
export const SubmitButton = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $isLoading, theme }) =>
    $isLoading
      ? theme.colors.primary[700]
      : `linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.primary[500]})`};
  color: #fff;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.02em;
  cursor: ${({ $isLoading }) => ($isLoading ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  transition: all ${({ theme }) => theme.transitions.base};
  box-shadow: 0 4px 16px rgba(180, 90, 20, 0.25);

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary[700]},
      ${({ theme }) => theme.colors.primary[600]}
    );
    box-shadow: 0 8px 28px rgba(180, 90, 20, 0.4);
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(180, 90, 20, 0.25);
  }

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`;

export const Spinner = styled.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;

  @keyframes spin { to { transform: rotate(360deg); } }
`;

export const FormDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.border.default};
  margin: ${({ theme }) => theme.spacing[6]} 0;
`;

export const FormFooter = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

// Overlay escuro atrás do sheet (mobile)
export const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: fixed;
    inset: 0;
    background-color: rgba(35, 27, 21, 0.6);
    z-index: 199;
    opacity: ${({ $open }) => ($open ? '1' : '0')};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transition: opacity 0.3s ease;
    backdrop-filter: blur(2px);
  }
`;

// Handle visual do sheet (mobile)
export const SheetHandle = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    width: 40px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.neutral[300]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    margin: 0 auto ${({ theme }) => theme.spacing[8]};
  }
`;
