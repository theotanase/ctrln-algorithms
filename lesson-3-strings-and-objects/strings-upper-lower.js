function transform(destination) {
    const firstLetter = destination.substr(0, 1);
    const remainder = destination.substr(1, destination.length - 1);

    const capitalizedFistLetter = firstLetter.toUpperCase();
    const lowerRemainder = remainder.toLowerCase();

    const transformedString = capitalizedFistLetter + lowerRemainder;

    return transformedString;
}

console.log(transform("BUCURESTI"));
console.log(transform("bucuRESTI"));

console.log(transform("BUCURESTI") == transform("bucuRESTI"));
