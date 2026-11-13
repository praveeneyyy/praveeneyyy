/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B10',
        secondaryBg: '#0D1117',
        surface: '#111827',
        borderSubtle: '#202938',
        cyanAccent: '#67E8F9',
        indigoAccent: '#818CF8',
        violetAccent: '#A78BFA',
        textPrimary: '#F5F7FA',
        textSecondary: '#9CA3AF',
        textMuted: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

