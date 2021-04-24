function isDigit(character) {
    return "0" <= character && character <= "9";
}

function isLetter(character) {
    const isUppercaseLetter = "A" <= character && character <= "Z";
    const isLowercaseLetter = "a" <= character && character <= "z";

    return isLowercaseLetter || isUppercaseLetter;
}

console.log(isDigit("5"));

console.log(isDigit("R"));

console.log(isLetter("7"));

console.log(isLetter("c"));

console.log(isLetter("M"));

console.log("Pop" < "Popa");
