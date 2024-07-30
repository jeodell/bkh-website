/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        drone: '#f1e9e5',
        design: '#dceae9',
        'design-dark': '#afc3c1',
        nature: '#e6eee5',
        portrait: '#f1f0e9',
        travel: '#dbe9f1',
        film: '#e9ecf1',
      },
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
}
export default config
