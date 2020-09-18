import encode from '@lib/encode'
import type { FontFamily } from '@lib/interfaces'
import { atom, selector } from 'recoil'

export const searchInputState = atom({
  key: 'searchInputState',
  default: '',
})

export const fontSelectionState = atom<Array<FontFamily>>({
  key: 'fontSelectionState',
  default: [],
})

export const encodedFontSelectionState = selector({
  key: 'encodedFontSelectionState',
  get: ({ get }) => {
    const fontSelection = get(fontSelectionState)

    return encode(fontSelection)
  },
})
