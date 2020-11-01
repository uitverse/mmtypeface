import type { Display } from '@lib/types'
import type { FontFamily, FontUrl } from '@lib/types'

export default function transform(
  tree: Array<FontFamily<0>>,
  display: Display
): string {
  const results: Array<string> = []
  const banner = '/* generated by mmtypeface api */'
  results.push(banner)
  for (const family of tree) {
    results.push(singleTransform(family, display))
  }
  return results.join('\n')
}

function singleTransform(tree: FontFamily<0>, display: Display): string {
  const results: Array<string> = []
  for (const font of tree.fonts) {
    results.push(`@font-face {
  font-family: '${tree.family}';
  src: ${urlsTransform(font.urls)};
  font-weight: ${font.weight};
  font-style: ${font.style};
  font-display: ${display};
}
`)
  }
  return results.join('')
}

function urlsTransform(tree: Array<FontUrl>): string {
  const results: Array<string> = []
  const root = '/fonts'

  for (const fontUrl of tree) {
    results.push(`url('${root}/${fontUrl.path}') format('${fontUrl.format}')`)
  }
  return results.join(', ')
}
