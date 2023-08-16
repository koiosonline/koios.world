/** @type {import('tailwindcss').Config} */

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

// Helper function to generate rgba colors
const withOpacity =
  (variableName) =>
  ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true
    },
    extend: {
      container: {
        padding: '1rem',
        center: true
      },
      fontFamily: {
        headings: ['var(--font-inter)'],
        base: ['var(--font-inter)']
      },
      textColor: {
        base: withOpacity('--color-text-base'),
        muted: withOpacity('--color-text-muted'),
        inverted: withOpacity('--color-text-inverted'),
        "neutral-50": withOpacity('--color-text-neutral-50'),
        "neutral-950": withOpacity('--color-text-neutral-950'),
        "link-primary": withOpacity('--color-link-primary'),
        "link-primary-hover": withOpacity('--color-link-primary-hover'),
        "link-primary-active": withOpacity('--color-link-primary-active'),
      },
      backgroundColor: {
        fill: withOpacity('--color-fill'),
        base: withOpacity('--color-background-base'),
        'contrast-950': withOpacity('--color-background-contrast-950'),
        'contrast-900': withOpacity('--color-background-contrast-900'),
        'button-primary': withOpacity('--color-button-primary'),
        'button-primary-hover': withOpacity('--color-button-primary-hover'),
      },
      colors: {
        primary: {
          light: '#704DD3',
          DEFAULT: '#1C0F56',
          dark: '#240046'
        },
        secondary: {
          light: '#E6C2CF',
          DEFAULT: '#EF7BA5',
          dark: '#F13E7F'
        },
        "neutral-50": withOpacity(' --color-neutral-50'),
        "neutral-950": withOpacity(' --color-neutral-950'),
        "error-50": withOpacity(' --color-semantic-error-50'),
        "error-100": withOpacity(' --color-semantic-error-100'),
        "error-150": withOpacity(' --color-semantic-error-150'),
        "success-50": withOpacity(' --color-semantic-success-50'),
        "success-100": withOpacity(' --color-semantic-success-100'),
        "success-150": withOpacity(' --color-semantic-success-150'),
        "warning-50": withOpacity(' --color-semantic-warning-50'),
        "warning-100": withOpacity(' --color-semantic-warning-100'),
        "warning-150": withOpacity(' --color-semantic-warning-150'),
        "info-50": withOpacity(' --color-semantic-info-50'),
        "info-100": withOpacity(' --color-semantic-info-100'),
        "info-150": withOpacity(' --color-semantic-info-150'),

      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
      },

      gridTemplateColumns: (theme) => {
        const spacing = theme('spacing');

        return Object.keys(spacing).reduce((accumulator, spacingKey) => {
          return {
            ...accumulator,
            [`fit-${spacingKey}`]: `repeat(auto-fit, minmax(${spacing[spacingKey]}, 1fr))`
          };
        }, {});
      }
    }
  },
  plugins: []
};
