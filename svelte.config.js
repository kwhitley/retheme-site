import adapter from '@sveltejs/adapter-auto'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
		sveltePreprocess(),
    mdsvex({
      extensions: ['.md']
    }),
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
