var md5 = require('md5');

const hash1 = md5('abc');
const hash2 = md5('abcd');

console.log(hash1);
console.log(hash2)

const hash1Index = parseInt(hash1, 16);

console.log(hash1Index);

// SHA - Secure Hash Algorithm
// SHA - 256
