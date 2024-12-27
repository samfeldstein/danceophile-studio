import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Prefetch all links by default
  prefetch: {
    prefetchAll: true
  }
});
