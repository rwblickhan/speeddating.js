import { Handler, IncrementOutput } from "./types.ts";
import { IncrementParams } from "./types.ts";

function ordinalize(number: number): string {
  const abs = Math.abs(number);
  if (abs % 100 == 11 || abs % 100 == 12 || abs % 100 == 13) {
    return number + "th";
  } else if (abs % 10 == 1) {
    return number + "st";
  } else if (abs % 10 == 2) {
    return number + "nd";
  } else if (abs % 10 == 3) {
    return number + "rd";
  } else {
    return number + "th";
  }
}

export function incrementOrdinal({
  string,
  increment,
}: IncrementParams): IncrementOutput {
  const number = parseInt(string);
  return {
    string: ordinalize(number + increment),
  };
}

export const ordinalHandler: Handler = {
  regex: /(-?\b\d+)(?:st|nd|rd|th)\b/,
  incrementer: incrementOrdinal,
};
