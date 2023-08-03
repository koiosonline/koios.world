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
        headings: ['var(--font-righteous)'],
        base: ['var(--font-inter)'],
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted')
        }
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          base: withOpacity('--color-background-base'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted')
        }
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
        error: {
          light: '#e57373',
          DEFAULT: '#f44336',
          dark: '#d32f2f'
        },
        warning: {
          light: '#ffb74d',
          DEFAULT: '#ffa726',
          dark: '#f57c00'
        },
        info: {
          light: '#4fc3f7',
          DEFAULT: '#29b6f6',
          dark: '#0288d1'
        },
        success: {
          light: '#81c784',
          DEFAULT: '#66bb6a',
          dark: '#388e3c'
        }
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
