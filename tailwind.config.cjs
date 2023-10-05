/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'white':"#F0F6FA",
				'navy_blue':"#00101b",
			},
			fontFamily: {
        lato: ['Lato', 'sans'],
      },
		},
	},
	plugins: [],
}
