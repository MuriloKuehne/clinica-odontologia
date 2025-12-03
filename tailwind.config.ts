import type { Config } from 'tailwindcss';
import { designTokens } from './lib/design-tokens';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: designTokens.colors.primary,
        gray: designTokens.colors.gray,
        straw: designTokens.colors.straw,
        semantic: designTokens.colors.semantic,
        rating: designTokens.colors.rating,
        background: designTokens.colors.background,
        text: designTokens.colors.text,
        overlay: designTokens.colors.overlay,
      },
      spacing: {
        ...designTokens.spacing,
      },
      fontSize: designTokens.typography.fontSize,
      fontWeight: designTokens.typography.fontWeight,
      lineHeight: designTokens.typography.lineHeight,
      borderRadius: designTokens.borderRadius,
      boxShadow: designTokens.shadows,
      transitionDuration: designTokens.transitions.duration,
      transitionTimingFunction: designTokens.transitions.easing,
      zIndex: designTokens.zIndex,
      height: {
        header: designTokens.heights.header,
        'card-image-sm': designTokens.heights.cardImage.sm,
        'card-image-md': designTokens.heights.cardImage.md,
        'card-image-lg': designTokens.heights.cardImage.lg,
      },
      maxWidth: {
        container: designTokens.widths.container.max,
        content: designTokens.widths.container.content,
        card: designTokens.widths.container.card,
      },
    },
  },
  plugins: [],
};
export default config;

