export interface FontFamily<T extends unknown = undefined> {
  family: string
  author?: string
  fonts: Array<Font<T>>
}

export type Font<T extends unknown = undefined> = T extends undefined
  ? { weight: string; style: string }
  : { weight: string; style: string; urls: Array<FontUrl> }

export interface FontUrl {
  format: 'woff' | 'woff2'
  path: string
}
