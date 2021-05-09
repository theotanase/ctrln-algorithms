function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
}

const numbers = [10, 2, 12, 34, 500, 3, 0, -2, 1, 120];

selectionSort(numbers);

console.log(numbers);
