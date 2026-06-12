import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ducspace.github.io',
  integrations: [mdx()],
  output: 'static',
});
