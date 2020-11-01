import encode from '@lib/encode'
import type { FontFamily } from '@lib/interfaces'
import { atom } from 'jotai'

export const searchInput = atom('')
export const selectedFonts = atom<Array<FontFamily>>([])
export const encodedSelectedFonts = atom((get) => encode(get(selectedFonts)))

enum CodeType {
  html,
  css,
}

export const selectedCodeType = atom(CodeType.html)
