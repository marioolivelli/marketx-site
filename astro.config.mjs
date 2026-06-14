import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://marioolivelli.github.io/marketx-site/',
  integrations: [react()],
  trailingSlash: 'never',
  output: 'static',
});
