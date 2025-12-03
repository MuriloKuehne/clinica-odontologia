/**
 * Typography constants
 * Centralized typography classes for consistent text styling
 */

export const TYPOGRAPHY = {
  HEADING: {
    H1: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold font-heading',
    H2: 'text-3xl sm:text-4xl md:text-5xl font-semibold font-heading',
    H3: 'text-2xl font-medium font-heading',
    H4: 'text-lg font-medium font-heading',
  },
  BODY: {
    LARGE: 'text-xl font-body',
    BASE: 'text-lg font-body',
    SMALL: 'text-base font-body',
  },
  WEIGHT: {
    LIGHT: 'font-light',
    NORMAL: 'font-normal',
    SEMIBOLD: 'font-semibold',
  },
  COLOR: {
    PRIMARY: 'text-gray-900',
    SECONDARY: 'text-gray-700',
    TERTIARY: 'text-gray-600',
    MUTED: 'text-gray-400',
    WHITE: 'text-white',
    LIGHT: 'text-gray-100',
  },
} as const;

