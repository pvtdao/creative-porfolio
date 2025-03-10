/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.1, -0.6, 0.2, 0);'
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			fontFamily: {
				republica: ['var(--font-republica-minor)', 'serif'],
				iskry: ['var(--font-iskry)', 'serif'],
				'cosi-times': ['var(--font-cosi-times)', 'serif'],
				'mj-brave-paridos': ['var(--font-mj-brave-paridos)', 'serif'],
				amerigraf: ['var(--font-amerigraf)', 'serif'],
				gilmore: ['var(--font-gilmore)', 'serif'],
				avgard: ['var(--font-avgard)', 'serif'],
				'essendine-caps': ['var(--font-essendine-caps)', 'serif']
			}
		}
	},
	plugins: []
}
