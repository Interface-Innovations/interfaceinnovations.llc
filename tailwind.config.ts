import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7ff', 100: '#e6efff', 200: '#c7dbff', 300: '#9abaff',
          400: '#6a95ff', 500: '#446dff', 600: '#2c4ff2', 700: '#213ec3',
          800: '#1d359d', 900: '#1c2f80'
        }
      }
    }
  },
  plugins: []
} satisfies Config

