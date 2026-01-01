import { db } from "./db";
import {
  artists, releases, submissions,
  type Artist, type InsertArtist,
  type Release, type InsertRelease,
  type Submission, type InsertSubmission
} from "@shared/schema";

export interface IStorage {
  getArtists(): Promise<Artist[]>;
  createArtist(artist: InsertArtist): Promise<Artist>;
  
  getReleases(): Promise<Release[]>;
  createRelease(release: InsertRelease): Promise<Release>;
  
  createSubmission(submission: InsertSubmission): Promise<Submission>;
}

export class DatabaseStorage implements IStorage {
  async getArtists(): Promise<Artist[]> {
    return await db.select().from(artists);
  }

  async createArtist(artist: InsertArtist): Promise<Artist> {
    const [newArtist] = await db.insert(artists).values(artist).returning();
    return newArtist;
  }

  async getReleases(): Promise<Release[]> {
    return await db.select().from(releases);
  }

  async createRelease(release: InsertRelease): Promise<Release> {
    const [newRelease] = await db.insert(releases).values(release).returning();
    return newRelease;
  }

  async createSubmission(submission: InsertSubmission): Promise<Submission> {
    const [newSubmission] = await db.insert(submissions).values(submission).returning();
    return newSubmission;
  }
}

export const storage = new DatabaseStorage();
