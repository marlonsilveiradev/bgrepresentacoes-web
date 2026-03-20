// // ============================================================
// // src/lib/api.js — BG Representações
// // Instância Axios com interceptors de auth e refresh automático
// // ============================================================
// import axios from 'axios';

// // ── BASE_URL ──────────────────────────────────────────────────────────────────
// // VITE_API_URL deve estar no .env (desenvolvimento) e nas variáveis do
// // ambiente de build (GitHub Pages / Vercel / etc).
// // Nunca usar localhost como fallback em produção — se a variável não existir,
// // lança um aviso claro no console para facilitar o debug.
// const BASE_URL = import.meta.env.VITE_API_URL ?? (() => {
//   console.warn(
//     '[api.js] VITE_API_URL não definida. ' +
//     'Certifique-se de que o arquivo .env existe e foi carregado corretamente.'
//   );
//   return 'http://localhost:3000/api/v1';
// })();

// // ── Chaves de storage ─────────────────────────────────────────────────────────
// const KEYS = {
//   ACCESS_TOKEN:  'bg:access_token',
//   REFRESH_TOKEN: 'bg:refresh_token',
// };

// // ── Helpers de token ──────────────────────────────────────────────────────────
// export const getAccessToken  = () => localStorage.getItem(KEYS.ACCESS_TOKEN);
// export const getRefreshToken = () => localStorage.getItem(KEYS.REFRESH_TOKEN);

// export const setTokens = ({ accessToken, refreshToken }) => {
//   if (accessToken)  localStorage.setItem(KEYS.ACCESS_TOKEN,  accessToken);
//   if (refreshToken) localStorage.setItem(KEYS.REFRESH_TOKEN, refreshToken);
// };

// export const clearTokens = () => {
//   localStorage.removeItem(KEYS.ACCESS_TOKEN);
//   localStorage.removeItem(KEYS.REFRESH_TOKEN);
// };

// // ── Instância Axios ───────────────────────────────────────────────────────────
// // IMPORTANTE: withCredentials está ausente intencionalmente (padrão: false).
// // O token JWT vai no header Authorization — não em cookies.
// // Usar withCredentials: true com CORS causaria o erro:
// //   "Cannot use wildcard in Access-Control-Allow-Origin when credentials flag is true"
// const api = axios.create({
//   baseURL: BASE_URL,
//   timeout: 15_000,
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//   // withCredentials: false  ← padrão, não precisa declarar
// });

// // ── Fila para requisições paralelas durante refresh ───────────────────────────
// let isRefreshing = false;
// let failedQueue  = [];

// const processQueue = (error, token = null) => {
//   failedQueue.forEach(({ resolve, reject }) =>
//     error ? reject(error) : resolve(token)
//   );
//   failedQueue = [];
// };

// // ── Interceptor REQUEST — injeta Bearer token ─────────────────────────────────
// api.interceptors.request.use(
//   (config) => {
//     const token = getAccessToken();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// // ── Interceptor RESPONSE — refresh automático em 401 ─────────────────────────
// api.interceptors.response.use(
//   (response) => response,

//   async (error) => {
//     const original = error.config;

//     const is401           = error.response?.status === 401;
//     const notRetried      = !original._retry;
//     const notRefreshRoute = !original.url?.includes('/auth/refresh');

//     if (is401 && notRetried && notRefreshRoute) {
//       original._retry = true;

//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         }).then((newToken) => {
//           original.headers.Authorization = `Bearer ${newToken}`;
//           return api(original);
//         });
//       }

//       isRefreshing = true;
//       const refreshToken = getRefreshToken();

//       if (!refreshToken) {
//         isRefreshing = false;
//         clearTokens();
//         window.dispatchEvent(new CustomEvent('bg:session-expired'));
//         return Promise.reject(error);
//       }

//       try {
//         const { data } = await axios.post(
//           `${BASE_URL}/auth/refresh`,
//           { refreshToken },
//           { headers: { 'Content-Type': 'application/json' } },
//         );

//         const payload    = data.data ?? data;
//         const newAccess  = payload.token ?? payload.accessToken;
//         const newRefresh = payload.refreshToken;

//         if (!newAccess) throw new Error('Refresh não retornou accessToken');

//         setTokens({ accessToken: newAccess, refreshToken: newRefresh });
//         processQueue(null, newAccess);

//         original.headers.Authorization = `Bearer ${newAccess}`;
//         return api(original);

//       } catch (refreshError) {
//         processQueue(refreshError, null);
//         clearTokens();
//         window.dispatchEvent(new CustomEvent('bg:session-expired'));
//         return Promise.reject(refreshError);

//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   },
// );

// // ── Helpers de erro ───────────────────────────────────────────────────────────
// export const getApiErrorMessage = (
//   error,
//   fallback = 'Ocorreu um erro inesperado.',
// ) =>
//   error?.response?.data?.message ??
//   error?.response?.data?.error   ??
//   error?.message                 ??
//   fallback;

// export const getValidationErrors = (error) =>
//   error?.response?.status === 422
//     ? (error.response.data?.errors ?? null)
//     : null;

// export default api;

// ============================================================
// src/lib/api.js — BG Representações
// Instância Axios com interceptors de auth e refresh automático
//
// Exporta duas instâncias:
//   api       → timeout 15s  — requisições normais (GET, PATCH, etc.)
//   apiUpload → timeout 120s — uploads de arquivos pesados (onboarding)
// ============================================================
import axios from 'axios';

// ── BASE_URL ──────────────────────────────────────────────────────────────────
const BASE_URL = import.meta.env.VITE_API_URL ?? (() => {
  console.warn(
    '[api.js] VITE_API_URL não definida. ' +
    'Certifique-se de que o arquivo .env existe e foi carregado corretamente.'
  );
  return 'http://localhost:3000/api/v1';
})();

// ── Chaves de storage ─────────────────────────────────────────────────────────
const KEYS = {
  ACCESS_TOKEN:  'bg:access_token',
  REFRESH_TOKEN: 'bg:refresh_token',
};

// ── Helpers de token ──────────────────────────────────────────────────────────
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

// ── Fila para requisições paralelas durante refresh ───────────────────────────
let isRefreshing = false;
let failedQueue  = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(({ resolve, reject }) =>
    error ? reject(error) : resolve(token)
  );
  failedQueue = [];
};

// ── Interceptors reutilizados nas duas instâncias ─────────────────────────────

const onRequest = (config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
};

const onResponseError = async (error) => {
  const original = error.config;

  const is401           = error.response?.status === 401;
  const notRetried      = !original._retry;
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
        { headers: { 'Content-Type': 'application/json' } },
      );

      const payload    = data.data ?? data;
      const newAccess  = payload.token ?? payload.accessToken;
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

// ── Instância padrão — requisições normais (timeout 15s) ─────────────────────
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
    Accept:         'application/json',
  },
});

api.interceptors.request.use(onRequest, (e) => Promise.reject(e));
api.interceptors.response.use((r) => r, onResponseError);

// ── Instância de upload — arquivos pesados (timeout 120s) ────────────────────
// Usada exclusivamente para POST /onboarding e PATCH /clients/:id com arquivos.
// Timeout maior evita cancelamento prematuro em conexões móveis lentas.
// Suporta onUploadProgress para exibir barra de progresso.
// Content-Type não definido — Axios detecta o boundary do multipart automaticamente.
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