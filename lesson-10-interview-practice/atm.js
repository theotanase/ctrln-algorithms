function getNumberOfCoins(S) {
  const coins = [1, 5, 10, 50, 100];
  coins.sort((a, b) => b - a);

  const usedCoins = [0, 0, 0, 0, 0];
  let largestCoinsIndex = 0;

  while (S > 0) {
    const largestCoinValue = coins[largestCoinsIndex];

    if (S >= largestCoinValue) {
      S = S - largestCoinValue;
      usedCoins[largestCoinsIndex]++;
    } else {
      largestCoinsIndex++;
    }
  }

  return usedCoins;
}

console.log(getNumberOfCoins(375)); // 3, 1, 2, 1, 0
console.log(getNumberOfCoins(4)); // 0, 0, 0, 0, 4