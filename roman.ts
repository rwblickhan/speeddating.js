import { Handler, IncrementOutput, IncrementParams } from "./types.ts";

const conversions: Map<string, number> = new Map([
  ["m", 1000],
  ["cm", 900],
  ["d", 500],
  ["cd", 400],
  ["c", 100],
  ["xc", 90],
  ["l", 50],
  ["xl", 40],
  ["x", 10],
  ["ix", 9],
  ["v", 5],
  ["iv", 4],
  ["i", 1],
]);

function numberFromRomanNumeral(string: string): number {
  let roman = string.toLowerCase();
  let output = 0;

  const keys = Array.from(conversions.keys());

  while (roman !== "") {
    const match = keys.find((value) => roman.match("^" + value));
    if (!match) {
      roman = roman.substring(1);
      break;
    }

    output += conversions.get(match) ?? 0;
    roman = roman.substring(match.length);
  }

  return output;
}

function romanNumeralFromNumber(number: number): string {
  let output = "";
  conversions.forEach((value, letters) => {
    for (let i = 0; i < Math.floor(number / value); i++) {
      output += letters;
    }
    number = number % value;
  });
  return output.toUpperCase();
}

export function incrementRoman({
  string,
  increment,
}: IncrementParams): IncrementOutput {
  return {
    string: romanNumeralFromNumber(numberFromRomanNumeral(string) + increment),
  };
}

export const romanHandler: Handler = {
  regex: /\b[IVXLCDMivxlcdm]+\b/,
  incrementer: incrementRoman,
};
