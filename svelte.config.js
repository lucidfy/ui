import preprocess from 'svelte-preprocess'
// import adapterAuto from '@sveltejs/adapter-auto'
// import adapterNode from '@sveltejs/adapter-node'
import adapterStatic from '@sveltejs/adapter-static';

let routeFolder = process.env.ROUTE_FOLDER

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    outDir: `.svelte-kit/${routeFolder}`,

    // adapter: adapterNode({
    //   out: `.build/${routeFolder}`,
    // }),

    adapter: adapterStatic({
      pages: `.build/${routeFolder}`,
      assets: `.build/${routeFolder}`,
      fallback: null
    }),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PUT', 'PATCH', 'DELETE'],
    },

    files: {
      hooks: `src/hooks/lucid.ts`,
      routes: `src/routes/${routeFolder}`,
      template: `src/app.html`,
    },
  },
}

export default config
