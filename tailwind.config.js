/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['var(--font-montserrat)'],
		},
		extend: {
			colors: {
				primary: {
					500: '#FA5C2F',
					600: '#c84a26',
				},
				secondary: {
					500: '#3F7F68',
					600: '#326653',
				},
				cream: '#FFF1E9',
				dark: '#0C062A',
			},
		},
	},
	plugins: [],
};
