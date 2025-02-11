import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
});

export const collections = { events };
