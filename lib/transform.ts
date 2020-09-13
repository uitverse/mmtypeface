import type { FontFamily, FontUrl } from '@lib/decode.interface'
import type { Display } from '@lib/display'

export default function transform(
  tree: Array<FontFamily<0>>,
  display: Display
): string {
  let result = ''

  for (const family of tree) {
    result += singleTransform(family, display)
  }

  return result
}

function singleTransform(tree: FontFamily<0>, display: Display): string {
  let result = ''

  for (const font of tree.fonts) {
    result += `
@font-face {
  font-family: '${tree.family}';
  src: ${urlsTransform(font.urls)};
  font-weight: ${font.weight};
  font-style: ${font.style};
  font-display: ${display};
}
`
  }

  return result
}

function urlsTransform(tree: Array<FontUrl>): string {
  let result: Array<string> = []
  let root = '/fonts'

  for (const fontUrl of tree) {
    result.push(`url('${root}/${fontUrl.path}') format('${fontUrl.format}')`)
  }

  return result.join(', ')
}
