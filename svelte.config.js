import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // Path to your wrangler config (if not wrangler.toml/json)
      config: undefined,

      // Controls emulated `platform.env` bindings locally
      platformProxy: {
        configPath: undefined,
        environment: undefined,
        persist: undefined
      },

      // Fallback for non-matching assets:
      //  • 'plaintext': serve a simple 404.html
      //  • 'spa': render your index.html SPA shell
      fallback: 'plaintext',

      // Only for Cloudflare Pages: fine-tune which routes hit your Workers
      routes: {
        include: ['/*'],     // defaults to ['/*']
        exclude: ['<all>']    // defaults to ['<all>']
      }
    })
  }
};

export default config;
