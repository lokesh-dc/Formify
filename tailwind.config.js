module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}", // for layout.tsx, page.tsx, components inside /app
		"./src/components/**/*.{js,ts,jsx,tsx}", // for any shared UI components
	],
	theme: {
		extend: {
			colors: {
				primary: "#3e443c",
				"primary-alpha": "#4f564d30",
				secondary: "#b4b6af",
				black: "#1f1f1f", // override if needed
			},
		},
	},
	plugins: [],
};
