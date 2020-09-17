import { Font } from '@lib/interfaces'
import { atom } from 'recoil'

export const searchInputState = atom({
  key: 'searchInputState',
  default: '',
})

export const fontSelectionState = atom<Array<Font>>({
  key: 'fontSelectionState',
  default: [],
})
