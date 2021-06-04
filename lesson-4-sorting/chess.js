const table = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0],
];

let iQ;
let jQ;
let iK;
let jK;

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (table[i][j] == 1) {
            iQ = i;
            jQ = j;
        }
        if(table[i][j] == 2) {
            iK = i;
            jK = j;
        }
    }
}

if(iQ == iK) {
    console.log("Sunt pe aceeasi linie. Regina poate ataca");
}

if(jQ == jK) {
    console.log("Sunt pe aceeasi coloana. Regina poate ataca");
}

if (Math.abs(iQ - iK) == Math.abs(jQ - jK)) {
    console.log("Sunt pe diagonala. Regina poate ataca");
}
