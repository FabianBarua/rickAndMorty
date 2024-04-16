const {nextui} = require("@nextui-org/theme");


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			'rickBlue':'#11B0C8'
		},
		
	},
  plugins: [nextui({
	addCommonColors: true,
  })],
  darkMode: ['selector', '[data-theme="dark"]'],
}
