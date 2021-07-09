function merge(listA, listB) {
    let indexA = 0;
    let indexB = 0;
    const sorted = [];

    while (indexA < listA.length || indexB < listB.length) {
        if (indexA < listA.length && indexB < listB.length) {
            if (listA[indexA] < listB[indexB]) {
                sorted.push(listA[indexA]);
                indexA++;
            } else {
                sorted.push(listB[indexB]);
                indexB++;
            }
        } else {
            if (indexA < listA.length) {
                sorted.push(listA[indexA]);
                indexA++;
            } else {
                sorted.push(listB[indexB]);
                indexB++;
            }
        }
    }

    return sorted;
}

function mergeSort(list, start, end) {
    if (start == end) {
        return [list[start]];
    }

    const middle = Math.floor((start + end) / 2);

    const firstHalfSorted = mergeSort(list, start, middle);
    const secondHalfSorted = mergeSort(list, middle + 1, end);

    const mergedHalves = merge(firstHalfSorted, secondHalfSorted);

    return mergedHalves;
}

console.log(mergeSort([4, 0, 14, 3, 20, 24, 15], 0, 6));
