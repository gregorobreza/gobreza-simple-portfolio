// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string()),
      featured:z.boolean()
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  "projects": projectsCollection,
};