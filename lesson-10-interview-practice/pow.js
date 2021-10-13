function powIterative(x, y) {
  let result = 1;

  for (let index = 1; index <= y; index++) {
    result = result * x;
  }

  return result;
}

function pow(x, y) {
  if (y == 0) {
    return 1;
  }

  if (y == 1) {
    return x;
  }

  const halfExponent = Math.floor(y / 2);
  const halfPow = pow(x, halfExponent);

  if (y % 2 == 0) {
    return halfPow * halfPow;
  } else {
    return x * halfPow * halfPow;
  }
}

console.log(powIterative(5, 3)); // 125
console.log(pow(5, 3)); // 125