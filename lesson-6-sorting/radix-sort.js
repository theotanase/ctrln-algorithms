function radixSort(numbers) {
    const maxNumber = getMaxNumber(numbers);
    const numberOfDigits = getNumberOfDigits(maxNumber);

    for (let digitIndex = 0; digitIndex < numberOfDigits; digitIndex++) {
        numbers = sortByNthDigit(numbers, digitIndex);
    }

    return numbers;
}

function getMaxNumber(numbers) {
    let max = 0;
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    return max;
}

function getNumberOfDigits(number) {
    let digits = 0;

    while (number > 0) {
        number = Math.floor(number / 10);
        digits++;
    }

    return digits;
}

function sortByNthDigit(numbers, digitIndex) {
    const buckets = [];
    for (let index = 0; index < 10; index++) {
        buckets.push([]);
    }

    for (const number of numbers) {
        const bucketIndex = getNthDigit(number, digitIndex);
        buckets[bucketIndex].push(number);
    }

    const sortedNumbers = [];

    for(const bucket of buckets) {
        for(const number of bucket) {
            sortedNumbers.push(number);
        }
    }

    return sortedNumbers;
}

function getNthDigit(number, digitIndex) {
    return Math.floor( number / Math.pow(10, digitIndex)) % 10;
}

console.log(radixSort([2, 15, 7, 105, 234, 45, 20, 13]));
