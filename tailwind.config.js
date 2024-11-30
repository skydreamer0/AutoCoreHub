/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber': {
          'dark': '#0a0b0f',
          'card': '#12141c',
          'blue': '#00f3ff',
          'purple': '#bc13fe',
        },
        'text': {
          'primary': '#ffffff',
          'secondary': '#e5e7eb',
          'muted': '#9ca3af',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff' },
          '100%': { textShadow: '0 0 20px #bc13fe, 0 0 30px #bc13fe, 0 0 40px #bc13fe' }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#e5e7eb',
            a: {
              color: '#00f3ff',
              '&:hover': {
                color: '#bc13fe',
              },
            },
            strong: {
              color: '#ffffff',
            },
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            h4: {
              color: '#ffffff',
            },
            p: {
              color: '#e5e7eb',
            },
            li: {
              color: '#e5e7eb',
            },
          },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0a0b0f 0%, #12141c 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}