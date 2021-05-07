const fs = require('fs');

const fileData = fs.readFileSync('serializedOrders.txt');

console.log(fileData.toString());

console.log(fileData);

const orders = JSON.parse(fileData.toString());

console.log(orders);

let total = 0;

for(const order of orders) {
    total += order.total;
}

console.log("Orders total is " + total);
