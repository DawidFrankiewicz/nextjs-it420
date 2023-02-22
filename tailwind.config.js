/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			screens: {
				xs: "450px",
			},
			borderWidth: {
				1: "1px",
			},
		},
	},
	plugins: [],
};
