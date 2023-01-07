/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    relative: true,
    files: [
      './src/**/*.{js,jsx,ts,tsx,mdx}',
      './plugins/**/*.{js,jsx,ts,tsx,mdx}',
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--color-primary), calc(36% + 50%))',
          100: 'hsl(var(--color-primary), calc(36% + 20%))',
          200: 'hsl(var(--color-primary), calc(36% + 15%))',
          300: 'hsl(var(--color-primary), calc(36% + 10%))',
          400: 'hsl(var(--color-primary), calc(36% + 5%))',
          500: 'hsl(var(--color-primary), 36%)',
          600: 'hsl(var(--color-primary), calc(36% - 5%))',
          700: 'hsl(var(--color-primary), calc(36% - 10%))',
          800: 'hsl(var(--color-primary), calc(36% - 15%))',
          900: 'hsl(var(--color-primary), calc(36% - 20%))',
        },
        secondary: {
          100: 'hsl(var(--color-secondary), calc(34% + 20%))',
          200: 'hsl(var(--color-secondary), calc(34% + 15%))',
          300: 'hsl(var(--color-secondary), calc(34% + 10%))',
          400: 'hsl(var(--color-secondary), calc(34% + 5%))',
          500: 'hsl(var(--color-secondary), 34%)',
          600: 'hsl(var(--color-secondary), calc(34% - 5%))',
          700: 'hsl(var(--color-secondary), calc(34% - 10%))',
          800: 'hsl(var(--color-secondary), calc(34% - 15%))',
          900: 'hsl(var(--color-secondary), calc(34% - 20%))',
        },
        'base-0': '#292929',
        accent: '#37CDBE',
        neutral: '#3D4451',
        'base-100': '#FFFFFF',
        info: '#3ABFF8',
        success: '#36D399',
        warning: '#FBBD23',
        error: '#F87272',
        xiketic: '#171219',
      },
      fontFamily: {
        body: [
          'RedHatDisplay',
          'Arial',
          'Helvetica',
          'Liberation Sans',
          'FreeSans',
          'sans-serif',
        ],
      },
      fontSize: {
        sm: ['var(--fs-sm)', { lineHeight: '1.5rem' }],
        base: ['var(--fs-base)', { lineHeight: '1.688rem' }],
        lg: ['var(--fs-lg)', { lineHeight: '2rem' }],
        xl: ['var(--fs-xl)', { lineHeight: '2.313rem' }],
        '2xl': ['var(--fs-2xl)', { lineHeight: '2.75rem' }],
        '3xl': ['var(--fs-3xl)', { lineHeight: '3.25rem' }],
        '4xl': ['var(--fs-4xl)', { lineHeight: '3.813rem' }],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  purge: {
    enabled: true,
    content: [
      './src/**/*.{js,jsx,ts,tsx,mdx}',
      './plugins/**/*.{js,jsx,ts,tsx,mdx}',
    ],
  },
}
