// ============================================================
// src/components/layout/MainLayout/index.jsx
// Junta Sidebar + Navbar + Outlet (conteúdo das páginas)
// ============================================================
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar  from '../Navbar';
import { LayoutWrapper, ContentArea, PageContent } from './styles';

export default function MainLayout() {
  // Controla o drawer da sidebar no mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <LayoutWrapper>
      {/* Sidebar — recebe estado de aberto/fechado para mobile */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Área principal: navbar + conteúdo da rota */}
      <ContentArea>
        <Navbar onMenuClick={() => setSidebarOpen((v) => !v)} />

        <PageContent>
          {/*
            <Outlet /> é onde o react-router renderiza
            a página filha da rota atual (ex: ClientsPage, Dashboard…)
          */}
          <Outlet />
        </PageContent>
      </ContentArea>
    </LayoutWrapper>
  );
}
