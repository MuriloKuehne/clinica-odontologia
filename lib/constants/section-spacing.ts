/**
 * Section spacing constants
 * Centralized spacing values for consistent section layouts
 */

export const SECTION_SPACING = {
  PY: 'py-20', // 5rem (80px) vertical padding
  CONTAINER_PX: {
    MOBILE: 'px-4', // 1rem (16px)
    TABLET: 'px-6', // 1.5rem (24px)
    DESKTOP: 'px-8', // 2rem (32px)
  },
  CONTAINER_PX_RESPONSIVE: 'px-4 sm:px-6 lg:px-8',
  MARGIN_BOTTOM: {
    SECTION: 'mb-16', // 4rem (64px)
    HEADING: 'mb-4', // 1rem (16px)
  },
  GAP: {
    SM: 'gap-8', // 2rem (32px)
    MD: 'gap-12', // 3rem (48px)
  },
} as const;

