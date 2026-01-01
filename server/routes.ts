import { Express, Request, Response } from "express";
import { storage } from "./storage";
import {
  insertArtistSchema,
  insertReleaseSchema,
  insertSubmissionSchema
} from "../shared/schema";

export function registerRoutes(app: Express) {
  app.get("/api/artists", async (_: Request, res: Response) => {
    res.json(await storage.getArtists());
  });

  app.post("/api/artists", async (req: Request, res: Response) => {
    const data = insertArtistSchema.parse(req.body);
    res.json(await storage.createArtist(data));
  });

  app.get("/api/releases", async (_: Request, res: Response) => {
    res.json(await storage.getReleases());
  });

  app.post("/api/releases", async (req: Request, res: Response) => {
    const data = insertReleaseSchema.parse(req.body);
    res.json(await storage.createRelease(data));
  });

  app.post("/api/submissions", async (req: Request, res: Response) => {
    const data = insertSubmissionSchema.parse(req.body);
    res.json(await storage.createSubmission(data));
  });
}
