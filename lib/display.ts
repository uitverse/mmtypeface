const DISPLAY_VALUES = [
  'auto',
  'swap',
  'block',
  'fallback',
  'optional',
] as const
export type Display = typeof DISPLAY_VALUES[number]

export function isDisplay(input: unknown): input is Display {
  return DISPLAY_VALUES.includes(input as Display)
}
