import type { FontFamily, FontUrl } from '@lib/decode.interface'
import type { Display } from '@lib/display'

export default function transform(
  tree: Array<FontFamily<0>>,
  display: Display
): string {
  let results: Array<string> = []
  let banner = '/* generated by mmtypeface api */'
  results.push(banner)
  for (const family of tree) {
    results.push(singleTransform(family, display))
  }
  return results.join('\n')
}

function singleTransform(tree: FontFamily<0>, display: Display): string {
  let results: Array<string> = []
  for (const font of tree.fonts) {
    results.push(`@font-face {
  font-family: '${tree.family}';
  src: ${urlsTransform(font.urls, tree.family)};
  font-weight: ${font.weight};
  font-style: ${font.style};
  font-display: ${display};
}
`)
  }
  return results.join('')
}

function urlsTransform(tree: Array<FontUrl>, family: string): string {
  let results: Array<string> = []
  let root = '/fonts'

  results.push(`local('${family}')`)
  for (const fontUrl of tree) {
    results.push(`url('${root}/${fontUrl.path}') format('${fontUrl.format}')`)
  }
  return results.join(', ')
}