import { db } from "./db";
import { artists, releases, submissions } from "../shared/schema";

class Storage {
  getArtists() {
    return db.select().from(artists);
  }

  createArtist(data: any) {
    return db.insert(artists).values(data).returning();
  }

  getReleases() {
    return db.select().from(releases);
  }

  createRelease(data: any) {
    return db.insert(releases).values(data).returning();
  }

  createSubmission(data: any) {
    return db.insert(submissions).values(data).returning();
  }
}

export const storage = new Storage();
