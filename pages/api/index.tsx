import decode from '@lib/decode'
import { Display, isDisplay } from '@lib/display'
import search from '@lib/search'
import { NextApiRequest, NextApiResponse } from 'next'

export default function API(req: NextApiRequest, res: NextApiResponse): void {
  const families = req.query.family ? decode(req.query.family) : []
  const display: Display = isDisplay(req.query.display)
    ? req.query.display
    : 'swap'

  res.status(200).json({ families: Array.from(search(families)), display })
}
