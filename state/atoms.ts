import encode from '@lib/encode'
import type { FontFamily } from '@lib/interfaces'
import { atom } from 'jotai'

export const searchInputState = atom('')
export const fontSelectionState = atom<Array<FontFamily>>([])
export const encodedFontSelectionState = atom((get) =>
  encode(get(fontSelectionState))
)
