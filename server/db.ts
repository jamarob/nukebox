import fs from "fs/promises";
import type { APITrack } from "../utils/api";

type DB = {
  tracks: APITrack[];
};

const DB_FILE = "./server/db.json"; // Relative to entry point

export async function readDb() {
  const dbJson = await fs.readFile(DB_FILE, "utf-8");
  const db: DB = JSON.parse(dbJson);
  return db;
}

export async function writeDb(newDb: DB) {
  const dbJson = JSON.stringify(newDb, null, 2);
  await fs.writeFile(DB_FILE, dbJson);
}
