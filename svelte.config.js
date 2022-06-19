import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
// import postcss from 'rollup-plugin-postcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		prerender: {
			default: true
		},
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			build: {
				minify: true, // boolean| "terser"|"esbuild",
				sourcemap: false,
				// https://github.com/vitejs/vite/discussions/7447
				// TO BE RESOLVED
				// rollupOptions: {
				// 	plugins: [
				// 			postcss({
				// 				extract: true,
				// 				modules: {
				// 					generateScopedName: "[hash:base64:8]",
				// 					autoModules: false,
				// 				}
				// 			})
				// 	],
				// }
			},
			
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	],
};

export default config;
