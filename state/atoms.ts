import { CodeType } from '@lib/constants'
import encode from '@lib/encode'
import { FontFamily } from '@lib/types'
import { atom } from 'jotai'

export const searchInput = atom('')
export const selectedFonts = atom<Array<FontFamily>>([])
export const encodedSelectedFonts = atom((get) => encode(get(selectedFonts)))
export const selectedCodeType = atom(CodeType.html)
