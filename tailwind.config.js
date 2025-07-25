module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C1C',    // Almost black
        secondary: '#2C2C2C',  // Dark grey
        accent: {
          green: '#BDFF33',    // Updated OKX lime green
          hover: '#9FEE35',    // Slightly darker for hover
        },
        surface: '#FFFFFF',    // White
        muted: '#F3F4F6',     // Light grey
        text: {
          primary: '#1C1C1C',
          secondary: '#4B5563',
        }
      },
      animation: {
        'card-flip': 'flip 0.6s ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-in',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          'from': { 'box-shadow': '0 0 10px #00F58E' },
          'to': { 'box-shadow': '0 0 20px #00F58E' }
        }
      },
      fontFamily: {
        title: ['var(--font-chakra-petch)', 'sans-serif'],
        // Default system fonts for body text
      },
      letterSpacing: {
        tighter: '-0.05em',
      }
    },
  },
  plugins: [],
}
