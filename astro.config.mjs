// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
	site: 'https://test.barrelwisdom.com',
  integrations: [mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@styles': path.resolve('./src/styles'),
        '@app': path.resolve('./src'),
      }
    },
    server: {
     proxy: {
        '^/media': {
          target: 'https://media.barrelwisdom.com/file/barrelwisdom',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/media/, ''),
        },
      },
    },
  },
});
