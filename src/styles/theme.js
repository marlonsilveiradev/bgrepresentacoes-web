// ============================================================
// theme.js — BG Representações
// Design System Tokens
// ============================================================
// ATENÇÃO: Este arquivo foi inferido a partir das diretrizes do projeto.
// Confirme ou ajuste os tokens conforme o seu theme.js original.
// ============================================================

const colors = {
  // ── Primary — Amber ──────────────────────────────────────
  primary: {
    50:  '#fdf3e7',
    100: '#fae0c3',
    200: '#f5c28a',
    300: '#eda04e',
    400: '#e08530',
    500: '#C4671A',   // Amber base (um tom acima do brand)
    600: '#B45A14',   // ← BRAND PRIMARY AMBER
    700: '#96480f',
    800: '#7a3a0c',
    900: '#5e2c08',
  },

  // ── Neutrals — Browns ────────────────────────────────────
  neutral: {
    50:  '#faf7f5',   // Quase branco com toque quente
    100: '#f2ece6',
    200: '#e4d9cf',
    300: '#cfc0b0',
    400: '#b5a090',
    500: '#96806e',
    600: '#7a6455',
    700: '#5e4d42',
    800: '#3d3028',   // Marrom escuro corporativo
    900: '#231b15',   // Quase preto, fundo dark
    950: '#130e0a',   // Fundo dark profundo
  },

  // ── Semantic ─────────────────────────────────────────────
  success: {
    light: '#d1fae5',
    base:  '#059669',
    dark:  '#065f46',
  },
  warning: {
    light: '#fef3c7',
    base:  '#d97706',
    dark:  '#92400e',
  },
  error: {
    light: '#fee2e2',
    base:  '#dc2626',
    dark:  '#991b1b',
  },
  info: {
    light: '#dbeafe',
    base:  '#2563eb',
    dark:  '#1e40af',
  },

  // ── Utilitários ──────────────────────────────────────────
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
};

const typography = {
  fontFamily: {
    sans:  "var(--font-sans)", 
    serif: "var(--font-serif)",
    mono:  "'JetBrains Mono', monospace",
  },
  fontSize: {
    xs:   '0.75rem',    // 12px
    sm:   '0.875rem',   // 14px
    base: '1rem',       // 16px
    lg:   '1.125rem',   // 18px
    xl:   '1.25rem',    // 20px
    '2xl':'1.5rem',     // 24px
    '3xl':'1.875rem',   // 30px
    '4xl':'2.25rem',    // 36px
  },
  fontWeight: {
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },
  lineHeight: {
    tight:  1.25,
    snug:   1.375,
    normal: 1.5,
    relaxed:1.625,
  },
};

const spacing = {
  0:   '0',
  1:   '0.25rem',   // 4px
  2:   '0.5rem',    // 8px
  3:   '0.75rem',   // 12px
  4:   '1rem',      // 16px
  5:   '1.25rem',   // 20px
  6:   '1.5rem',    // 24px
  8:   '2rem',      // 32px
  10:  '2.5rem',    // 40px
  12:  '3rem',      // 48px
  16:  '4rem',      // 64px
  20:  '5rem',      // 80px
  24:  '6rem',      // 96px
};

const borderRadius = {
  none: '0',
  sm:   '0.25rem',   // 4px
  base: '0.375rem',  // 6px
  md:   '0.5rem',    // 8px
  lg:   '0.75rem',   // 12px
  xl:   '1rem',      // 16px
  full: '9999px',
};

const shadows = {
  sm:  '0 1px 2px 0 rgba(35, 27, 21, 0.08)',
  base:'0 2px 4px 0 rgba(35, 27, 21, 0.10)',
  md:  '0 4px 12px 0 rgba(35, 27, 21, 0.12)',
  lg:  '0 8px 24px 0 rgba(35, 27, 21, 0.15)',
  xl:  '0 16px 48px 0 rgba(35, 27, 21, 0.18)',
  // Amber glow (para botões primários hover)
  amber: '0 4px 20px 0 rgba(180, 90, 20, 0.35)',
};

const transitions = {
  fast:   '150ms ease',
  base:   '200ms ease',
  slow:   '300ms ease',
  slower: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const zIndex = {
  base:    0,
  raised:  10,
  dropdown:100,
  sticky:  200,
  overlay: 300,
  modal:   400,
  toast:   500,
};

// ── Tema Styled-Components ───────────────────────────────────────────────────
// Pronto para ser usado com <ThemeProvider theme={theme}>
const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,

  // ── Aliases semânticos para uso rápido nos componentes ──
  brand: {
    primary:        colors.primary[600],   // #B45A14
    primaryHover:   colors.primary[700],   // #96480f
    primaryLight:   colors.primary[100],   // fundo suave
    primaryGhost:   colors.primary[50],    // hover ghost
  },

  surface: {
    page:     colors.neutral[50],          // Fundo da página
    card:     colors.white,                // Cards/Painéis
    sidebar:  colors.neutral[900],         // Sidebar escura
    elevated: colors.white,
    overlay:  'rgba(35, 27, 21, 0.55)',    // Backdrop modal
  },

  text: {
    primary:   colors.neutral[900],
    secondary: colors.neutral[600],
    muted:     colors.neutral[400],
    inverse:   colors.white,
    brand:     colors.primary[600],
    onDark:    colors.neutral[200],
  },

  border: {
    default: colors.neutral[200],
    strong:  colors.neutral[300],
    focus:   colors.primary[600],
    error:   colors.error.base,
  },

  // ── Feedback visual já mapeado para Toast/AlertBox ───────
  feedback: {
    success: {
      bg:     colors.success.light,
      text:   colors.success.dark,
      border: colors.success.base,
      icon:   colors.success.base,
    },
    warning: {
      bg:     colors.warning.light,
      text:   colors.warning.dark,
      border: colors.warning.base,
      icon:   colors.warning.base,
    },
    error: {
      bg:     colors.error.light,
      text:   colors.error.dark,
      border: colors.error.base,
      icon:   colors.error.base,
    },
    info: {
      bg:     colors.info.light,
      text:   colors.info.dark,
      border: colors.info.base,
      icon:   colors.info.base,
    },
  },
};

export default theme;
