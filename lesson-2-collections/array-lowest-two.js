function getLowestTwo(prices) {
    let min = 9999999;
    let secondMin = 9999999;

    for(const price of prices) {
        if(price < min) {
            secondMin = min;
            min = price;
        } else {
            if (price < secondMin) {
                secondMin = price;
            }
        }
    }

    return [min, secondMin];
}

console.log(getLowestTwo([1000, 900, 800, 1200, 1500, 750, 600, 650]));
