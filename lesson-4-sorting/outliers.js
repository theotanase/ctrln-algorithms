function getAverageWithoutOutliers(values) {
    values.sort((a, b) => a - b);

    const start = 2;
    const end = values.length - 2;
    let sum = 0;

    for (let index = start; index < end; index++) {
        sum = sum + values[index];
    }

    const average = sum / (values.length - 4);

    return average;
}

function getMedian(values) {
    values.sort((a, b) => a - b);

    if (values.length % 2 == 1) {
        const middleIndex = Math.floor((values.length - 1) / 2);
        const median = values[middleIndex];
        return median;
    } else {
        const leftMiddleIndex = Math.floor((values.length - 1) / 2);
        const rightMiddleIndex = Math.floor((values.length) / 2);
        const median = (values[leftMiddleIndex] + values[rightMiddleIndex]) / 2;
        return median;
    }
}

console.log(getAverageWithoutOutliers([20, 21, 23, 25, 19, 20, 26, 10000, 200000]));
console.log(getMedian([20, 21, 23, 25, 19, 20, 26, 10000, 200000]));
