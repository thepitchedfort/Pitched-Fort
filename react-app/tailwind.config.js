/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Brand palette (pulled from the DIY Pick-Up & Drop-Off form) ──
        navy: {
          DEFAULT: '#22395B', // deep navy — structure & trust
          deep: '#1A2C46',
          soft: '#34507A',
        },
        sage: {
          DEFAULT: '#9DB29A', // sage green accent
          deep: '#7E9579',
          soft: '#C4D2BF',
        },
        blush: {
          DEFAULT: '#EBB7BE', // blush pink accent
          deep: '#D98C97',
          soft: '#F7DDE0',
        },
        cream: {
          DEFAULT: '#FBF5EB', // soft cream background
          deep: '#F3E9D8',
        },
        gold: {
          DEFAULT: '#D9B26A', // warm gold for stars / sparkle
          soft: '#ECD6A8',
        },
      },
      fontFamily: {
        // See src/index.css for the Google Fonts import
        serif: ['Fraunces', 'Georgia', 'serif'],
        script: ['Sacramento', 'cursive'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 18px 40px -24px rgba(34, 57, 91, 0.45)',
        card: '0 12px 30px -18px rgba(34, 57, 91, 0.35)',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        twinkle: 'twinkle 3.5s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
