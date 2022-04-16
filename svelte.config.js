import adapter from '@sveltejs/adapter-auto'
import sveltePreprocess from 'svelte-preprocess'
import path from 'path'

const config = {
  extensions: ['.svelte'],
  preprocess: [
		sveltePreprocess(),
	],
	kit: {
		adapter: adapter(),
    // browser: {
    //   hydrate: false,
    //   router: false,
    // },
    vite: {
      resolve: {
        alias: {
          '~': path.resolve('./src')
        }
      }
    }
	},
}

export default config
