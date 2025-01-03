/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'rgba(var(--background))',
				main: 'rgba(var(--main))',
				secondary: 'rgba(var(--secondary))',
				accent: 'rgba(var(--accent))',
				details: 'rgba(var(--details))',
			},
			fill: {
        'half-star': 'inset(0,50%,0,0)', // Recorta la mitad izquierda
      },
		},
	},
	plugins: [],
}
