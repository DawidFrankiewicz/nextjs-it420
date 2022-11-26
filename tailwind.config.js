/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {},
	},
	plugins: [],
};
