const prompt = require('prompt-sync')();

// Vrem sa intrebam 10 persoane care este varsta lor

const ages = [];

for (let counter = 1; counter <= 10; counter++) {
    const answer = prompt("Care este varsta ta?");

    ages.push(answer);
}

console.log(ages);
