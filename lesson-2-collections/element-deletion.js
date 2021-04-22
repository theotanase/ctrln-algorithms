const values = [15, 20, -150, 22, 18, 23, 20];

const validValues = [];

for (let index = 0; index < values.length; index++) {
    if (index != 2) {
        validValues.push(values[index]);
    }
}

console.log(validValues);
