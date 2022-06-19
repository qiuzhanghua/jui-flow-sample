module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		// ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
		// cssnano: {
		// 	 "preset": [
		// 	 	"default",
		// 	 	{"discardComments": {"removeAll": true}}
		// 	 ]
		// },
		// cssnano: process.env.NODE_ENV === "production" ? { preset: "default" } : false
	}
};
