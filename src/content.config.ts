import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const patchNote = defineCollection({
	// Load Markdown and MDX files in the `src/content/ChangeLog/` directory.
	loader: glob({ base: './src/content/ChangeLog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const wiki = defineCollection({
	// Load Markdown and MDX files in the `src/content/ChangeLog/` directory.
	loader: glob({ base: './src/content/Wiki', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { patchNote, wiki };
