// ============================================================
// src/components/layout/Sidebar/styles.js
// ============================================================
import styled, { keyframes, css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
`;

// ── Wrapper da sidebar ────────────────────────────────────────────────────────
// Largura fixa no desktop; no mobile vira um drawer deslizante.
export const SidebarWrapper = styled.aside`
  width: 240px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.surface.sidebar};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndex.sticky};

  /* Linha âmbar sutil na borda direita */
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[800]};

  /* Scrollbar invisível mas funcional */
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  /* Mobile: drawer por cima do conteúdo */
  @media (max-width: 900px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform ${({ theme }) => theme.transitions.slower};
    z-index: ${({ theme }) => theme.zIndex.modal};
    box-shadow: ${({ $open }) => ($open ? '8px 0 32px rgba(0,0,0,0.4)' : 'none')};
  }
`;

// ── Logo / Topo ───────────────────────────────────────────────────────────────
export const SidebarHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[5]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[800]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  animation: ${fadeIn} 0.4s ease both;
`;

export const LogoMark = styled.div`
  width: 34px;
  height: 34px;
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
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.primary[900]}60;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  overflow: hidden;
`;

export const LogoName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


// ── Navegação ─────────────────────────────────────────────────────────────────
export const Nav = styled.nav`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

// Separador de seção com label
export const NavSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  padding: 0 ${({ theme }) => theme.spacing[2]};
`;

export const NavSectionLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

// NavLink do react-router — recebe activeClassName automaticamente
export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral[400]};
  text-decoration: none;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};
  position: relative;
  overflow: hidden;

  /* Ícone */
  svg {
    flex-shrink: 0;
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  /* Hover */
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[800]};
    color: ${({ theme }) => theme.colors.neutral[100]};
  }

  /* Rota ativa — classe injetada pelo NavLink */
  &.active {
    background-color: ${({ theme }) => theme.colors.primary[900]}80;
    color: ${({ theme }) => theme.colors.primary[300]};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

    svg { color: ${({ theme }) => theme.colors.primary[400]}; }

    /* Barra lateral âmbar indicando página ativa */
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 20%;
      height: 60%;
      width: 3px;
      border-radius: 0 2px 2px 0;
      background-color: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`;

export const NavItemLabel = styled.span`
  flex: 1;
`;

// Badge numérico opcional (ex: notificações)
export const NavBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.primary[600]};
  color: #fff;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  padding: 1px 6px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  line-height: 1.6;
`;

// ── Rodapé da sidebar ─────────────────────────────────────────────────────────
export const SidebarFooter = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[800]};
`;

// Card do usuário logado no rodapé
export const UserCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color ${({ theme }) => theme.transitions.fast};
  cursor: default;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[800]};
  }
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary[700]},
    ${({ theme }) => theme.colors.primary[900]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary[200]};
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const UserName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.text.onDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserRole = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.neutral[500]};
  text-transform: capitalize;
`;

// ── Overlay mobile (fundo escuro quando sidebar aberta) ───────────────────────
export const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: fixed;
    inset: 0;
    background-color: rgba(19, 14, 10, 0.65);
    z-index: ${({ theme }) => theme.zIndex.overlay};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    transition:
      opacity ${({ theme }) => theme.transitions.slow},
      visibility ${({ theme }) => theme.transitions.slow};
    backdrop-filter: blur(2px);
  }
`;
