const prompt = require('prompt-sync')();

const amountInput = prompt("Introduceti suma:");
const euroValueInput = prompt("Introduceti cursul zilei");

const amount = parseInt(amountInput);
const euroValue = parseFloat(euroValueInput);

if (isNaN(amount) || isNaN(euroValue)) {
    console.log("Valorile introduse nu sunt numere");
} else {
    const ronValue = amount / euroValue;

    console.log("Rezultatul in RON este: " + ronValue);
}


