import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [tailwind(), react()],
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        '~': new URL('./src', import.meta.url).pathname
      }
    }
  }
});
