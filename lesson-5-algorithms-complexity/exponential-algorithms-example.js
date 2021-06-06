const numberOfElements = 1000 * 10 * 5 ;

const numbers = [];

for (let i = 0; i < numberOfElements; i++) {
    numbers.push(Math.random() * 1000);
}

const startTimestamp = (new Date()).getTime();

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            const aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}

const endTimestamp = (new Date()).getTime();

const durationMS = endTimestamp - startTimestamp;

console.log(`Algoritm N^2. Dimensiunea input: ${numberOfElements}. Durata ms: ${durationMS}`);

