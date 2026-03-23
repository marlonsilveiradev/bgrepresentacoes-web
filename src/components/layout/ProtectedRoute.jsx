import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function ProtectedRoute({ allowedRoles }) {
  const { isAuthenticated, isLoading, user, mustChangePassword } = useAuth();
  const location = useLocation();

  const isChangePasswordRoute = location.pathname.includes('/alterar-senha');
  // 🟡 1. Aguarda carregamento
  if (isLoading) {
    return null; // ou spinner
  }

  // 🔥 2. REGRA PRIORITÁRIA: troca de senha
  if (mustChangePassword) {
  if (!isChangePasswordRoute) {
   
    return <Navigate to="/alterar-senha" replace />;
  }

  // só libera a própria página
  return <Outlet />;
}

  // 🔴 3. Só depois valida autenticação
  if (!isAuthenticated) {
   
    return <Navigate to="/login" replace />;
  }

  // 🔒 4. Validação de role (se houver)
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ 5. Acesso permitido
  return <Outlet />;
}