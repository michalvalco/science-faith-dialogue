// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://michalvalco.github.io',
  base: '/science-faith-dialogue/',
  output: 'static',
  integrations: [react()],
  vite: {
    // @ts-ignore — version mismatch between @tailwindcss/vite and astro's bundled vite
    plugins: [tailwindcss()]
  }
});
