/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#5BC8C0',
        'secondary-orange': '#F5A623',
        'light-blue-bg': '#EAF6F6',
        'card-bg': '#E8F4FB',
        'dark-text': '#2D3748',
        'body-text': '#718096',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        extrabold: '800',
      },
      borderRadius: {
        'pill': '50px',
        'card': '20px',
      },
    },
  },
  plugins: [],
}
