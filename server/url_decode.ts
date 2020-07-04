import type { FontFamily, Font } from "./types/index.d.ts";

/// take [input] which is an encoded string and parse font properties from it
export default function parse(input: string): object {
  /// this is to be able to catch circular/recursive input
  return JSON.parse(JSON.stringify(__parse__(input)));
}

function __parse__(input: string): FontFamily {
  const pattern = new RegExp(/^([^@:]*)(?:(?:\:)?([\w+\,]*)(?:@)([^@]*))?$/g);
  const [, family, keyPair, valuePairSet]: Array<string> =
    pattern.exec(input.trim()) || new Array(4).fill(null);
  const valuePair = valuePairSet?.split(";");
  if (!keyPair || !valuePair) {
    return {
      family: family.replace("+", " "),
      fonts: [],
    };
  } else {
    const keys = keyPair?.split(",");
    const entries = valuePair.map((x) => x.split(","));
    const fonts: Array<Font> = entries.map((values) => {
      let style = "normal";
      let weight = "normal";
      values.forEach((v, i) => {
        if (keys[i] === "ital") {
          style = !!parseInt(v) ? "italic" : "normal";
        } else if (keys[i] === "wght") {
          weight = v;
        }
      });
      return {
        style,
        weight,
      };
    });
    return {
      family: family.replace("+", " "),
      fonts: fonts,
    };
  }
}
