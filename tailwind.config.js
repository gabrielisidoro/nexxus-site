/** @type {import('tailwindcss').Config} */

// ============================================================================
//  CORES DA MARCA NEXXUS  —  edite aqui para mudar a identidade do site inteiro
// ----------------------------------------------------------------------------
//  brand  -> azul Nexxus  (#175eff é o 500 / cor principal usada em CTAs)
//  ink    -> cinza escuro Nexxus (#414042 é o 700 / textos e fundo do footer)
// ============================================================================
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef3ff',
          100: '#d9e4ff',
          200: '#b8ccff',
          300: '#8aa9ff',
          400: '#5278ff',
          500: '#175eff', // ← cor principal da marca
          600: '#0b4ae6',
          700: '#0a3ab4',
          800: '#0e3290',
          900: '#112d75',
          950: '#0b1c47',
        },
        ink: {
          50: '#f6f6f7',
          100: '#e7e7e8',
          200: '#d0d0d2',
          300: '#b0b0b3',
          400: '#828287',
          500: '#5f5f63',
          600: '#4d4d50',
          700: '#414042', // ← cinza escuro da marca
          800: '#343436',
          900: '#252527',
          950: '#171718',
        },
      },
      fontFamily: {
        // Fonte de títulos — aproximação geométrica da "Nexa" (troque por Nexa quando tiver a licença)
        display: ['Poppins', 'system-ui', 'sans-serif'],
        // Fonte de corpo — leitura confortável
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20, 40, 90, 0.12)',
        card: '0 4px 24px -8px rgba(20, 40, 90, 0.10)',
        glow: '0 0 0 1px rgba(23,94,255,0.10), 0 18px 50px -16px rgba(23,94,255,0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.15)', opacity: '0' },
          '100%': { transform: 'scale(1.15)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 28s linear infinite',
      },
      backgroundImage: {
        'grid-ink':
          'linear-gradient(to right, rgba(65,64,66,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(65,64,66,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
