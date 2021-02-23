import { NextApiRequest, NextApiResponse } from "next";
import { readDb, writeDb } from "../../../server/db";
import { APITrack } from "../../../utils/api";

type Methods = {
  [method: string]: (req: NextApiRequest, res: NextApiResponse) => void;
};
const methods: Methods = {
  GET: handleGet,
  POST: handlePost,
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const method = methods[req.method];
  if (!method) {
    return res.status(405).json({
      status: 405,
      error: "Method not allowed",
    });
  }
  await method(req, res);
};

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const db = await readDb();
  res.status(200).json(db.tracks);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const newTrack: APITrack = req.body;
  const db = await readDb();
  const trackExists = db.tracks.some((track) => track.id === newTrack.id);
  if (trackExists) {
    return res.status(409).json({
      status: 409,
      error: "Track already exists",
    });
  }
  db.tracks.push(newTrack);
  await writeDb(db);
  res.status(201).json(newTrack);
}
