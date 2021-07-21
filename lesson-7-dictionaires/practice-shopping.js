const S = 100;

const prices = [30, 50, 70, 60, 40, 50];

const numbersFound = {};

for (const price of prices) {
    const diff = S - price;

    const needle = diff.toString();

    const valueStored = numbersFound[needle];

    if (valueStored != undefined) {
        console.log(`Am gasit perechea ${price}, ${diff}`);
    }

    numbersFound[price.toString()] = true;
}
