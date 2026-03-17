import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:  '#0D1B2A',
        white: '#FFFFFF',
        gold:  '#C9A84C',
        teal:  '#1B4F6B',
        steel: '#2E6B8A',
        ice:   '#4A9BC4',
        lgray: '#F0F4F7',
        dgray: '#8FA8B5',
        'navy-deep': '#060c14',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['"Lato"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}

export default config
