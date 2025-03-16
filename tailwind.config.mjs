/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Permanent Marker"', 'cursive'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        club: {
          primary: '#1A1A1A',
          secondary: '#9A8C78',
          accent: '#C4B19B'
        }
      }
    }
  },
  plugins: []
}
