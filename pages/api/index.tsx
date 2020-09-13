import decode from '@lib/decode'
import { Display, isDisplay } from '@lib/display'
import search from '@lib/search'
import transform from '@lib/transform'
import data from 'fonts.yaml'
import { NextApiRequest, NextApiResponse } from 'next'

export default function API(req: NextApiRequest, res: NextApiResponse): void {
  const families = req.query.family ? decode(req.query.family) : []
  const display: Display = isDisplay(req.query.display)
    ? req.query.display
    : 'swap'

  res.status(200).end(transform(Array.from(search(data, families)), display))
}
