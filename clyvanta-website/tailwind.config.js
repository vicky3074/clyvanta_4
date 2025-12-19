/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'clyvanta-blue-dark': '#1E40AF',
        'clyvanta-blue-cyan': '#06B6D4',
        'clyvanta-orange': '#F97316',
      },
    },
  },
  plugins: [],
}

