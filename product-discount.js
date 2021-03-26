function calculatePriceWithDiscount(initialPrice, isAlreadyOnSale) {
    let priceWithDiscount;
    if (isAlreadyOnSale === true) {
        priceWithDiscount = initialPrice;
    } else {
        priceWithDiscount = initialPrice - 10;
    }

    if (priceWithDiscount < 0.5 * initialPrice) {
        priceWithDiscount = 0.5 * initialPrice;
    }

    const finalPrice = priceWithDiscount;

    return finalPrice;
}

console.log(calculatePriceWithDiscount(50, false));
console.log(calculatePriceWithDiscount(50, true));
console.log(calculatePriceWithDiscount(15, false));
