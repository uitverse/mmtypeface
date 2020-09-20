import type { FontFamily } from '@lib/interfaces'
import { atom } from 'recoil'

export const searchInputState = atom({
  key: 'searchInputState',
  default: '',
})

export const fontSelectionState = atom<Array<FontFamily>>({
  key: 'fontSelectionState',
  default: [],
})
