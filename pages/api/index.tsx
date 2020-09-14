import decode from '@lib/decode'
import { Display, isDisplay } from '@lib/display'
import search from '@lib/search'
import transform from '@lib/transform'
import data from 'fonts.yaml'
import LRUCache from 'lru-cache'
import { NextApiRequest, NextApiResponse } from 'next'

const cache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 24,
})

export default function API(req: NextApiRequest, res: NextApiResponse): void {
  const key = req.url

  if (cache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.status(200).send(cache.get(key))
  } else {
    try {
      const families = req.query.family ? decode(req.query.family) : []
      const display: Display = isDisplay(req.query.display)
        ? req.query.display
        : 'swap'
      const result = transform(Array.from(search(data, families)), display)

      cache.set(key, result)
      res.setHeader('x-cache', 'MISS')
      res.status(200).send(result)
    } catch (e) {
      res.setHeader('x-cache', 'SKIP')
      res.status(502).end()
    }
  }
}
