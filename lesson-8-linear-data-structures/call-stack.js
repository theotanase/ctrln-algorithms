function functionA(x, y) {

    const b = functionB(x, y);

    const c = functionC(x);

    const d = functionD(y);

    return b + c * d;
}

function functionB(x, y) {
    const e = functionE(x);

    const d = functionF(y);

    return e - d;
}

function functionC(x) {
    return x * 4;
}

function functionD(y) {
    return y - 2;
}

function functionE(x) {
    return x * 10;
}

function functionF(y) {
    return y / 10;
}

// console.log(functionA(1, 2));

function recursiveDivision(x) {
    // if (x < 1) {
    //     return 0;
    // }

    return 1 + recursiveDivision(x / 2);
}

console.log(recursiveDivision(100));
