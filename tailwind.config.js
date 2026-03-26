/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbf0',
          100: '#fef5e7',
          200: '#fde8c8',
          300: '#fdd9a3',
          400: '#f5c56a',
          500: '#d4af37',
          600: '#c9a633',
          700: '#9e8629',
          800: '#73651f',
          900: '#574c15',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        'gradient-gold-accent': 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        slideUp: 'slideUp 0.8s ease-out forwards',
      },
      animationDelay: {
        '1000': '1s',
        '2000': '2s',
        '3000': '3s',
      },
    },
  },
  plugins: [],
}
