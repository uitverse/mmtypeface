import type { FontFamily } from '@lib/interfaces'
import filter from 'lodash/filter'

export default function encode(input: Array<FontFamily>): string {
  const results: Array<string> = []

  for (const family of filter(input, (x) => x.fonts.length !== 0)) {
    results.push(singleEncode(family))
  }

  return results.join('&family=')
}

function singleEncode(input: FontFamily): string {
  const start = `${input.family.replace(/\s/g, '+')}:ital,wght@`
  const results: Array<string> = []

  for (const font of input.fonts) {
    results.push(`${font.style === 'normal' ? 0 : 1},${font.weight}`)
  }

  return start + results.join(';')
}
