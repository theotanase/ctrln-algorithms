const numbers = [60, 57, 55, 48, 45, 40, 30, 28, 23, 20, 15];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

console.log("Ultimele patru numere");

for (let index = numbers.length - 1; index >= numbers.length - 4; index --) {
    console.log(numbers[index]);
}
