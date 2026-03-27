import axios from 'axios';

// ── BASE_URL ──────────────────────────────────────────────────────────────────
const BASE_URL =
  import.meta.env.VITE_API_URL ||
  'https://bgrepresentacoes-api-production.up.railway.app/api/v1';

// ── Chaves de storage ─────────────────────────────────────────────────────────
const KEYS = {
  REFRESH_TOKEN: 'bg:refresh_token',
};

// ── 🔥 ACCESS TOKEN EM MEMÓRIA ────────────────────────────────────────────────
let memoryAccessToken = null;

// ── Helpers de token ──────────────────────────────────────────────────────────
export const getAccessToken = () => {
  return memoryAccessToken;
};

export const getRefreshToken = () => {
  try {
    return localStorage.getItem(KEYS.REFRESH_TOKEN);
  } catch (error) {
    console.warn('[SECURITY] Falha ao acessar refreshToken');
    return null;
  }
};

export const setTokens = ({ accessToken, refreshToken }) => {
  try {
    if (accessToken) {
      memoryAccessToken = accessToken; // 🔥 agora só em memória
    }

    if (refreshToken) {
      localStorage.setItem(KEYS.REFRESH_TOKEN, refreshToken);
    }
  } catch (error) {
    console.error('[SECURITY] Erro ao salvar tokens');
  }
};

export const clearTokens = () => {
  try {
    memoryAccessToken = null; // 🔥 limpa memória
    localStorage.removeItem(KEYS.REFRESH_TOKEN);
  } catch (error) {
    console.warn('[SECURITY] Erro ao limpar tokens');
  }
};

// ── Fila para requisições paralelas durante refresh ───────────────────────────
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(({ resolve, reject }) =>
    error ? reject(error) : resolve(token)
  );
  failedQueue = [];
};

// ── Interceptors ──────────────────────────────────────────────────────────────

const onRequest = (config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
};

const onResponseError = async (error) => {
  const original = error.config;

  const is401 = error.response?.status === 401;
  const notRetried = !original._retry;
  const notRefreshRoute = !original.url?.includes('/auth/refresh');

  if (is401 && notRetried && notRefreshRoute) {
    original._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then((newToken) => {
        original.headers.Authorization = `Bearer ${newToken}`;
        return axios(original);
      });
    }

    isRefreshing = true;
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      isRefreshing = false;
      clearTokens();
      window.dispatchEvent(new CustomEvent('bg:session-expired'));
      return Promise.reject(error);
    }

    try {
      const { data } = await axios.post(
        `${BASE_URL}/auth/refresh`,
        { refreshToken },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const payload = data.data ?? data;
      const newAccess = payload.token ?? payload.accessToken;
      const newRefresh = payload.refreshToken;

      if (!newAccess) throw new Error('Refresh não retornou accessToken');

      setTokens({ accessToken: newAccess, refreshToken: newRefresh });
      processQueue(null, newAccess);

      original.headers.Authorization = `Bearer ${newAccess}`;
      return axios(original);

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
};

// ── Instância padrão ──────────────────────────────────────────────────────────
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(onRequest, (e) => Promise.reject(e));
api.interceptors.response.use((r) => r, onResponseError);

// ── Instância upload ──────────────────────────────────────────────────────────
export const apiUpload = axios.create({
  baseURL: BASE_URL,
  timeout: 120_000,
  headers: {
    Accept: 'application/json',
  },
});

apiUpload.interceptors.request.use(onRequest, (e) => Promise.reject(e));
apiUpload.interceptors.response.use((r) => r, onResponseError);

// ── Helpers de erro ───────────────────────────────────────────────────────────
export const getApiErrorMessage = (
  error,
  fallback = 'Ocorreu um erro inesperado.'
) =>
  error?.response?.data?.message ??
  error?.response?.data?.error ??
  error?.message ??
  fallback;

export const getValidationErrors = (error) =>
  error?.response?.status === 422
    ? error.response.data?.errors ?? null
    : null;

export default api;