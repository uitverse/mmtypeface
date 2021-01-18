import type { Font, FontFamily } from '@lib/types'

export default function decode(
  input: string | Array<string>
): Array<FontFamily> {
  // this is to be able to catch circular/recursive input
  try {
    if (input instanceof Array) {
      return JSON.parse(JSON.stringify(input.map(parse))) as Array<FontFamily>
    } else {
      return JSON.parse(JSON.stringify([parse(input)])) as Array<FontFamily>
    }
  } catch (e) {
    console.error(e)
    return []
  }
}

function parse(input: string): FontFamily {
  const pattern = /^([^@:]*)(?:(?:\:)?([\w+\,]*)(?:@)([^@]*))?$/g

  const [, family, keyPair, valuePairSet]: Array<string> =
    pattern.exec(input.trim()) || new Array(4).fill(null)
  const valuePair = valuePairSet?.split(';')

  if (!keyPair || !valuePair) {
    return {
      family: family.replace(/\+/g, ' '),
      fonts: [],
    }
  } else {
    const keys = keyPair?.split(',')
    const entries = valuePair.map((x) => x.split(','))

    const fonts: Array<Font> = entries.map((values) => {
      let style = 'normal'
      let weight = 'normal'

      values.forEach((v, i) => {
        if (keys[i] === 'ital') {
          style = !!parseInt(v) ? 'italic' : 'normal'
        } else if (keys[i] === 'wght') {
          weight = v
        }
      })

      return {
        style,
        weight,
      }
    })

    return {
      family: family.replace(/\+/g, ' '),
      fonts: fonts,
    }
  }
}
