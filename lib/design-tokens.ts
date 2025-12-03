/**
 * Design Tokens System
 * Centralized design system tokens for consistent styling across the application
 */

// Color Palette
export const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  straw: {
    50: '#FDFBF8',
    100: '#F5F1E8',
    200: '#E8E0D3',
    300: '#D4C4B0',
    400: '#B8A68F',
    500: '#9C8A6E',
    600: '#7A6B56',
    700: '#6B5F4F',
    800: '#3F372E',
    900: '#211E1A',
  },
  semantic: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
  rating: {
    active: '#fbbf24', // yellow-400
    inactive: '#d1d5db', // gray-300
  },
  background: {
    white: '#ffffff',
    light: '#f9fafb', // gray-50
    dark: '#111827', // gray-900
  },
  text: {
    primary: '#111827', // gray-900
    secondary: '#374151', // gray-700
    tertiary: '#4b5563', // gray-600
    muted: '#9ca3af', // gray-400
    white: '#ffffff',
    light: '#f3f4f6', // gray-100
  },
  overlay: {
    dark: 'rgba(0, 0, 0, 0.4)',
    light: 'rgba(255, 255, 255, 0.1)',
    lighter: 'rgba(255, 255, 255, 0.2)',
    header: 'rgba(255, 255, 255, 0.95)',
  },
} as const;

// Spacing Scale
export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '2.5rem', // 40px
  '3xl': '3rem', // 48px
  '4xl': '4rem', // 64px
  '5xl': '5rem', // 80px
  '6xl': '6rem', // 96px
  // Section spacing
  section: {
    py: '5rem', // py-20 (80px)
    container: {
      px: {
        mobile: '1rem', // px-4 (16px)
        tablet: '1.5rem', // px-6 (24px)
        desktop: '2rem', // px-8 (32px)
      },
    },
  },
  // Component spacing
  component: {
    gap: {
      sm: '2rem', // gap-8 (32px)
      md: '3rem', // gap-12 (48px)
    },
    margin: {
      section: '4rem', // mb-16 (64px)
      heading: '1rem', // mb-4 (16px)
      divider: '1rem', // mt-4 (16px)
    },
  },
} as const;

// Typography
export const typography = {
  fontFamily: {
    heading: ['var(--font-poppins)', 'sans-serif'],
    body: ['var(--font-open-sans)', 'sans-serif'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }], // text-xs
    sm: ['0.875rem', { lineHeight: '1.25rem' }], // text-sm
    base: ['1rem', { lineHeight: '1.5rem' }], // text-base
    lg: ['1.125rem', { lineHeight: '1.75rem' }], // text-lg
    xl: ['1.25rem', { lineHeight: '1.75rem' }], // text-xl
    '2xl': ['1.5rem', { lineHeight: '2rem' }], // text-2xl
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // text-3xl
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // text-4xl
    '5xl': ['3rem', { lineHeight: '1' }], // text-5xl
    '6xl': ['3.75rem', { lineHeight: '1' }], // text-6xl
    '7xl': ['4.5rem', { lineHeight: '1' }], // text-7xl
    '8xl': ['6rem', { lineHeight: '1' }], // text-8xl
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

// Border Radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const;

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
} as const;

// Transitions
export const transitions = {
  duration: {
    fast: '200ms',
    base: '300ms',
    slow: '500ms',
    slower: '1000ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Breakpoints (matching Tailwind defaults)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-index Scale
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// Component-specific tokens
export const components = {
  button: {
    padding: {
      sm: '0.5rem 1rem', // px-4 py-2
      md: '0.75rem 1.5rem', // px-6 py-3
      lg: '1rem 2rem', // px-8 py-4
    },
    borderRadius: borderRadius.lg,
    fontWeight: typography.fontWeight.semibold,
  },
  card: {
    borderRadius: borderRadius.xl,
    padding: spacing.lg, // p-6
    shadow: shadows.lg,
    shadowHover: shadows.xl,
  },
  input: {
    padding: '0.75rem 1rem', // px-4 py-3
    borderRadius: borderRadius.lg,
    borderWidth: '1px',
    focusRing: '2px',
  },
  link: {
    underlineHeight: '2px',
    transitionDuration: transitions.duration.base,
  },
  section: {
    divider: {
      width: '6rem', // w-24
      height: '0.25rem', // h-1
    },
  },
} as const;

// Heights
export const heights = {
  header: '5rem', // h-20 (80px)
  hero: '100vh', // h-screen
  cardImage: {
    sm: '12rem', // h-48 (192px)
    md: '20rem', // h-80 (320px)
    lg: '24rem', // h-96 (384px)
  },
} as const;

// Widths
export const widths = {
  container: {
    max: '72rem', // max-w-6xl
    content: '42rem', // max-w-2xl
    card: '28rem', // max-w-4xl
  },
  divider: '6rem', // w-24
  icon: {
    sm: '1rem', // w-4 h-4
    md: '1.5rem', // w-6 h-6
    lg: '2rem', // w-8 h-8
  },
} as const;

// Export all tokens as a single object for easy access
export const designTokens = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  transitions,
  breakpoints,
  zIndex,
  components,
  heights,
  widths,
} as const;

// Type exports for TypeScript
export type ColorToken = typeof colors;
export type SpacingToken = typeof spacing;
export type TypographyToken = typeof typography;
export type DesignTokens = typeof designTokens;

