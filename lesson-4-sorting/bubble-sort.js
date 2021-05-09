function bubbleSort(arr) {
    let notSortedYet = true;

    while (notSortedYet) {
        notSortedYet = false;

        for (let index = 0; index < arr.length - 1; index++) {
            if (arr[index] > arr[index + 1]) {
                const aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
                notSortedYet = true;
            }
        }
    }
}

const numbers = [10, 23, 3, 12, 0, 100, 120, 43, 23];

bubbleSort(numbers);

console.log(numbers);
