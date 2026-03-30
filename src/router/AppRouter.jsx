// ============================================================
// src/router/AppRouter.jsx
// ============================================================
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from '../components/layout/ProtectedRoute';
import MainLayout from '../components/layout/MainLayout';

// Auth
const LoginPage = lazy(() => import('../features/auth/pages/LoginPage'));
const ChangePasswordPage = lazy(() => import('../features/auth/pages/ChangePasswordPage'));

//Dashboard
const DashboardPage = lazy(() => import('../features/dashboard/pages/DashboardPage'));

// Clients
const ClientCreatePage = lazy(() => import('../features/clients/pages/ClientCreatePage'));
const ClientEditPage = lazy(() => import('../features/clients/pages/ClientEditPage'));
const ClientDetailPage = lazy(() => import('../features/clients/pages/ClientDetailPage'));
const ClientsPage = lazy(() => import('../features/clients/pages/ClientsPage'));

// Users
const UsersPage = lazy(() => import('../features/users/pages/UsersPage'));

const ReportsPage = lazy(() => import('../features/reports/pages/ReportPage'));

// Placeholder
const Placeholder = ({ title }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    color: '#7a6455',
  }}>
    <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
      Em construção
    </p>
    <p style={{ fontSize: '22px', fontWeight: '700', fontFamily: 'serif' }}>{title}</p>
  </div>
);

export default function AppRouter() {
  const isGitHubPages = window.location.hostname.includes('github.io');
  const Router = isGitHubPages ? HashRouter : BrowserRouter;
  const routerProps = isGitHubPages ? {} : { basename: import.meta.env.BASE_URL };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router {...routerProps}>
        <AuthProvider>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            theme="light"
          />
            <Suspense fallback={<div style={{ padding: '40px', textAlign: 'center' }}>Carregando...</div>}> 
          <Routes>

            {/* ── Públicas ───────────────────────── */}
            <Route path="/login" element={<LoginPage />} />

            {/* ── Protegidas (BASE) ───────────────── */}
            <Route element={<ProtectedRoute />}>
              
              {/* Sem layout */}
              <Route path="/alterar-senha" element={<ChangePasswordPage />} />

              {/* Com layout */}
              <Route element={<MainLayout />}>

                {/* 🔓 Acesso geral */}
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/clientes" element={<ClientsPage />} />
                <Route path="/clientes/:id" element={<ClientDetailPage />} />                
                <Route path="/vendas" element={<Placeholder title="Vendas" />} />
                <Route path="/perfil" element={<Placeholder title="Meu Perfil" />} />

                {/* 🔒 Admin + User */}
                <Route element={<ProtectedRoute allowedRoles={['admin', 'user']} />}>
                  <Route path="/onboarding" element={<ClientCreatePage />} />
                  <Route path="/clientes/:id/editar" element={<ClientEditPage />} />
                </Route>

                {/* 🔒 Apenas Admin */}
                <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                  <Route path="/usuarios" element={<UsersPage />} />
                  <Route path="/bandeiras" element={<Placeholder title="Bandeiras" />} />
                  <Route path="/planos" element={<Placeholder title="Planos" />} />
                  <Route path="/relatorios" element={<ReportsPage />} />
                </Route>

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />

              </Route>
            </Route>

          </Routes>
          </Suspense>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}