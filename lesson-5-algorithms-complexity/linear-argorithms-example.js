const numberOfElements = 100000 * 10 * 10 * 10 * 10;

const startTimestampMS = (new Date()).getTime();

let sum = 0;

for(let i = 0; i < numberOfElements; i++) {
    const randomNumber = Math.random();
    sum = sum + randomNumber;
}

const endTimestampMS = (new Date()).getTime();

const durationMS = endTimestampMS - startTimestampMS;

console.log(`Pentru ${numberOfElements} , algoritmul a durat: ${durationMS} ms`);
