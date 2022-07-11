import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path'

let routeFolder = process.env.ROUTE_FOLDER
let envPort = process.env.ROUTE_PORT

if (!envPort) {
  switch (routeFolder) {
    case 'guest':
      envPort = 8331
      break
    case 'docs':
      envPort = 8332
      break
  }
}

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ["highlight.js", "highlight.js/lib/core"],
	},
	server: {
		fs: {
			strict: (process.env.NODE_ENV === 'production') ? true : false,
		},
		hmr: {
			port: envPort,
			clientPort: envPort,
			protocol: 'ws',
		},
	},
	resolve: {
		alias: {
			$src: resolve('./src'),
		},
	},
};

export default config;
