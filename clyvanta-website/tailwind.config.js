/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Blue-600
          dark: '#1D4ED8',    // Blue-700 (hover)
          light: '#3B82F6',   // Blue-500
        },
        secondary: {
          DEFAULT: '#F97316', // Orange-500
          dark: '#EA580C',    // Orange-600 (hover)
          light: '#FB923C',   // Orange-400
        },
        neutral: {
          950: '#020617',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          400: '#94A3B8',
          200: '#E2E8F0',
          100: '#F1F5F9',
        },
        semantic: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
        // Legacy color aliases for backwards compatibility
        'clyvanta-blue-dark': '#1E40AF',
        'clyvanta-blue-cyan': '#06B6D4',
        'clyvanta-orange': '#F97316',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

