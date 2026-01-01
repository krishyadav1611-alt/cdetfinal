import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";

export const artists = pgTable("artists", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const releases = pgTable("releases", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  artistId: serial("artist_id").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const submissions = pgTable("submissions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  message: text("message")
});

export const insertArtistSchema = z.object({
  name: z.string()
});

export const insertReleaseSchema = z.object({
  title: z.string(),
  artistId: z.number()
});

export const insertSubmissionSchema = z.object({
  email: z.string().email(),
  message: z.string().optional()
});
