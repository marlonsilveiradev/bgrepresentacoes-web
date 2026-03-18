// ============================================================
// src/lib/api.js — BG Representações
// Instância Axios com interceptors de auth e refresh automático
// ============================================================
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api/v1';

// ── Chaves de storage ─────────────────────────────────────────────────────────
const KEYS = {
  ACCESS_TOKEN:  'bg:access_token',
  REFRESH_TOKEN: 'bg:refresh_token',
};

// ── Helpers de token ──────────────────────────────────────────────────────────
// Ambos no localStorage: sobrevivem à navegação e ao StrictMode do React
export const getAccessToken  = () => localStorage.getItem(KEYS.ACCESS_TOKEN);
export const getRefreshToken = () => localStorage.getItem(KEYS.REFRESH_TOKEN);

export const setTokens = ({ accessToken, refreshToken }) => {
  if (accessToken)  localStorage.setItem(KEYS.ACCESS_TOKEN,  accessToken);
  if (refreshToken) localStorage.setItem(KEYS.REFRESH_TOKEN, refreshToken);
};

export const clearTokens = () => {
  localStorage.removeItem(KEYS.ACCESS_TOKEN);
  localStorage.removeItem(KEYS.REFRESH_TOKEN);
};

// ── Instância Axios ───────────────────────────────────────────────────────────
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ── Fila para requisições paralelas que expiram ao mesmo tempo ───────────────
let isRefreshing = false;
let failedQueue  = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(({ resolve, reject }) =>
    error ? reject(error) : resolve(token)
  );
  failedQueue = [];
};

// ── Interceptor REQUEST — injeta Bearer token em toda requisição ──────────────
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// ── Interceptor RESPONSE — refresh automático em 401 ─────────────────────────
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const original = error.config;

    const is401            = error.response?.status === 401;
    const notRetried       = !original._retry;
    const notRefreshRoute  = !original.url?.includes('/auth/refresh');

    if (is401 && notRetried && notRefreshRoute) {
      original._retry = true;

      // Já está refrescando: enfileira e aguarda
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((newToken) => {
          original.headers.Authorization = `Bearer ${newToken}`;
          return api(original);
        });
      }

      isRefreshing = true;
      const refreshToken = getRefreshToken();

      // Sem refreshToken salvo: sessão perdida
      if (!refreshToken) {
        isRefreshing = false;
        clearTokens();
        window.dispatchEvent(new CustomEvent('bg:session-expired'));
        return Promise.reject(error);
      }

      try {
        // Chama o endpoint de refresh diretamente (sem o interceptor)
        const { data } = await axios.post(
          `${BASE_URL}/auth/refresh`,
          { refreshToken },
          { headers: { 'Content-Type': 'application/json' } },
        );

        // O backend retorna { status, data: { token, refreshToken } }
        // "token" é o accessToken nesta API
        const payload       = data.data ?? data;
        const newAccess     = payload.token ?? payload.accessToken;
        const newRefresh    = payload.refreshToken;

        if (!newAccess) throw new Error('Refresh não retornou accessToken');

        setTokens({ accessToken: newAccess, refreshToken: newRefresh });
        processQueue(null, newAccess);

        original.headers.Authorization = `Bearer ${newAccess}`;
        return api(original);

      } catch (refreshError) {
        processQueue(refreshError, null);
        clearTokens();
        window.dispatchEvent(new CustomEvent('bg:session-expired'));
        return Promise.reject(refreshError);

      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

// ── Helpers de erro ───────────────────────────────────────────────────────────
export const getApiErrorMessage = (
  error,
  fallback = 'Ocorreu um erro inesperado.',
) =>
  error?.response?.data?.message ??
  error?.response?.data?.error   ??
  error?.message                 ??
  fallback;

export const getValidationErrors = (error) =>
  error?.response?.status === 422
    ? (error.response.data?.errors ?? null)
    : null;

export default api;