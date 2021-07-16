function isPrime(number) {
    for (let d = 2; d <= Math.sqrt(number); d++) {
        if (number % d == 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(15)); // 3, 5 -> false

console.log(isPrime(31)); // - true

function getNextPrimeNumberAtLeastDouble(primeNumber) {

    let numberToCheck = primeNumber * 2;

    while (!isPrime(numberToCheck)) {
        numberToCheck++;
    }

    return numberToCheck;
}

console.log(getNextPrimeNumberAtLeastDouble(13)); //29
console.log(getNextPrimeNumberAtLeastDouble(29)); // 59 ?
