import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';

const products = JSON.parse(fs.readFileSync(path.resolve('./data/products.json'), 'utf8'));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}