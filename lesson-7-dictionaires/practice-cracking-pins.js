const md5 = require('md5');

function getPINByHash(hashToCrack) {

    for (let c1 = 0; c1 <= 9; c1++) {
        for (let c2 = 0; c2 <= 9; c2++) {
            for (let c3 = 0; c3 <= 9; c3++) {
                for (let c4 = 0; c4 <= 9; c4++) {
                    const pin = `${c1}${c2}${c3}${c4}`;
                    const currentHash = md5(pin);

                    if (currentHash == hashToCrack) {
                        return pin;
                    }
                }
            }
        }
    }
}

console.log(getPINByHash("e2a7555f7cabd6e31aef45cb8cda4999")); //7654
