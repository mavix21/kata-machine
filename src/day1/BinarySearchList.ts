export default function bsList(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const midpoint = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[midpoint];

    if (v === needle) {
      return true;
    }

    if (v < needle) {
      lo = midpoint + 1;
    } else {
      hi = midpoint;
    }
  } while (lo < hi);

  return false;
}
