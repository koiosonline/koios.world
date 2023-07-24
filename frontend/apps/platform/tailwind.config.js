/** @type {import('tailwindcss').Config} */

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

// Helper function to generate rgba colors
const withOpacity = (variableName) => ({ opacityValue }) => {
  if (opacityValue !== undefined) {
    return `rgba(var(${variableName}), ${opacityValue})`;
  }
  return `rgb(var(${variableName}))`;
};

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        center: true
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        }
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          "button-accent": withOpacity('--color-button-accent'),
          "button-accent-hover": withOpacity('--color-button-accent-hover'),
          "button-muted": withOpacity('--color-button-muted'),
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
        },
      }
    },
  },
  plugins: [],
}

