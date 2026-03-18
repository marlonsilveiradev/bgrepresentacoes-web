// ============================================================
// src/contexts/AuthContext.jsx — BG Representações
// ============================================================
import {
  createContext, useCallback, useContext,
  useEffect, useMemo, useReducer, useRef,
} from 'react';
import { toast } from 'react-toastify';
import api, {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  getApiErrorMessage,
  setTokens,
} from '../lib/api';

// ── Actions ───────────────────────────────────────────────────────────────────
const A = {
  INIT: 'INIT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  PASSWORD_CHANGED: 'PASSWORD_CHANGED',
  UPDATE_USER: 'UPDATE_USER',
  SET_LOADING: 'SET_LOADING',
};

// ── Estado inicial ────────────────────────────────────────────────────────────
const INITIAL = {
  user: null,
  isAuthenticated: false,
  isLoading: true,   // true enquanto verifica o token salvo
  mustChangePassword: false,
};

// ── Reducer ───────────────────────────────────────────────────────────────────
function reducer(state, { type, payload }) {
  switch (type) {
    case A.INIT:
      return {
        ...state,
        user: payload.user ?? null,
        isAuthenticated: !!payload.user,
        isLoading: false,
        mustChangePassword: payload.mustChangePassword ?? false,
      };
    case A.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
        isLoading: false,
        mustChangePassword: payload.mustChangePassword ?? false,
      };
    case A.LOGOUT:
      return { ...INITIAL, isLoading: false };
    case A.PASSWORD_CHANGED:
      return { ...state, mustChangePassword: false };
    case A.UPDATE_USER:
      return { ...state, user: { ...state.user, ...payload } };
    case A.SET_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}

// ── Context ───────────────────────────────────────────────────────────────────
export const AuthContext = createContext(null);

// ── Provider ──────────────────────────────────────────────────────────────────
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL);

  // Ref para evitar dupla execução do StrictMode no init
  const initialized = useRef(false);

  // ── Inicialização: tenta restaurar sessão ao carregar o app ──────────────
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const init = async () => {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();

      // Nenhum token salvo → usuário não autenticado
      if (!accessToken && !refreshToken) {
        dispatch({ type: A.INIT, payload: { user: null } });
        return;
      }

      try {
        // O interceptor do api.js tenta refresh automaticamente
        // se o accessToken estiver expirado
        const { data } = await api.get('/users/profile');
        dispatch({
          type: A.INIT,
          payload: { user: data.data },
        });
      } catch {
        // Ambos os tokens inválidos → limpa e força login
        clearTokens();
        dispatch({ type: A.INIT, payload: { user: null } });
      }
    };

    init();
  }, []);

  // ── Escuta evento de sessão expirada (disparado pelo interceptor) ─────────
  useEffect(() => {
    const handle = () => {
      dispatch({ type: A.LOGOUT });
    };
    window.addEventListener('bg:session-expired', handle);
    return () => window.removeEventListener('bg:session-expired', handle);
  }, []);

  // ── Login ─────────────────────────────────────────────────────────────────
  const login = useCallback(async (email, password) => {
    dispatch({ type: A.SET_LOADING, payload: true });
    try {
      const { data } = await api.post('/auth/login', { email, password });

      // O backend retorna { status, data: { token, refreshToken, user } }
      // "token" é o accessToken nesta API
      const payload = data.data ?? data;
      const accessToken = payload.token ?? payload.accessToken;
      const { refreshToken, user } = payload;

      toast.success('Login efetuado com sucesso!', { toastId: 'login-success' });

      // Persiste tokens no localStorage
      setTokens({ accessToken, refreshToken });

      // Detecta primeiro acesso (senha temporária)
      // O backend pode enviar o campo explicitamente ou indicar via last_login_at nulo
      const mustChange =
        payload.mustChangePassword ??
          data.mustChangePassword ??
          (user?.last_login_at === null || user?.last_login_at === undefined)
          ? false   // só marca true se o campo vier explícito
          : false;

      // Versão mais segura: usa só o campo explícito do backend
      const mustChangePassword = payload.mustChangePassword === true;

      dispatch({
        type: A.LOGIN_SUCCESS,
        payload: { user, mustChangePassword },
      });

      return { mustChangePassword };

    } catch (error) {
      dispatch({ type: A.SET_LOADING, payload: false });
      throw new Error(getApiErrorMessage(error, 'E-mail ou senha inválidos.'));
    }
  }, []);

  // ── Troca de senha (primeiro acesso) ─────────────────────────────────────
  const changePassword = useCallback(async (currentPassword, newPassword, confirmPassword) => {
    try {
      await api.patch('/auth/change-password', {
        currentPassword,
        newPassword,
        confirmPassword,
      });
      dispatch({ type: A.PASSWORD_CHANGED });
      toast.success('Senha alterada com sucesso!');
    } catch (error) {
      throw new Error(
        getApiErrorMessage(error, 'Erro ao alterar a senha. Tente novamente.'),
      );
    }
  }, []);

  // ── Logout ────────────────────────────────────────────────────────────────
  const logout = useCallback(() => {
    // 1. Toast imediato — aparece antes do redirect
    toast.success('Logout efetuado com sucesso!', { toastId: 'logout-success' });
    // 2. Limpa tokens e estado local de forma síncrona
    clearTokens();
    dispatch({ type: A.LOGOUT });
    // 3. Notifica o backend em fire-and-forget (não bloqueia nada)
    api.post('/auth/logout').catch(() => { });
  }, []);

  // ── Atualiza dados do usuário (após editar perfil) ────────────────────────
  const updateUser = useCallback((updates) => {
    dispatch({ type: A.UPDATE_USER, payload: updates });
  }, []);

  // ── Helpers de role ───────────────────────────────────────────────────────
  const isAdmin = state.user?.role === 'admin';
  const isUser = state.user?.role === 'user';
  const isPartner = state.user?.role === 'partner';
  const hasRole = useCallback(
    (...roles) => roles.includes(state.user?.role),
    [state.user?.role],
  );

  // ── Valor memorizado do contexto ───────────────────────────────────────────
  const value = useMemo(() => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    mustChangePassword: state.mustChangePassword,
    isAdmin, isUser, isPartner, hasRole,
    login, logout, changePassword, updateUser,
  }), [
    state,
    isAdmin, isUser, isPartner, hasRole,
    login, logout, changePassword, updateUser,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>.');
  return ctx;
}

export default AuthContext;