


function calculateVATForPrices(prices) {

    for (const price of prices) {
        const vat = 0.19 * price;

        console.log(vat);
    }
}

calculateVATForPrices([1000, 500, 250, 3000, 2000, 100, 240, 3000, 280, 1000, 30000]);
