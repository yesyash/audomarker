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
					600: '#e1532a',
				},
				secondary: '#3F7F68',
				cream: '#FFF1E9',
				dark: '#0C062A',
			},
		},
	},
	plugins: [],
};
