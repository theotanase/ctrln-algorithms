function findPivot(values, start, end) {
    let left = start;
    let right = end;
    let order = true; // True - left , false  -> right

    while (left < right) {
        if (values[left] > values[right]) {
            const aux = values[left];
            values[left] = values[right];
            values[right] = aux;

            order = !order;
        }

        if (order == true) {
            left++;
        } else {
            right--;
        }
    }

    return left;
}

function quickSort(values, start, end) {
    if (start >= end) {
        return;
    }

    const pivot = findPivot(values, start, end);

    quickSort(values, start, pivot - 1);
    quickSort(values, pivot + 1, end);
}

const numbers = [4, 30, 24, 100, 10, 3, 4, 5, 5, 2, 10, 6, 0];

quickSort(numbers, 0, numbers.length - 1);

console.log(numbers);
