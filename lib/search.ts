import type { FontFamily } from '@lib/decode.interface'

export default function* search(
  data: Array<FontFamily<0>>,
  families: Array<FontFamily>
): Generator<FontFamily<0>> {
  for (const { family, fonts } of families) {
    for (const result of data.filter((x) => x.family === family)) {
      for (const font of fonts) {
        yield {
          family: result.family,
          fonts: result.fonts.filter(
            (x) => x.weight === font.weight && x.style === font.style
          ),
        }
      }
    }
  }
}
