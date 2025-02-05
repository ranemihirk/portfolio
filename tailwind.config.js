/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/app/**/*.{html,ts}",],
  plugins: [require("daisyui")],
  daisyui: {
		darkTheme: 'light',
	},
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'dark-color': 'hsl(210, 3%, 7%)',
        'light-color': 'hsl(0, 0%, 98%)',
        'gray-color': 'hsl(0, 0%, 50%)'
      }
    },
  },
}
