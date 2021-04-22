function hasOnlyDigits(phone) {
    let isValid = true;

    for (let index = 0; index < phone.length; index++) {
        const character = phone.charAt(index);
        if (!isDigit(character)) {
            isValid = false;
        }
    }

    return isValid;
}

function isDigit(character) {
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return digits.includes(character);
}

console.log(hasOnlyDigits("0747abc555"));
console.log(hasOnlyDigits("0747123456"));
