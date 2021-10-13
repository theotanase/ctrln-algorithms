function getMinRoofLength(spotsWithCars, X) {
  spotsWithCars.sort((a, b) => a - b);

  let minLength = 999999;

  for (let start = 0; start < spotsWithCars.length - X + 1; start++) {
    const end = start + X - 1;

    const length = spotsWithCars[end] - spotsWithCars[start] + 1;

    if (length < minLength) {
      minLength = length;
    }
  }

  return minLength;
}

console.log(getMinRoofLength([2, 4, 6,7,8, 10, 15, 20], 4 )); //5