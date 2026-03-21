// ============================================================
// src/features/users/pages/UsersPage/styles.js
//
// Segue exatamente o mesmo padrão visual da ClientsPage:
//   • Paleta quente/terrosa (bege, marrom, off-white)
//   • Mesmo sistema de tabela, filtros e paginação
//   • Props transientes prefixadas com $ para não vazar no DOM
// ============================================================
import styled, { keyframes, css } from 'styled-components';

// ── Animações ─────────────────────────────────────────────────────────────────
const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0);   }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

// ── Cabeçalho da página ───────────────────────────────────────────────────────
export const PageHeader = styled.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  margin-bottom:   24px;
  gap:             16px;
  flex-wrap:       wrap;
`;

export const PageTitleGroup = styled.div`
  display:        flex;
  flex-direction: column;
  gap:            4px;
`;

export const PageTitle = styled.h1`
  font-size:   1.375rem;
  font-weight: 700;
  color:       #3d2b1f;
  margin:      0;
  line-height: 1.2;
`;

export const PageSubtitle = styled.p`
  font-size: 0.8125rem;
  color:     #a0856f;
  margin:    0;
`;

export const PrimaryButton = styled.button`
  display:     inline-flex;
  align-items: center;
  gap:         8px;
  padding:     9px 18px;
  border:      none;
  border-radius: 8px;
  background:  #7a6455;
  color:       #fff;
  font-size:   0.8125rem;
  font-weight: 600;
  font-family: inherit;
  cursor:      pointer;
  transition:  background 0.15s, transform 0.1s;
  white-space: nowrap;

  &:hover  { background: #6b5547; }
  &:active { transform: scale(0.98); }
`;

// ── Barra de filtros ──────────────────────────────────────────────────────────
export const FilterBar = styled.div`
  display:       flex;
  align-items:   center;
  gap:           12px;
  margin-bottom: 16px;
  flex-wrap:     wrap;
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex:     1;
  min-width: 200px;
`;

export const SearchIcon = styled.span`
  position:   absolute;
  left:       10px;
  top:        50%;
  transform:  translateY(-50%);
  color:      #b8a49a;
  display:    flex;
  align-items: center;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width:         100%;
  height:        36px;
  padding:       0 12px 0 32px;
  border:        1.5px solid #e4d9cf;
  border-radius: 8px;
  background:    #fdfaf8;
  font-size:     0.8125rem;
  font-family:   inherit;
  color:         #3d2b1f;
  transition:    border-color 0.15s, box-shadow 0.15s;
  box-sizing:    border-box;

  &::placeholder { color: #c2ae9e; }

  &:focus {
    outline:      none;
    border-color: #7a6455;
    box-shadow:   0 0 0 3px rgba(122, 100, 85, 0.12);
  }
`;

export const FilterSelect = styled.select`
  height:        36px;
  padding:       0 32px 0 10px;
  border:        1.5px solid #e4d9cf;
  border-radius: 8px;
  background:    #fdfaf8;
  font-size:     0.8125rem;
  font-family:   inherit;
  color:         #3d2b1f;
  cursor:        pointer;
  appearance:    none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat:   no-repeat;
  background-position: right 10px center;
  transition:    border-color 0.15s;

  &:focus {
    outline:      none;
    border-color: #7a6455;
    box-shadow:   0 0 0 3px rgba(122, 100, 85, 0.12);
  }
`;

// ── Tabela ────────────────────────────────────────────────────────────────────
export const TableWrapper = styled.div`
  background:    #fff;
  border:        1.5px solid #e4d9cf;
  border-radius: 12px;
  overflow:      hidden;
  animation:     ${fadeIn} 0.2s ease;
`;

export const Table = styled.table`
  width:           100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background: #faf5f1;
  border-bottom: 1.5px solid #e4d9cf;
`;

export const Th = styled.th`
  padding:     12px 16px;
  font-size:   0.6875rem;
  font-weight: 700;
  color:       #a0856f;
  text-align:  left;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid #f0e8e2;
  transition:    background 0.1s;

  &:last-child { border-bottom: none; }
  &:hover      { background: #faf5f1; }
`;

export const Td = styled.td`
  padding:   13px 16px;
  font-size: 0.8125rem;
  color:     #3d2b1f;
  font-weight: 500;
  vertical-align: middle;
`;

export const TdMuted = styled.td`
  padding:   13px 16px;
  font-size: 0.8125rem;
  color:     #8a7060;
  vertical-align: middle;
`;

export const TdActions = styled.td`
  padding:   10px 16px;
  vertical-align: middle;
  white-space: nowrap;
`;

// ── Badge de papel (role) ─────────────────────────────────────────────────────
export const ROLE_LABELS = {
  admin:   'Admin',
  user:    'Usuário',
  partner: 'Parceiro',
};

const ROLE_COLORS = {
  admin:   { bg: '#ede9fe', color: '#5b21b6' },  // violeta
  user:    { bg: '#dbeafe', color: '#1e40af' },  // azul
  partner: { bg: '#ffedd5', color: '#9a3412' },  // laranja
};

export const RoleBadge = styled.span`
  display:       inline-flex;
  align-items:   center;
  gap:           4px;
  padding:       3px 9px;
  border-radius: 99px;
  font-size:     0.6875rem;
  font-weight:   700;
  letter-spacing: 0.03em;
  white-space:   nowrap;

  ${({ $role }) => {
    const c = ROLE_COLORS[$role] ?? { bg: '#f3f4f6', color: '#374151' };
    return css`
      background: ${c.bg};
      color:      ${c.color};
    `;
  }}
`;

// ── Indicador de status ativo/inativo ─────────────────────────────────────────
export const StatusDot = styled.span`
  display:     inline-flex;
  align-items: center;
  gap:         5px;
  font-size:   0.8rem;
  font-weight: 600;

  ${({ $active }) => $active
    ? css`color: #065f46;`
    : css`color: #991b1b;`}
`;

// ── Botão de ação (Desativar / Reativar) ──────────────────────────────────────
const ACTION_VARIANTS = {
  danger:  { border: '#fca5a5', color: '#991b1b', hover: '#fee2e2' },
  success: { border: '#6ee7b7', color: '#065f46', hover: '#d1fae5' },
};

export const ActionButton = styled.button`
  padding:       5px 12px;
  border-radius: 6px;
  border:        1.5px solid ${({ $variant }) => ACTION_VARIANTS[$variant]?.border ?? '#e4d9cf'};
  background:    transparent;
  color:         ${({ $variant }) => ACTION_VARIANTS[$variant]?.color ?? '#3d2b1f'};
  font-size:     0.75rem;
  font-weight:   600;
  font-family:   inherit;
  cursor:        pointer;
  transition:    background 0.15s, transform 0.1s;
  white-space:   nowrap;

  &:hover {
    background: ${({ $variant }) => ACTION_VARIANTS[$variant]?.hover ?? '#faf5f1'};
  }
  &:active { transform: scale(0.97); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

// ── Estado vazio ──────────────────────────────────────────────────────────────
export const EmptyState = styled.div`
  display:        flex;
  flex-direction: column;
  align-items:    center;
  padding:        60px 24px;
  gap:            10px;
  animation:      ${fadeIn} 0.2s ease;
`;

export const EmptyIcon = styled.div`
  color:         #d4c4b8;
  margin-bottom: 4px;
`;

export const EmptyTitle = styled.p`
  font-size:   0.9375rem;
  font-weight: 600;
  color:       #7a6455;
  margin:      0;
`;

export const EmptySubtitle = styled.p`
  font-size: 0.8125rem;
  color:     #a0856f;
  margin:    0;
  text-align: center;
`;

// ── Skeleton ──────────────────────────────────────────────────────────────────
const shimmerStyle = css`
  background: linear-gradient(90deg, #f0e8e2 25%, #f7f0ec 50%, #f0e8e2 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.4s ease infinite;
  border-radius: 4px;
`;

export const SkeletonRow = styled.tr`
  border-bottom: 1px solid #f0e8e2;
  &:last-child { border-bottom: none; }
`;

export const SkeletonCell = styled.td`
  padding: 15px 16px;
  vertical-align: middle;
`;

export const SkeletonBar = styled.span`
  display: block;
  height:  13px;
  width:   ${({ $w }) => $w ?? '100%'};
  ${shimmerStyle}
`;

// ── Paginação ─────────────────────────────────────────────────────────────────
export const Pagination = styled.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  padding:         14px 20px;
  border-top:      1px solid #f0e8e2;
  flex-wrap:       wrap;
  gap:             12px;
`;

export const PaginationInfo = styled.span`
  font-size: 0.8rem;
  color:     #a0856f;
`;

export const PaginationButtons = styled.div`
  display:     flex;
  align-items: center;
  gap:         4px;
`;

export const PageButton = styled.button`
  display:       inline-flex;
  align-items:   center;
  justify-content: center;
  min-width:     32px;
  height:        32px;
  padding:       0 6px;
  border:        1.5px solid ${({ $active }) => $active ? '#7a6455' : '#e4d9cf'};
  border-radius: 6px;
  background:    ${({ $active }) => $active ? '#7a6455' : 'transparent'};
  color:         ${({ $active }) => $active ? '#fff' : '#7a6455'};
  font-size:     0.8125rem;
  font-weight:   ${({ $active }) => $active ? 700 : 500};
  font-family:   inherit;
  cursor:        ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity:       ${({ disabled }) => disabled ? 0.35 : 1};
  transition:    background 0.15s, border-color 0.15s;

  &:hover:not(:disabled):not([disabled]) {
    background:   ${({ $active }) => $active ? '#6b5547' : '#faf5f1'};
    border-color: #7a6455;
  }
`;

// ── Modal ─────────────────────────────────────────────────────────────────────
export const Overlay = styled.div`
  position:   fixed;
  inset:      0;
  background: rgba(30, 18, 10, 0.45);
  backdrop-filter: blur(2px);
  display:    flex;
  align-items: center;
  justify-content: center;
  z-index:    1000;
  padding:    16px;
`;

export const ModalBox = styled.div`
  background:    #fff;
  border-radius: 14px;
  width:         100%;
  max-width:     440px;
  box-shadow:    0 20px 60px rgba(30, 18, 10, 0.18);
  animation:     ${slideUp} 0.2s ease;
  overflow:      hidden;
`;

export const ModalHeader = styled.div`
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  padding:         20px 24px 16px;
  border-bottom:   1.5px solid #f0e8e2;
`;

export const ModalTitle = styled.h2`
  font-size:   1rem;
  font-weight: 700;
  color:       #3d2b1f;
  margin:      0;
`;

export const ModalCloseButton = styled.button`
  display:       inline-flex;
  align-items:   center;
  justify-content: center;
  width:         32px;
  height:        32px;
  border:        none;
  border-radius: 6px;
  background:    transparent;
  color:         #a0856f;
  cursor:        pointer;
  font-family:   inherit;
  transition:    background 0.15s;

  &:hover { background: #faf5f1; color: #3d2b1f; }
`;

export const ModalBody = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalFooter = styled.div`
  display:         flex;
  align-items:     center;
  justify-content: flex-end;
  gap:             10px;
  padding:         16px 24px 20px;
  border-top:      1.5px solid #f0e8e2;
`;

export const CancelButton = styled.button`
  padding:       9px 18px;
  border:        1.5px solid #e4d9cf;
  border-radius: 8px;
  background:    transparent;
  color:         #7a6455;
  font-size:     0.8125rem;
  font-weight:   600;
  font-family:   inherit;
  cursor:        pointer;
  transition:    background 0.15s;

  &:hover:not(:disabled)  { background: #faf5f1; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

export const SubmitButton = styled.button`
  display:       inline-flex;
  align-items:   center;
  gap:           7px;
  padding:       9px 18px;
  border:        none;
  border-radius: 8px;
  background:    #7a6455;
  color:         #fff;
  font-size:     0.8125rem;
  font-weight:   600;
  font-family:   inherit;
  cursor:        pointer;
  transition:    background 0.15s, transform 0.1s;

  &:hover:not(:disabled)  { background: #6b5547; }
  &:active:not(:disabled) { transform: scale(0.98); }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

export const Spinner = styled.span`
  display:       inline-block;
  width:         14px;
  height:        14px;
  border:        2px solid rgba(255,255,255,0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation:     ${spin} 0.7s linear infinite;
`;

// ── Campos do formulário ──────────────────────────────────────────────────────
export const Field = styled.div`
  display:        flex;
  flex-direction: column;
  gap:            5px;
`;

export const Label = styled.label`
  font-size:   0.8rem;
  font-weight: 600;
  color:       #5c4033;
`;

export const Input = styled.input`
  height:        38px;
  padding:       0 12px;
  border:        1.5px solid ${({ $hasError }) => $hasError ? '#ef4444' : '#e4d9cf'};
  border-radius: 8px;
  background:    #fdfaf8;
  font-size:     0.875rem;
  font-family:   inherit;
  color:         #3d2b1f;
  transition:    border-color 0.15s, box-shadow 0.15s;

  &::placeholder { color: #c2ae9e; }

  &:focus {
    outline:      none;
    border-color: ${({ $hasError }) => $hasError ? '#ef4444' : '#7a6455'};
    box-shadow:   0 0 0 3px ${({ $hasError }) =>
      $hasError ? 'rgba(239,68,68,0.12)' : 'rgba(122,100,85,0.12)'};
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; background: #f7f0ec; }
`;

export const Select = styled.select`
  height:        38px;
  padding:       0 32px 0 10px;
  border:        1.5px solid ${({ $hasError }) => $hasError ? '#ef4444' : '#e4d9cf'};
  border-radius: 8px;
  background:    #fdfaf8;
  font-size:     0.875rem;
  font-family:   inherit;
  color:         #3d2b1f;
  cursor:        pointer;
  appearance:    none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat:   no-repeat;
  background-position: right 10px center;
  transition:    border-color 0.15s, box-shadow 0.15s;

  &:focus {
    outline:      none;
    border-color: ${({ $hasError }) => $hasError ? '#ef4444' : '#7a6455'};
    box-shadow:   0 0 0 3px ${({ $hasError }) =>
      $hasError ? 'rgba(239,68,68,0.12)' : 'rgba(122,100,85,0.12)'};
  }

  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

export const FieldError = styled.span`
  display:     inline-flex;
  align-items: center;
  gap:         4px;
  font-size:   0.75rem;
  color:       #dc2626;
  font-weight: 500;
`;

// ── Caixa de senha temporária ─────────────────────────────────────────────────
export const TempPasswordBox = styled.div`
  background:    #fffbeb;
  border:        1.5px solid #fcd34d;
  border-radius: 10px;
  padding:       16px;
  display:       flex;
  flex-direction: column;
  gap:           10px;
`;

export const TempPasswordLabel = styled.p`
  font-size:   0.8125rem;
  color:       #78350f;
  font-weight: 600;
  margin:      0;
  line-height: 1.4;
`;

export const TempPasswordValue = styled.input`
  flex:          1;
  height:        36px;
  padding:       0 36px 0 10px;
  border:        1.5px solid #fcd34d;
  border-radius: 8px;
  background:    #fff;
  font-size:     0.875rem;
  font-family:   monospace;
  color:         #3d2b1f;
  font-weight:   600;
  letter-spacing: 0.08em;

  &:focus { outline: none; }
`;

export const PasswordWrapper = styled.div`
  position:    relative;
  display:     flex;
  align-items: center;
`;

export const TogglePasswordButton = styled.button`
  position:   absolute;
  right:      6px;
  display:    inline-flex;
  align-items: center;
  justify-content: center;
  width:      28px;
  height:     28px;
  border:     none;
  background: transparent;
  color:      #a0856f;
  cursor:     pointer;
  border-radius: 4px;
  font-family: inherit;
  transition: color 0.15s;

  &:hover { color: #3d2b1f; }
`;

export const CopyButton = styled.button`
  align-self:    flex-start;
  padding:       6px 14px;
  border:        1.5px solid #fcd34d;
  border-radius: 6px;
  background:    transparent;
  color:         #78350f;
  font-size:     0.75rem;
  font-weight:   700;
  font-family:   inherit;
  cursor:        pointer;
  transition:    background 0.15s;

  &:hover { background: #fef3c7; }
`;