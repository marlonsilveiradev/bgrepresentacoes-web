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

  // 🔥 2. Regra obrigatória: troca de senha
  if (mustChangePassword) {
    if (!isChangePasswordRoute) {
      return <Navigate to="/alterar-senha" replace />;
    }
    return <Outlet />;
  }

  // 3. Se o usuário NÃO precisa trocar a senha, mas está tentando acessar a rota de alterar senha,
  // redireciona para o dashboard
  if (isChangePasswordRoute) {
    return <Navigate to="/dashboard" replace />;
  }

  // 🔴 4. Não autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 🔒 5. Validação de role
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ 6. Permitido
  return <Outlet />;
}