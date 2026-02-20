/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft Dreams Palette 🌸
        cream: '#FCFDF7',
        lavender: {
          50: '#FAF8FF',
          100: '#F3EFFF',
          200: '#E0D7FF',
          300: '#D0C4FF',
          400: '#BFB0FF',
          500: '#AE9CFF',
        },
        peach: {
          50: '#FFF5F2',
          100: '#FFEBE5',
          200: '#FFDACE',
          300: '#FFC9B7',
          400: '#FFB8A0',
          500: '#FFA789',
        },
        mint: {
          50: '#F5FFFD',
          100: '#E8FFF9',
          200: '#D1F5E9',
          300: '#B9EBD9',
          400: '#A1E1C9',
          500: '#89D7B9',
        },
        rose: {
          50: '#FFF8FA',
          100: '#FFEFF4',
          200: '#FFC2D1',
          300: '#FFB0C4',
          400: '#FF9EB7',
          500: '#FF8CAA',
        },
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        fredoka: ['Fredoka', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'marshmallow': '0 8px 32px rgba(224, 215, 255, 0.2), 0 2px 8px rgba(224, 215, 255, 0.15)',
        'marshmallow-hover': '0 12px 40px rgba(224, 215, 255, 0.3), 0 4px 12px rgba(224, 215, 255, 0.2)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(224, 215, 255, 0.4)',
      },
      backdropBlur: {
        'kawaii': '16px',
      },
      animation: {
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'pop': 'pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'shake': 'shake 0.4s cubic-bezier(.36,.07,.19,.97)',
      },
      keyframes: {
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-2px, 0, 0) rotate(-3deg)' },
          '20%, 80%': { transform: 'translate3d(3px, 0, 0) rotate(3deg)' },
          '30%, 50%, 70%': { transform: 'translate3d(-5px, 0, 0) rotate(-5deg)' },
          '40%, 60%': { transform: 'translate3d(5px, 0, 0) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
