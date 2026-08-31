/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-grey': 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
        'gradient-grey-accent': 'linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)',
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