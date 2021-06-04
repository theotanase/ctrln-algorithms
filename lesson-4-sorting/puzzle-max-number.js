function getMaxNumber(number) {
    const digits = extractDigits(number);

    digits.sort((a, b) => b - a);

    const maxNumber = mergeDigits(digits);

    return maxNumber;
}

function extractDigits(number) {
    const digits = [];

    while(number > 0) {
        const lastDigit = number % 10;
        number = Math.floor(number / 10);
        digits.push(lastDigit);
    }

    return digits;
}

function mergeDigits(digits) {
    let createdNumber = 0;

    for(let digit of digits) {
        createdNumber = createdNumber * 10 + digit;
    }

    return createdNumber;
}

console.log(extractDigits(23456712));
console.log(mergeDigits([4, 3, 2, 5]));
console.log(mergeDigits(extractDigits(23456712)));

console.log(getMaxNumber(21345999));
