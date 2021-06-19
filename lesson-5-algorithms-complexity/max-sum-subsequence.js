const numbers = [6, -8, 3, 2, -1, 5, -3, 7, -20, 10];

// Varianta 1 - N^3
let bestSum1 = 0;
let bestStart1 = 0;
let bestEnd1 = 0;

for (let start = 0; start < numbers.length; start++) {
    for (let end = start; end < numbers.length; end++) {
        let sum = 0;
        for (let index = start; index <= end; index++) {
            sum = sum + numbers[index];
        }
        if (sum > bestSum1) {
            bestSum1 = sum;
            bestStart1 = start;
            bestEnd1 = end;
        }
    }
}

console.log(`Varianta1: Secventa de suma maxima: ${bestSum1}. Start ${bestStart1} , End ${bestEnd1}`);


// Varianta 2
let bestSum2 = 0;
let bestStart2 = 0;
let bestEnd2 = 0;

for (let start = 0; start < numbers.length; start++) {

    let currentSum = 0;

    for (let end = start; end < numbers.length; end++) {
        currentSum += numbers[end];
        if(currentSum > bestSum2) {
            bestSum2 = currentSum;
            bestStart2 = start;
            bestEnd2 = end;
        }
    }
}

console.log(`Varianta2: Secventa de suma maxima: ${bestSum2}. Start ${bestStart2} , End ${bestEnd2}`);

// Varianta 3 - N
let bestSum = 0;
let bestStart = 0;
let bestEnd = 0;

let start = 0;
let currentSum = 0;

for(let end = 0; end < numbers.length; end++)  {
    currentSum = currentSum + numbers[end];
    if(currentSum < 0) {
        start = end + 1;
        currentSum = 0;
    } else {
        if(currentSum > bestSum) {
            bestSum = currentSum;
            bestStart = start;
            bestEnd = end;
        }
    }
}

console.log(`Varianta3: Secventa de suma maxima: ${bestSum}. Start ${bestStart} , End ${bestEnd}`);

