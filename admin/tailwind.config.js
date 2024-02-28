/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./src/**/*.js'],
  theme: {
	screen: {
		'tablet': '640px',
    	'laptop': '1024px',
    	'desktop': '1280px',
	},
    extend: {},
  },
  plugins: [],
}

