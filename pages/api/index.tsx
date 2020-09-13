import decode from '@lib/decode'
import type { FontFamily } from '@lib/decode.interface'
import { Display, isDisplay } from '@lib/display'
import fonts from 'fonts.yaml'
import { NextApiRequest, NextApiResponse } from 'next'

function search(families: Array<FontFamily>): void {}

export default function API(req: NextApiRequest, res: NextApiResponse): void {
  const families = req.query.family ? decode(req.query.family) : []
  const display: Display = isDisplay(req.query.display)
    ? req.query.display
    : 'swap'

  res.status(200).json({ families, display })
}
