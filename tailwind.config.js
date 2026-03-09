/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          500: '#667eea',
          600: '#5568d3',
          700: '#4c63c4',
        },
        secondary: {
          500: '#764ba2',
          600: '#6d4399',
          700: '#5f3a8a',
        },
        accent: '#e74c3c',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-light': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      },
    },
  },
  plugins: [],
}
