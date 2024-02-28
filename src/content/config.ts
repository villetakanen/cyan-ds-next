import { z, defineCollection } from 'astro:content';

const webcomponents = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    params: z.array(z.object({
      name: z.string(),
      type: z.string(),
      required: z.boolean(),
      description: z.string(),})).optional(),
  }),
});

const inputs = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    noun: z.string().optional(),
  }),
});

const typography = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    noun: z.string().optional(),
  }),
});

const theming = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    noun: z.string().optional(),
  }),
});


// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  webcomponents,
  inputs,
  typography,
  theming
};
