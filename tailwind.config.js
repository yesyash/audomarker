/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['var(--font-montserrat)'],
		},
		extend: {
			colors: {
				primary: '#FA5C2F',
			},
		},
	},
	plugins: [],
};
