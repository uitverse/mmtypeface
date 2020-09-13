export interface FontFamily {
  family: string
  fonts: Array<Font>
}

export interface Font {
  weight: string
  style: string
  urls?: Array<FontUrl>
}

export interface FontUrl {
  format: 'woff' | 'woff2'
  path: string
}
