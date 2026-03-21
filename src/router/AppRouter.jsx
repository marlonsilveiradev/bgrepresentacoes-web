// ============================================================
// src/router/AppRouter.jsx
// ============================================================
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from '../components/layout/ProtectedRoute';
import MainLayout from '../components/layout/MainLayout';

// Auth
import LoginPage from '../features/auth/pages/LoginPage';
import ChangePasswordPage from '../features/auth/pages/ChangePasswordPage';

// Clients
import ClientsPage from '../features/clients/pages/ClientsPage';
import ClientDetailPage from '../features/clients/pages/ClientDetailPage';
import ClientEditPage from '../features/clients/pages/ClientEditPage';
import ClientCreatePage from '../features/clients/pages/ClientCreatePage';

//Users
import UsersPage from '../features/users/pages/UsersPage';



// Placeholder para módulos ainda não criados
const Placeholder = ({ title }) => (
  <div style={{
    display: 'flex', flexDirection: 'column', gap: '8px',
    alignItems: 'center', justifyContent: 'center',
    minHeight: '60vh', color: '#7a6455',
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
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{ fontFamily: theme.typography.fontFamily.sans }}
          />

          <Routes>
            {/* ── Públicas ───────────────────────────────────────────────── */}
            <Route path="/login" element={<LoginPage />} />


            <Route element={<ProtectedRoute />}>

              {/* 🔓 SEM layout */}
              <Route path="/alterar-senha" element={<ChangePasswordPage />} />

              {/* 🔐 COM layout */}
              <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
                <Route path="/clientes" element={<ClientsPage />} />
                <Route path="/clientes/:id" element={<ClientDetailPage />} />
                <Route path="/clientes/:id/editar" element={<ClientEditPage />} />
                <Route path="/onboarding" element={<ClientCreatePage />} />
                <Route path="/vendas" element={<Placeholder title="Vendas" />} />
                <Route path="/perfil" element={<Placeholder title="Meu Perfil" />} />

                {/* 🔥 Fallback protegido */}
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Route>

            </Route>

            {/* ── Somente Admin ─────────────────────────────────────────── */}
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route element={<MainLayout />}>
                <Route path="/usuarios" element={<UsersPage />} />
                <Route path="/bandeiras" element={<Placeholder title="Bandeiras" />} />
                <Route path="/planos" element={<Placeholder title="Planos" />} />
                <Route path="/relatorios" element={<Placeholder title="Relatórios" />} />
              </Route>
            </Route>

            
          </Routes>

        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}