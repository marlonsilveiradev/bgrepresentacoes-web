import {
  createContext, useCallback, useContext,
  useEffect, useMemo, useReducer, useRef,
} from 'react';
import { flushSync } from 'react-dom';
import { toast } from 'react-toastify';
import api, {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  getApiErrorMessage,
  setTokens,
} from '../lib/api';

// ── Actions ─────────────────────────────────────────────────
const A = {
  INIT: 'INIT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  PASSWORD_CHANGED: 'PASSWORD_CHANGED',
  UPDATE_USER: 'UPDATE_USER',
  SET_LOADING: 'SET_LOADING',
};

// ── Estado inicial ──────────────────────────────────────────
const INITIAL = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  mustChangePassword: false,
};

// ── Reducer ─────────────────────────────────────────────────
function reducer(state, { type, payload }) {
  console.log('[REDUCER]', type, payload);

  switch (type) {
    case A.INIT:
      return {
        ...state,
        user: payload.user ?? null,
        isAuthenticated: !!payload.user,
        isLoading: false,

        // 🔥 NÃO sobrescreve se vier undefined
        mustChangePassword:
          payload.mustChangePassword !== undefined
            ? payload.mustChangePassword
            : state.mustChangePassword,
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

// ── Context ─────────────────────────────────────────────────
export const AuthContext = createContext(null);

// ── Provider ────────────────────────────────────────────────
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL);
  const initialized = useRef(false);

  // ── INIT (RESTAURA SESSÃO) ───────────────────────────────
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const init = async () => {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();

      console.log('[INIT TOKENS]', { accessToken, refreshToken });

      // 🔥 SEM TOKEN → NÃO SOBRESCREVE ESTADO
      if (!accessToken && !refreshToken) {
        dispatch({ type: A.SET_LOADING, payload: false });
        return;
      }

      try {
        const { data } = await api.get('/users/profile');
        console.log('[PROFILE RESPONSE]', data);

        dispatch({
          type: A.INIT,
          payload: {
            user: data.data,
            mustChangePassword: data.data.mustChangePassword ??
              (data.data?.last_login_at === null),
          },
        });

      } catch (error) {
        console.log('[INIT ERROR] limpando sessão');

        clearTokens();

        // 🔥 IMPORTANTE: usar LOGOUT, não INIT
        dispatch({ type: A.LOGOUT });
      }
    };

    init();
  }, []);

  // ── Evento sessão expirada ───────────────────────────────
  useEffect(() => {
    const handle = () => dispatch({ type: A.LOGOUT });
    window.addEventListener('bg:session-expired', handle);
    return () => window.removeEventListener('bg:session-expired', handle);
  }, []);

  // ── LOGIN ───────────────────────────────────────────────
  const login = useCallback(async (email, password) => {
    dispatch({ type: A.SET_LOADING, payload: true });

    try {
      const { data } = await api.post('/auth/login', { email, password });

      console.log('[LOGIN RESPONSE RAW]', data);

      const payload = data.data ?? data;
      const accessToken = payload.token ?? payload.accessToken;
      const { refreshToken, user } = payload;

      console.log('[LOGIN PROCESSADO]', {
        user,
        mustChangePassword: payload.mustChangePassword,
      });

      setTokens({ accessToken, refreshToken });

      const mustChangePassword = payload.mustChangePassword === true;

      // 🔥 garante estado antes do navigate
      flushSync(() => {
        dispatch({
          type: A.LOGIN_SUCCESS,
          payload: { user, mustChangePassword },
        });
      });

      toast.success('Login efetuado com sucesso!', {
        toastId: 'login-success',
      });

      return { mustChangePassword };

    } catch (error) {
      dispatch({ type: A.SET_LOADING, payload: false });

      throw new Error(
        getApiErrorMessage(error, 'E-mail ou senha inválidos.')
      );
    }
  }, []);

  // ── CHANGE PASSWORD ─────────────────────────────────────
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
        getApiErrorMessage(error, 'Erro ao alterar a senha.')
      );
    }
  }, []);

  // ── LOGOUT ──────────────────────────────────────────────
  const logout = useCallback(() => {
    toast.success('Logout efetuado com sucesso!', {
      toastId: 'logout-success',
    });

    clearTokens();
    dispatch({ type: A.LOGOUT });

    api.post('/auth/logout').catch(() => { });
  }, []);

  // ── UPDATE USER ─────────────────────────────────────────
  const updateUser = useCallback((updates) => {
    dispatch({ type: A.UPDATE_USER, payload: updates });
  }, []);

  // ── Helpers ─────────────────────────────────────────────
  const isAdmin = state.user?.role === 'admin';
  const isUser = state.user?.role === 'user';
  const isPartner = state.user?.role === 'partner';

  const hasRole = useCallback(
    (...roles) => roles.includes(state.user?.role),
    [state.user?.role]
  );

  // ── Context value ───────────────────────────────────────
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

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>.');
  return ctx;
}

export default AuthContext;