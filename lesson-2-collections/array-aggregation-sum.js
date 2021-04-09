function getTotal(prices) {
    let total = 0;

    for (const price of prices) {
        total = total + price;
    }

    return total;
}

console.log(getTotal([15, 30, 20, 12, 18, 55]));
