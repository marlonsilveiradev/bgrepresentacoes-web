// ============================================================
// src/components/layout/Navbar/styles.js
// ============================================================
import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  height: 60px;
  background-color: ${({ theme }) => theme.surface.card};
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.raised};
  flex-shrink: 0;

  /* Sombra suave para separar do conteúdo */
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

// Lado esquerdo: botão hamburguer (mobile) + breadcrumb/título
export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

// Botão hamburguer — só aparece no mobile
export const HamburgerButton = styled.button`
  display: none;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  background: transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.secondary};
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    color: ${({ theme }) => theme.text.primary};
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
`;

// Lado direito: usuário + botão de logout
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const UserGreeting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;

  /* Oculta em telas pequenas para não sobrecarregar */
  @media (max-width: 600px) {
    display: none;
  }
`;

export const GreetingName = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.text.primary};
  line-height: 1.2;

  /* Limita o comprimento para não quebrar o layout */
  max-width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const GreetingRole = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.text.muted};
  text-transform: capitalize;
`;

export const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${({ theme }) => theme.border.default};
  flex-shrink: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1.5px solid ${({ theme }) => theme.border.default};
  background: transparent;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.text.secondary};
  white-space: nowrap;
  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.error.light};
    color: ${({ theme }) => theme.colors.error.dark};
    border-color: ${({ theme }) => theme.colors.error.base}55;
  }

  /* Em mobile só mostra o ícone */
  span {
    @media (max-width: 480px) {
      display: none;
    }
  }
`;
