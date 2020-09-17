const definitions = {
  '100': 'Thin',
  '200': 'Extra-Light',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'Semi-Bold',
  '700': 'Bold',
  '800': 'Extra-Bold',
  '900': 'Black',
}

function hasOwnProperty<
  X extends Record<string, string>,
  Y extends PropertyKey
>(obj: X, prop: Y): obj is X & Record<Y, string> {
  return obj.hasOwnProperty(prop)
}

export default function fontWeightToString(number: string): string {
  if (hasOwnProperty(definitions, number)) {
    return definitions[number]
  } else {
    return number
  }
}
