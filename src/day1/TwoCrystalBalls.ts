export default function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;

  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;
  //                    ^ is "<=" because we should also check the index where the first crystall ball broke again
  for (let j = 0; j <= jumpAmount && i < breaks.length; ++i, ++j) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
