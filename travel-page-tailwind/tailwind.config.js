/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.html",
	"./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
		extend: {
			backgroundImage: {
				'sanFrancisco': "url('../src/img/sanFrancisco.jpg')",
				'sanFranciscoDesktop': "url('../src/img/sanFranciscoDesktop.jpg')",
				'yosemite': "url('../src/img/yosemite.jpg')",
				'LA': "url('../src/img/LA.jpg')",
				'seattle': "url('../src/img/seattle.jpg')",
				'new_york': "url('../src/img/new_york.jpg')",
				'norway': "url('../src/img/norway.jpg')",
				'sydney': "url('../src/img/sydney.jpg')",
				'miami': "url('../src/img/miami.jpg')",
				'switzerland': "url('../src/img/switzerland.jpg')",
				'bali': "url('../src/img/bali.jpg')",
				'chicago': "url('../src/img/chicago.jpg')",
				'europe': "url('../src/img/europe.jpg')",
				'iceland': "url('../src/img/iceland.jpg')",
			},
			backgroundColor: theme =>({
				...theme('colors'),
				'primary': '#2f2235',
				'secondary': '#3f3244',
				'tertiary': '#60495a',
				'tabbar': '#7f9183',
			}),
			textColor:{
				'primary': '#2f2235',
				'secondary': '#3f3244',
				'tertiary': '#60495a',
			},
			fontFamily: {
				Montserrat: ["Montserrat", "sans-serif"],
			 },
		},
	},
  plugins: [
	require("@tailwindcss/forms"),
	require("@tailwindcss/typography"),
	require("@tailwindcss/aspect-ratio"),
  ],
}