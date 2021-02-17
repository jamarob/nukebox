// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../server/db.json";

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(db.tracks);
};
