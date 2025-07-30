const colors = require("./tailwind.colors.js");

module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}", // for layout.tsx, page.tsx, components inside /app
		"./src/components/**/*.{js,ts,jsx,tsx}", // for any shared UI components
	],
	theme: {
		extend: {
			colors,
		},
		screens: {
			short: { raw: "(max-width: 480px) and (max-height: 800px)" },
			base: "400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [
		function ({ addBase }) {
			const cssVars = Object.entries(colors).reduce((acc, [key, val]) => {
				acc[`--${key}`] = val;
				return acc;
			}, {});
			addBase({
				":root": cssVars,
			});
		},
	],
};
