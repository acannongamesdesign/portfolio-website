import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		year: z.number(),
		team: z.enum(['Solo', 'Group']),
		type: z.enum(['University', 'Personal']),
		role: z.string(),
		engine: z.string(),
		summary: z.string(),
		coverImage: z.string(),
	}),
});

export const collections = { projects };
