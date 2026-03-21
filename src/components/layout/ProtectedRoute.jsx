// // ============================================================
// // src/components/layout/ProtectedRoute.jsx
// // Guard de rota: autenticação + roles + mustChangePassword
// // ============================================================
// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { useAuth } from '../../contexts/AuthContext';

// // ── Loading enquanto o AuthContext inicializa ─────────────────────────────────
// const spin = keyframes`
//   to { transform: rotate(360deg); }
// `;

// const LoadingWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${({ theme }) => theme.surface.page};
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing[4]};
// `;

// const LoadingSpinner = styled.div`
//   width: 36px;
//   height: 36px;
//   border: 3px solid ${({ theme }) => theme.colors.primary[100]};
//   border-top-color: ${({ theme }) => theme.brand.primary};
//   border-radius: 50%;
//   animation: ${spin} 0.8s linear infinite;
// `;

// const LoadingText = styled.p`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   color: ${({ theme }) => theme.text.muted};
//   margin: 0;
// `;

// // ── Tela de Acesso Negado (403) ───────────────────────────────────────────────
// const ForbiddenWrapper = styled.div`
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${({ theme }) => theme.surface.page};
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing[3]};
//   text-align: center;
//   padding: ${({ theme }) => theme.spacing[8]};
// `;

// const ForbiddenCode = styled.p`
//   font-family: ${({ theme }) => theme.typography.fontFamily.serif};
//   font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
//   color: ${({ theme }) => theme.colors.primary[200]};
//   margin: 0;
//   line-height: 1;
// `;

// const ForbiddenTitle = styled.h1`
//   font-family: ${({ theme }) => theme.typography.fontFamily.serif};
//   font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
//   font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
//   color: ${({ theme }) => theme.text.primary};
//   margin: 0;
// `;

// const ForbiddenText = styled.p`
//   font-family: ${({ theme }) => theme.typography.fontFamily.sans};
//   font-size: ${({ theme }) => theme.typography.fontSize.sm};
//   color: ${({ theme }) => theme.text.secondary};
//   margin: 0;
//   max-width: 320px;
//   line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
// `;

// // ── Componente ────────────────────────────────────────────────────────────────
// /**
//  * ProtectedRoute
//  *
//  * Uso no AppRouter:
//  *
//  * // Qualquer usuário autenticado:
//  * <Route element={<ProtectedRoute />}>
//  *   <Route path="/dashboard" element={<DashboardPage />} />
//  * </Route>
//  *
//  * // Apenas admins:
//  * <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
//  *   <Route path="/usuarios" element={<UsersPage />} />
//  * </Route>
//  *
//  * @param {string[]} allowedRoles - Roles permitidos. Omitir = qualquer autenticado.
//  */
// export default function ProtectedRoute({ allowedRoles = [] }) {
//   const { isAuthenticated, isLoading, mustChangePassword, user } = useAuth();
//   const location = useLocation();

//   console.log('[ProtectedRoute]', {
//   path: location.pathname,
//   isAuthenticated,
//   isLoading,
//   mustChangePassword,
//   user,
// });

//   // 1. Aguarda a inicialização do contexto (verificação de token)
//   if (isLoading) {
//     return (
//       <LoadingWrapper>
//         <LoadingSpinner />
//         <LoadingText>Verificando sessão…</LoadingText>
//       </LoadingWrapper>
//     );
//   }

//   // 2. Não autenticado → redireciona para login, preservando a rota tentada
//   if (!isAuthenticated) {
//   console.log('[REDIRECT LOGIN] usuário NÃO autenticado', {
//     path: location.pathname,
//   });

//   return (
//     <Navigate
//       to="/login"
//       state={{ from: location }}
//       replace
//     />
//   );
// }
//   // if (!isAuthenticated) {
//   //   return (
//   //     <Navigate
//   //       to="/login"
//   //       state={{ from: location }}
//   //       replace
//   //     />
//   //   );
//   // }

//   // 3. Evita piscar rota antes de autenticar corretamente
//   if (!isAuthenticated && !isLoading) {
//     return <Navigate to="/login" replace />;
//   }

//   // 4. mustChangePassword → força passagem pela tela de troca de senha.
//   //    Permite apenas /alterar-senha para não criar loop infinito.
//   //    O flushSync no AuthContext.login() garante que isAuthenticated já
//   //    seja true antes de navigate('/alterar-senha') ser chamado.
//  const isChangePasswordRoute = location.pathname.includes('/alterar-senha');

// if (mustChangePassword && !isChangePasswordRoute) {
//   console.log('[REDIRECT ALTERAR SENHA - CORRETO]', {
//     de: location.pathname,
//     para: '/alterar-senha'
//   });
//   if (mustChangePassword && isChangePasswordRoute) {
//   console.log('[PERMITIDO ALTERAR SENHA]');
// }

//   return <Navigate to="/alterar-senha" replace />;
// }
//   // if (mustChangePassword && location.pathname !== '/alterar-senha') {
//   //   return <Navigate to="/alterar-senha" replace />;
//   // }

//   // 5. Verificação de role — se allowedRoles foi informado
//   if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
//     return (
//       <ForbiddenWrapper>
//         <ForbiddenCode>403</ForbiddenCode>
//         <ForbiddenTitle>Acesso não autorizado</ForbiddenTitle>
//         <ForbiddenText>
//           Você não tem permissão para acessar esta área.
//           Entre em contato com o administrador caso acredite que isso é um erro.
//         </ForbiddenText>
//       </ForbiddenWrapper>
//     );
//   }

//   // 6. Tudo OK — renderiza as rotas filhas
//   return <Outlet />;
// }

import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function ProtectedRoute({ allowedRoles }) {
  const { isAuthenticated, isLoading, user, mustChangePassword } = useAuth();
  const location = useLocation();

  const isChangePasswordRoute = location.pathname.includes('/alterar-senha');

  console.log('[ProtectedRoute]', {
    path: location.pathname,
    isAuthenticated,
    isLoading,
    mustChangePassword,
    user,
  });

  // 🟡 1. Aguarda carregamento
  if (isLoading) {
    return null; // ou spinner
  }

  // 🔥 2. REGRA PRIORITÁRIA: troca de senha
  if (mustChangePassword) {
  if (!isChangePasswordRoute) {
    console.log('[FORCE CHANGE PASSWORD]');
    return <Navigate to="/alterar-senha" replace />;
  }

  // só libera a própria página
  return <Outlet />;
}

  // 🔴 3. Só depois valida autenticação
  if (!isAuthenticated) {
    console.log('[REDIRECT → LOGIN]');
    return <Navigate to="/login" replace />;
  }

  // 🔒 4. Validação de role (se houver)
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ 5. Acesso permitido
  return <Outlet />;
}