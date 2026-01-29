// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://northpoint.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
