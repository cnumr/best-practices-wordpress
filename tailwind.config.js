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
        title: ['Impact', 'Arial Black', 'sans-serif'],
        body: ['Trebuchet MS', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
