
function insertionSort(arr) {
    const sortedArray = [];

    for (const number of arr) {
        const position = getInsertPosition(number, sortedArray);

        moveElementsToTheRight(sortedArray, position);

        sortedArray[position] = number;
    }

    return sortedArray;
}


function moveElementsToTheRight(previousSortedValues, start) {
    for (let index = previousSortedValues.length; index > start; index--) {
        previousSortedValues[index] = previousSortedValues[index - 1];
    }
}



function getInsertPosition(x, sortedArray) {
    let start = 0;
    let end = sortedArray.length - 1;

    let position = null;

    while (position == null) {
        if (start > end) {
            position = sortedArray.length;
        } else {
            const middle = Math.floor((start + end) / 2);

            if (x > sortedArray[middle]) {
                start = middle + 1;
            } else {
                if (middle == 0) {
                    position = 0;
                } else {
                    if (x >= sortedArray[middle - 1]) {
                        position = middle;
                    } else {
                        end = middle - 1;
                    }
                }
            }
        }
    }

    return position;
}

console.log(insertionSort([10, 5, 4, 30, 24, 32, 100]));
