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
				black: "#1f1f1f",
				white: "#f1f1f1",
			},
		},
		screens: {
			short: { raw: "(max-height: 800px)" },
			base: "400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
};
