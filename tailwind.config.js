/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
      backgroundImage: {
        'light-gradient': 'repeating-linear-gradient(157deg, rgba(200, 200, 200, 0.2) 0px, rgba(200, 200, 200, 0.2) 1px, transparent 1px, transparent 15px, rgba(200, 200, 200, 0.2) 15px, rgba(200, 200, 200, 0.2) 16px, transparent 16px, transparent 32px),repeating-linear-gradient(112deg, rgba(200, 200, 200, 0.2) 0px, rgba(200, 200, 200, 0.2) 1px, transparent 1px, transparent 15px, rgba(200, 200, 200, 0.2) 15px, rgba(200, 200, 200, 0.2) 16px, transparent 16px, transparent 32px),repeating-linear-gradient(247deg, rgba(200, 200, 200, 0.2) 0px, rgba(200, 200, 200, 0.2) 1px, transparent 1px, transparent 15px, rgba(200, 200, 200, 0.2) 15px, rgba(200, 200, 200, 0.2) 16px, transparent 16px, transparent 32px),repeating-linear-gradient(202deg, rgba(200, 200, 200, 0.2) 0px, rgba(200, 200, 200, 0.2) 1px, transparent 1px, transparent 15px, rgba(200, 200, 200, 0.2) 15px, rgba(200, 200, 200, 0.2) 16px, transparent 16px, transparent 32px),linear-gradient(202deg, rgb(255, 255, 255), rgb(240, 240, 255));',
        'dark-gradient': 'repeating-linear-gradient(157deg, rgba(237,225,225, 0.05) 0px, rgba(237,225,225, 0.05) 1px,transparent 1px, transparent 11px,rgba(237,225,225, 0.05) 11px, rgba(237,225,225, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(112deg, rgba(237,225,225, 0.05) 0px, rgba(237,225,225, 0.05) 1px,transparent 1px, transparent 11px,rgba(237,225,225, 0.05) 11px, rgba(237,225,225, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(247deg, rgba(237,225,225, 0.05) 0px, rgba(237,225,225, 0.05) 1px,transparent 1px, transparent 11px,rgba(237,225,225, 0.05) 11px, rgba(237,225,225, 0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(202deg, rgba(237,225,225, 0.05) 0px, rgba(237,225,225, 0.05) 1px,transparent 1px, transparent 11px,rgba(237,225,225, 0.05) 11px, rgba(237,225,225, 0.05) 12px,transparent 12px, transparent 32px),linear-gradient(202deg, rgb(1, 9, 29),rgb(7, 14, 49));',
      },

    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}