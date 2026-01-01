import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const artists = pgTable("artists", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  genre: text("genre").notNull(),
  description: text("description").notNull(),
  spotifyUrl: text("spotify_url"),
  appleMusicUrl: text("apple_music_url"),
  instagramUrl: text("instagram_url"),
  imageUrl: text("image_url"),
});

export const releases = pgTable("releases", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  artistName: text("artist_name").notNull(),
  description: text("description").notNull(),
  spotifyUrl: text("spotify_url"),
  appleMusicUrl: text("apple_music_url"),
  youtubeUrl: text("youtube_url"),
  coverUrl: text("cover_url"),
});

export const submissions = pgTable("submissions", {
  id: serial("id").primaryKey(),
  artistName: text("artist_name").notNull(),
  email: text("email").notNull(),
  genre: text("genre").notNull(),
  streamingLinks: text("streaming_links").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertArtistSchema = createInsertSchema(artists).omit({ id: true });
export const insertReleaseSchema = createInsertSchema(releases).omit({ id: true });
export const insertSubmissionSchema = createInsertSchema(submissions).omit({ id: true, createdAt: true });

export type Artist = typeof artists.$inferSelect;
export type Release = typeof releases.$inferSelect;
export type Submission = typeof submissions.$inferSelect;
export type InsertArtist = z.infer<typeof insertArtistSchema>;
export type InsertRelease = z.infer<typeof insertReleaseSchema>;
export type InsertSubmission = z.infer<typeof insertSubmissionSchema>;
