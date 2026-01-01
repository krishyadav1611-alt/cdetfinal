import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.artists.list.path, async (_req, res) => {
    const artists = await storage.getArtists();
    res.json(artists);
  });

  app.get(api.releases.list.path, async (_req, res) => {
    const releases = await storage.getReleases();
    res.json(releases);
  });

  app.post(api.submissions.create.path, async (req, res) => {
    try {
      const input = api.submissions.create.input.parse(req.body);
      const submission = await storage.createSubmission(input);
      res.status(201).json(submission);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data if empty
  const artistsList = await storage.getArtists();
  if (artistsList.length === 0) {
    await storage.createArtist({
      name: "PHONK KILLER",
      genre: "Phonk / Drift",
      description: "Sound built in the shadows — heavy bass, raw emotion, and real influence.",
      spotifyUrl: "#",
      appleMusicUrl: "#",
      instagramUrl: "#"
    });
    await storage.createArtist({
      name: "NIGHT RIDER",
      genre: "Funk / Wave",
      description: "Retro grooves meeting modern street energy.",
      spotifyUrl: "#",
      appleMusicUrl: "#",
      instagramUrl: "#"
    });
  }

  const releasesList = await storage.getReleases();
  if (releasesList.length === 0) {
    await storage.createRelease({
      title: "MIDNIGHT DRIFT",
      artistName: "PHONK KILLER",
      description: "A dark, bass-driven release inspired by underground streets, retro funk grooves, and modern Phonk energy.",
      spotifyUrl: "#",
      appleMusicUrl: "#",
      youtubeUrl: "#"
    });
    await storage.createRelease({
      title: "NEON STREETS",
      artistName: "NIGHT RIDER",
      description: "Heavy synthwave meets lo-fi grit.",
      spotifyUrl: "#",
      appleMusicUrl: "#",
      youtubeUrl: "#"
    });
  }

  return httpServer;
}
