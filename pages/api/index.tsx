import decodeFamily from '@lib/decode_family'
import { NextApiRequest, NextApiResponse } from 'next'

export default function API(req: NextApiRequest, res: NextApiResponse): void {
  const families = req.query.family as string | Array<string>
  const display = (req.query.display as string) ?? 'swap'

  res.status(200).json({ families: decodeFamily(families), display })
}
