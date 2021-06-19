function binarySearch(values, needle) {
    let start = 0;
    let end = values.length - 1;
    let found = false;

    while (!found && start <= end) {
        const middleIndex = Math.floor((start + end) / 2);
        const middleValue = values[middleIndex];

        if (needle == middleValue) {
            found = true;
        } else {
            if (needle < middleValue) {
                end = middleIndex - 1;
            } else {
                start = middleIndex + 1;
            }
        }
    }

    return found;
}

console.log(binarySearch([2, 4, 5, 10, 15, 20, 26, 28, 40], 11));
console.log(binarySearch(["Alba ca zapada", "Cei trei purcelusi", "Harry potter"],
    "Aventurile lui gulliver"));
