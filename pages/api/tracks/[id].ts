import { NextApiRequest, NextApiResponse } from "next";
import { readDb, writeDb } from "../../../server/db";
import { APITrack } from "../../../utils/api";

type Methods = {
  [method: string]: (req: NextApiRequest, res: NextApiResponse) => void;
};
const methods: Methods = {
  GET: handleGet,
  PATCH: handlePatch,
  DELETE: handleDelete,
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
  const { id } = req.query;
  const db = await readDb();
  const track = db.tracks.find((track) => track.id === id);
  if (!track) {
    return res.status(404).json({
      status: 404,
      error: "Track not found",
    });
  }
  res.status(200).json(track);
}

async function handlePatch(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const partialTrack: APITrack = req.body;

  const db = await readDb();
  const track = db.tracks.find((track) => track.id === id);
  if (!track) {
    return res.status(404).json({
      status: 404,
      error: "Track not found",
    });
  }
  Object.assign(track, partialTrack);
  await writeDb(db);
  res.status(200).json(track);
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const db = await readDb();
  db.tracks = db.tracks.filter((track) => track.id !== id);
  await writeDb(db);
  res.status(202).json({
    status: 202,
    message: "Track deleted",
  });
}
