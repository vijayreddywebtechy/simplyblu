
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
          DEFAULT: '#0062e1',
          light: '#3889ff',
          medium: '#0241bd',
          dark: '#0033a1',
  			},
  			secondary: {
  				DEFAULT: '#1a314d',
  			},
        background: '#ffffff',
        foreground: '#171717',
  		},
      fontFamily: {
        bspro: ['var(--font-bspro)', 'system-ui', '-apple-system', 'sans-serif']
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
