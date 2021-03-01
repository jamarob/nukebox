// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { readDb, writeDb } from "../../../server/db";
import { APITrack } from "../../../utils/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    handleGET(req, res);
  }
  if (req.method === "POST") {
    handlePOST(req, res);
  }
};

async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  const db = await readDb();
  res.status(200).json(db.tracks);
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const newTrack: APITrack = req.body;

  const db = await readDb();

  const trackExists = db.tracks.some((track) => track.id === newTrack.id);
  if (trackExists) {
    return res.status(409).json({
      status: 409,
      error: `Track ${newTrack.id} already exists`,
    });
  }

  // db.tracks.push(track);
  db.tracks = [...db.tracks, newTrack];
  await writeDb(db);
  res.status(201).json(newTrack);
}
