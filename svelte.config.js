import adapter from '@sveltejs/adapter-cloudflare'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
		preprocess(),
	],
	kit: {
		adapter: adapter(),
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
