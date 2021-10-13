function findPairs(numbers, P) {
  for (let i = 0; i <= numbers.length - 2; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      const firstNumber = numbers[i];
      const secondNumber = numbers[j];

      if (firstNumber * secondNumber == P) {
        console.log(`Found ${firstNumber}, ${secondNumber}`);
      }
    }
  }
}

function findPairUsingHashTable(numbers, P) {
  const hashtable = {};

  for (const number of numbers) {
    const possiblePair = P / number;

    if (hashtable[possiblePair] != undefined) {
      console.log(`Found ${number}, ${possiblePair}`);
    }

    hashtable[number] = true;
  }
}

function findPairBySortingArray(numbers, P) {
  numbers.sort((a, b) => a - b);

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const firstNumber = numbers[left];
    const secondNumber = numbers[right];
    const currentProduct = firstNumber * secondNumber;

    if(currentProduct == P) {
      console.log(`Found ${firstNumber}, ${secondNumber}`);
    }

    if(currentProduct > P) {
      right --;
    } else {
      left ++;
    }
  }

}

findPairs([1, 5, 6, 10, 2, 4, 3], 12);
console.log('------------------');
findPairUsingHashTable([1, 5, 2, 10, 6, 4, 3], 12);
console.log('------------------');
findPairBySortingArray([1, 5, 6, 10, 2, 4, 3], 12);
