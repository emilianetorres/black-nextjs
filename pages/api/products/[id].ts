// pages/api/products/[id].ts

import { NextApiRequest, NextApiResponse } from "next"
import path from 'path'
import fs from 'fs'

const filePath = path.join(process.cwd(), 'database.json')
const products = JSON.parse(fs.readFileSync(filePath, 'utf8'))

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  const product = products.find(p => p.id === Number(id))
  res.status(200).json(product)
}
