/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Golden Knights-inspired palette
          gold: '#B4975A',        // GK antique gold
          'gold-light': '#D4AF6A', // lighter gold for hover
          'gold-dim': '#8A7040',   // dimmer gold for subtle accents
          silver: '#A2AAAD',       // GK silver
          navy: '#182B49',         // deep navy
          black: '#080C14',        // near-black background
          // Beach Boys accent colors
          blue: '#00C4E0',
          pink: '#FF4D8D',
          yellow: '#FACC15',
          // Surfaces
          bg: '#08101C',
          'bg-card': '#0D1828',
          'bg-card-hover': '#111E35',
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 196, 224, 0.2)',
        'glow-lg': '0 0 40px rgba(0, 196, 224, 0.25)',
        'glow-gold': '0 0 20px rgba(180, 151, 90, 0.3)',
        'glow-gold-lg': '0 0 40px rgba(180, 151, 90, 0.35)',
        'glow-gold-sm': '0 0 12px rgba(180, 151, 90, 0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B4975A 0%, #D4AF6A 50%, #B4975A 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(180,151,90,0.15) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
