// ============================================================
// src/features/auth/pages/LoginPage/styles.js
// Styled Components — LoginPage
// Tokens: theme.js (neutral, primary, shadows, transitions)
// ============================================================
import styled, { keyframes, css } from 'styled-components';

// ── Keyframes ─────────────────────────────────────────────────────────────────

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const enterLeft = keyframes`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export const enterRight = keyframes`
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export const enterUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const overlayEnter = keyframes`
  from { opacity: 0; transform: scale(1.02); }
  to   { opacity: 1; transform: scale(1); }
`;

// ── Layout raiz ───────────────────────────────────────────────────────────────

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 55fr 45fr;
  overflow: hidden;

  @media (max-width: 900px) {
    display: block;
    min-height: 100vh;
  }
`;

// ── LADO A — Painel de Marca ──────────────────────────────────────────────────

export const BrandPanel = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[12]};
  min-height: 100vh;

  background-color: #5C3010;
  background-image:
    radial-gradient(
      ellipse 65% 55% at 8% 92%,
      ${({ theme }) => theme.colors.primary[900]}70,
      transparent 60%
    ),
    radial-gradient(
      ellipse 45% 45% at 92% 8%,
      rgba(80, 35, 5, 0.65),
      transparent 55%
    );

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 12%;
    right: 0;
    width: 1px;
    height: 76%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${({ theme }) => theme.colors.primary[500]}55,
      transparent
    );
    z-index: 2;
  }

  animation: ${enterLeft} 0.6s ease both;

  @media (max-width: 900px) {
    padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[6]};
    min-height: 100vh;
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

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const BrandTop = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[20]};
  animation: ${enterLeft} 0.55s 0.05s ease both;

  @media (max-width: 900px) {
    margin-bottom: ${({ theme }) => theme.spacing[12]};
    justify-content: center;
  }
`;

export const LogoMark = styled.div`
  width: 40px;
  height: 40px;
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
  box-shadow: 0 4px 18px ${({ theme }) => theme.colors.primary[900]}80;
  flex-shrink: 0;
`;

export const LogoName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary[200]};
  letter-spacing: 0.025em;
`;

export const BrandHeadline = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[50]};
  line-height: 1.15;
  margin: 0 0 ${({ theme }) => theme.spacing[5]};
  max-width: 460px;
  animation: ${enterLeft} 0.55s 0.12s ease both;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.primary[300]};
  }

  @media (max-width: 900px) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
    max-width: 320px;
  }
`;

export const BrandBody = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.neutral[500]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0 0 ${({ theme }) => theme.spacing[10]};
  max-width: 360px;
  animation: ${enterLeft} 0.55s 0.2s ease both;

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    max-width: 280px;
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`;

export const StatRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  animation: ${enterLeft} 0.55s 0.28s ease both;

  @media (max-width: 900px) {
    justify-content: center;
    gap: ${({ theme }) => theme.spacing[6]};
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
  color: ${({ theme }) => theme.colors.primary[400]};
  line-height: 1;
`;

export const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.neutral[600]};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const BrandFooter = styled.div`
  position: relative;
  z-index: 3;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.neutral[700]};
  animation: ${fadeIn} 1s 0.5s ease both;

  @media (max-width: 900px) {
    display: none;
  }
`;

// ── Botão mobile "Acessar Sistema" — VISÍVEL APENAS EM MOBILE ─────────────────

export const MobileAccessButton = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    margin-top: ${({ theme }) => theme.spacing[10]};
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
    box-shadow: 0 8px 28px ${({ theme }) => theme.colors.primary[900]}60;
    animation: ${enterUp} 0.55s 0.35s ease both;
    transition:
      transform ${({ theme }) => theme.transitions.base},
      box-shadow ${({ theme }) => theme.transitions.base};

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px ${({ theme }) => theme.colors.primary[900]}75;
    }
    &:active { transform: translateY(0); }
  }
`;

// ── LADO B — Painel do formulário (desktop) ───────────────────────────────────

export const FormPanel = styled.section`
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[16]};
  animation: ${enterRight} 0.55s 0.1s ease both;

  @media (max-width: 1100px) {
    padding: ${({ theme }) => theme.spacing[10]} ${({ theme }) => theme.spacing[10]};
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const FormInner = styled.div`
  width: 100%;
  max-width: 360px;
`;

// ── Overlay Fullscreen — APENAS MOBILE ───────────────────────────────────────
// Aparece ao clicar em "Acessar Sistema". Cobre toda a viewport.

export const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    z-index: ${({ theme }) => theme.zIndex.modal};
    background-color: ${({ theme }) => theme.colors.neutral[50]};
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
    padding-bottom: ${({ theme }) => theme.spacing[12]};

    /* Transição de visibilidade */
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    opacity: ${({ $open }) => ($open ? '1' : '0')};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transition:
      opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      visibility 0.28s;

    /* Quando aberto, conteúdo entra com animação */
    ${({ $open }) =>
      $open &&
      css`
        & > * {
          animation: ${overlayEnter} 0.32s 0.05s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}
  }
`;

/* Barra do topo do overlay: logo + botão X */
export const OverlayHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  flex-shrink: 0;
`;

export const OverlayBrand = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const OverlayLogoMark = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[500]},
    ${({ theme }) => theme.colors.primary[700]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.serif};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #fff;
`;

export const OverlayLogoName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.secondary};
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text.secondary};
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    color: ${({ theme }) => theme.text.primary};
  }
`;

// ── Conteúdo do formulário ────────────────────────────────────────────────────

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
  margin: 0 0 ${({ theme }) => theme.spacing[3]};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const FormSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;

// ── Campos ────────────────────────────────────────────────────────────────────

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
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
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.muted};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// Input clean: apenas borda inferior. Foco → âmbar primary[500]
export const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0
    ${({ $hasToggle, theme }) => ($hasToggle ? theme.spacing[10] : theme.spacing[1])}
    0 0;
  border: none;
  border-bottom: 1.5px solid ${({ theme, $hasError }) =>
    $hasError ? theme.colors.error.base : theme.colors.neutral[200]};
  border-radius: 0;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.text.primary};
  outline: none;
  -webkit-appearance: none;
  box-sizing: border-box;
  transition:
    border-color ${({ theme }) => theme.transitions.base},
    padding-left ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[300]};
  }

  &:focus {
    border-bottom-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error.base : theme.colors.primary[500]};
    padding-left: ${({ theme }) => theme.spacing[2]};
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 8px;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral[300]};
  padding: ${({ theme }) => theme.spacing[1]};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover { color: ${({ theme }) => theme.colors.primary[500]}; }
`;

export const FieldError = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.error.base};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

// ── Botão de submit ───────────────────────────────────────────────────────────

export const SubmitButton = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $isLoading, theme }) =>
    $isLoading
      ? theme.colors.primary[700]
      : `linear-gradient(135deg,
          ${theme.colors.primary[600]},
          ${theme.colors.primary[500]}
        )`};
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
  box-shadow: 0 4px 18px ${({ theme }) => theme.colors.primary[900]}40;
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
    box-shadow: 0 8px 30px ${({ theme }) => theme.colors.primary[900]}55;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 8px ${({ theme }) => theme.colors.primary[900]}35;
  }

  &:disabled { opacity: 0.7; cursor: not-allowed; }
`;

export const Spinner = styled.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: _spin 0.7s linear infinite;

  @keyframes _spin { to { transform: rotate(360deg); } }
`;

export const FormDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  margin: ${({ theme }) => theme.spacing[8]} 0 ${({ theme }) => theme.spacing[6]};
`;

export const FormFooter = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
  text-align: center;
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;
