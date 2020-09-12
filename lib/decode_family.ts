import type { Font, FontFamily } from './decode_family.interface'

/// take [input] which is an encoded string or an array of ones and parse font properties from it
export default function decodeFamily(input: string | Array<string>): object {
  /// this is to be able to catch circular/recursive input
  try {
    if (input instanceof Array) {
      return JSON.parse(JSON.stringify(input.map(__parse__)))
    } else {
      return JSON.parse(JSON.stringify([__parse__(input)]))
    }
  } catch (e) {
    console.error(e)
    return []
  }
}

function __parse__(input: string): FontFamily {
  const pattern = /^([^@:]*)(?:(?:\:)?([\w+\,]*)(?:@)([^@]*))?$/g

  const [, family, keyPair, valuePairSet]: Array<string> =
    pattern.exec(input.trim()) || new Array(4).fill(null)
  const valuePair = valuePairSet?.split(';')

  if (!keyPair || !valuePair) {
    return {
      family: family.replace('+', ' '),
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
      family: family.replace('+', ' '),
      fonts: fonts,
    }
  }
}
