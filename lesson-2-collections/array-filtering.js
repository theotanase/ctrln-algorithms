function getPricesInBudget(prices) {
    const pricesInBudget = [];

    for(const price of prices) {
        if(price < 2000) {
            pricesInBudget.push(price);
        }
    }

    return pricesInBudget;
}

const bestOffers = getPricesInBudget([1500, 200, 2000, 3000, 1700]);

console.log(bestOffers);
