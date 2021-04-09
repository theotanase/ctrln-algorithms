function getAverage(numbers) {
    const total = getTotal(numbers);

    const average = total / numbers.length;

    return average;
}

function getTotal(numbers) {
    let total = 0;

    for (const number of numbers) {
        total = total + number;
    }

    return total;
}

console.log(getAverage([10, 20]));
