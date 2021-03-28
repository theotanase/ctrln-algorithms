function calculateMaxHeight(h1, h2, h3) {
    let maxHeight;

    if (h1 > h2) {
        if (h1 > h3) {
            maxHeight = h1;
        } else {
            maxHeight = h3;
        }
    } else {
        if (h2 > h3) {
            maxHeight = h2;
        } else {
            maxHeight = h3;
        }
    }

    return maxHeight;
}

console.log(calculateMaxHeight(175, 192, 185));
console.log(calculateMaxHeight(180, 177, 180));
