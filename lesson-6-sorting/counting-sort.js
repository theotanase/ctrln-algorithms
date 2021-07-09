function countingSort(numbers) {
    const counters = [];
    const maxPossibleValues = 100;
    for (let index = 0; index <= maxPossibleValues; index++) {
        counters[index] = 0;
    }

    for (const number of numbers) {
        counters[number]++;
    }

    for (let key = 0; key <= maxPossibleValues; key++) {
        const occurences = counters[key];
        for (let index = 1; index <= occurences; index++) {
            console.log(key);
        }
    }
}

countingSort([1, 3, 2, 1, 0, 40, 22, 34, 11, 2, 34, 40, 50, 40, 1]);
