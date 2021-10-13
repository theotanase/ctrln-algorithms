function removeDuplicates(numbers) {
  const uniques = [];

  for (const number of numbers) {
    if (!uniques.includes(number)) {
      uniques.push(number);
    }
  }

  return uniques;
}

function removeDuplicatesUsingHashtable(numbers) {
  const hashTable = {}

  for (const number of numbers) {
    if (hashTable[number] == undefined) {
      hashTable[number] = true;
    }
  }

  return Object.keys(hashTable)
    .map(key => parseInt(key));
}

function removeDuplicatesUsingSort(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const uniques = [];

  for (let index = 0; index < sortedNumbers.length; index++) {
    if (index == 0 || sortedNumbers[index - 1] != sortedNumbers[index]) {
      uniques.push(sortedNumbers[index]);
    }
  }

  return uniques;
}


console.log(removeDuplicates([0, 4, 5, 4, 2, 3, 0]));
console.log(removeDuplicatesUsingHashtable([0, 4, 5, 4, 2, 3, 0]));
console.log(removeDuplicatesUsingSort([0, 4, 5, 4, 2, 3, 0]));