function getMaxDiff(values) {
    let maxDiff = 0;

    values.sort((a, b) => a - b);

    for(let index = 0; index < values.length - 1; index++) {
        const diff = values[index + 1] - values[index];

        if(diff > maxDiff) {
            maxDiff = diff;
        }
    }

    return maxDiff;
}

console.log(getMaxDiff([130, 140, 132, 104, 124, 64]));
