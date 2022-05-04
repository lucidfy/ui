import preprocess from 'svelte-preprocess'
import { resolve } from 'path'
// import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-node'

let routeFolder = process.env.ROUTE_FOLDER
let envPort = 3000
switch (routeFolder) {
  case "guest":
    envPort = 8331
    break;
  case "docs":
    envPort = 8332
    break;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    outDir: `.svelte-kit/${routeFolder}`,
    adapter: adapter({
      out: `build/${routeFolder}`
    }),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PUT', 'PATCH', 'DELETE'],
    },

    files: {
      routes: `src/routes/${routeFolder}`,
      hooks: `src/hooks/lucid.ts`,
    },

    vite: {
      server: {
	      hmr: {
          port: envPort,
          clientPort: envPort,
        }
      },
      resolve: {
        alias: {
          $src: resolve('./src'),
          $lib: resolve('./src/lib'),
          $stores: resolve('./src/stores'),
          $assets: resolve('./src/assets'),
          $icon: resolve('./node_modules/svelte-bootstrap-icons/lib'),
        },
      },
    },
  },
}

export default config
