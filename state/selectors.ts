import encode from '@lib/encode'
import { fontSelectionState } from '@state/atoms'
import { selector } from 'recoil'

export const encodedFontSelectionState = selector({
  key: 'encodedFontSelectionState',
  get: ({ get }) => {
    const fontSelection = get(fontSelectionState)
    return encode(fontSelection)
  },
})
