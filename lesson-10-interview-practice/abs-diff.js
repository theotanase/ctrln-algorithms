function getAbsDiff(numbers) {
  numbers.sort((a, b) => a - b);

  let min = 9999999;

  for (let index = 0; index < numbers.length - 1; index++) {
    const number = numbers[index];
    const nextNumber = numbers[index + 1];

    const absDiff = Math.abs(number - nextNumber);

    if (absDiff < min) {
      min = absDiff;
    }
  }

  return min;
}

console.log(getAbsDiff([0, -3, 5, 6, 10, 20, 30, 18])); // 1
console.log(getAbsDiff([4, 4, 4, 4])); // 0