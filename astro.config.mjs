// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://divysingh07.github.io',
  base: '/Portfolio',
  integrations: [tailwind()],
});
