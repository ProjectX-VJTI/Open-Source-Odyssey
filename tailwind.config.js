/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite ease-in-out',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}