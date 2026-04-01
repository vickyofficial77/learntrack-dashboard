/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5b1489',
        primaryDark: '#4b0f72',
        text: '#20243d',
        subtle: '#7f8799',
        line: '#ececf2',
        page: '#f5f6fa',
        soft: '#fafbfe'
      },
      boxShadow: {
        shell: '0 14px 42px rgba(30, 34, 54, 0.05)',
        card: '0 8px 24px rgba(30, 34, 54, 0.04)'
      },
      borderRadius: {
        shell: '28px',
        card: '22px'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
