export function ordinalize(number: number): string {
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
