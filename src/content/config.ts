import { defineCollection, z } from "astro:content";

const pages = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),

        nav: z.boolean().default(false),
        navOrder: z.number().optional(),

        draft: z.boolean().default(false),
    }),
});

const legal = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        updated: z.date(),
    }),
});

export const collections = {
    pages,
    legal
};
