function recursiveBinarySearch(x, sortedArray, start, end) {
    if (start > end) {
        return false;
    }

    const middle = Math.floor((start + end) / 2);

    if (x == sortedArray[middle]) {
        return true;
    }

    if (x > sortedArray[middle]) {
        return recursiveBinarySearch(x, sortedArray, middle + 1, end);
    } else {
        return recursiveBinarySearch(x, sortedArray, start, middle - 1);
    }
}

function recursiveLog(value) {
    if (value <= 1) {
        return 0;
    }

    return 1 + recursiveLog(value / 2);
}

console.log(recursiveLog(100));
