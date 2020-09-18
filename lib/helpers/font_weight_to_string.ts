import { RESOURCES } from '@lib/constants'

function hasOwnProperty<
  X extends Record<string, string>,
  Y extends PropertyKey
>(obj: X, prop: Y): obj is X & Record<Y, string> {
  return obj.hasOwnProperty(prop)
}

export default function fontWeightToString(number: string): string {
  if (hasOwnProperty(RESOURCES.FONT_WEIGHT_DEFINITIONS, number)) {
    return RESOURCES.FONT_WEIGHT_DEFINITIONS[number]
  } else {
    return number
  }
}
