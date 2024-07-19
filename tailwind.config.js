/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderColor: {
      'custom-gray': 'rgba(0, 0, 0, 0.22)',
      'dark-gray': 'rgba(115, 115, 115, 1)',
    },
    colors: {
      'black': "#000000",
      'white': "#ffffff",
      'midnight': '#121063',
      'custom-gray': 'rgba(148, 163, 184, 0.2)',
      'custom-blue': 'rgba(26, 115, 232, 1)',
      'custom-light-gray': 'rgba(238, 245, 255, 1)',
      'custom-refer-option': 'rgba(238, 245, 255, 1)',
      'custom-light-purple': 'rgba(26, 115, 232, 0.35)',
      'dark-gray': 'rgba(115, 115, 115, 1)',
    },
    extend: {
      fontSize: {
        '14.88': '14.88px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      lineHeight: {
        '24': '24px',
      }
    },
    boxShadow: {
      'custom': '0 4px 65px 1px rgba(0, 7, 43, 0.21)',
    },
  },
  plugins: [],
}

