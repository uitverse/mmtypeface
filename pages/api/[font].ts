// import { promises } from 'fs'

import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    query: { font },
  } = req
//   const { readFile } = promises

//   const fonts: Array<string> = JSON.parse(await readFile('list.json', 'utf-8'))
  const fonts: Array<string> = ['padauk']

  if (fonts.includes(font as string)) {
//     const css = await readFile(`fonts/${font}.css`, 'utf-8')
    res.end(font)
  } else {
    res.end(`Font not Found! ${font}`)
  }
}
