import type { FontFamily } from '@lib/interfaces'

export default function* search(
  data: Array<FontFamily<0>>,
  input: Array<FontFamily>
): Generator<FontFamily<0>> {
  for (const i of input) {
    for (const o of data.filter((x) => x.family === i.family)) {
      if (i.fonts.length === 0) {
        yield* data.filter((x) => x.family === i.family)
      } else {
        for (const font of i.fonts) {
          yield {
            family: o.family,
            fonts: o.fonts.filter(
              (x) => x.weight === font.weight && x.style === font.style
            ),
          }
        }
      }
    }
  }
}
