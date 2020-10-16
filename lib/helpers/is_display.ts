import { RESOURCES } from '@lib/constants'
import type { Display } from '@lib/interfaces'

export default function isDisplay(input: unknown): input is Display {
  return RESOURCES.DISPLAY_VALUES.includes(input as Display)
}
