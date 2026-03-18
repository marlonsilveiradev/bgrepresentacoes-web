// ============================================================
// src/components/layout/MainLayout/styles.js
// ============================================================
import styled from 'styled-components';

// Wrapper raiz: sidebar fixa à esquerda + conteúdo à direita
export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.surface.page};
`;

// Área direita: navbar no topo + conteúdo das páginas abaixo
export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* evita overflow em flex */
  overflow: hidden;
`;

// Área de conteúdo das páginas (onde o <Outlet /> renderiza)
export const PageContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[8]};
  background-color: ${({ theme }) => theme.surface.page};

  @media (max-width: 900px) {
    padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[4]};
  }
`;
