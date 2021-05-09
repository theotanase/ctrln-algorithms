function insertionSort(arr) {
    const sortedArray = [];

    for (const number of arr) {
        const position = getInsertPosition(number, sortedArray);

        moveElementsToTheRight(sortedArray, position);

        sortedArray[position] = number;
    }

    return sortedArray;
}

function getInsertPosition(value, previousSortedValues) {
    if (previousSortedValues.length == 0) {
        return 0;
    }

    for (let index = 0; index < previousSortedValues.length; index++) {
        if (value <= previousSortedValues[index]) {
            return index;
        }
    }

    return previousSortedValues.length;
}

function moveElementsToTheRight(previousSortedValues, start) {
    for (let index = previousSortedValues.length; index > start; index--) {
        previousSortedValues[index] = previousSortedValues[index - 1];
    }
}

const numbers = [10, 3, 24, 45, 23, 12, 10, -1];

const sortedNumbers = insertionSort(numbers);

console.log(sortedNumbers);

