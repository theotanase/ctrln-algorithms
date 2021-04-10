function getLowestTemperature(temperatures) {
    let min = 9999999;

    for (const t of temperatures) {
        if (t < min) {
            min = t;
        }
    }

    return min;
}

console.log(getLowestTemperature([ 12000, 24000, 10500, 25000]));
