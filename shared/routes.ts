import { z } from 'zod';
import { insertArtistSchema, insertReleaseSchema, insertSubmissionSchema, artists, releases, submissions } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  artists: {
    list: {
      method: 'GET' as const,
      path: '/api/artists',
      responses: {
        200: z.array(z.custom<typeof artists.$inferSelect>()),
      },
    },
  },
  releases: {
    list: {
      method: 'GET' as const,
      path: '/api/releases',
      responses: {
        200: z.array(z.custom<typeof releases.$inferSelect>()),
      },
    },
  },
  submissions: {
    create: {
      method: 'POST' as const,
      path: '/api/submissions',
      input: insertSubmissionSchema,
      responses: {
        201: z.custom<typeof submissions.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
