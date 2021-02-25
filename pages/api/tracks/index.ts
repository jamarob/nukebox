// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { readDb } from "../../../server/db";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const db = await readDb();
  res.status(200).json(db.tracks);
};
