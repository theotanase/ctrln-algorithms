const orders = [
    {
        id: "ABC101",
        total: 150,
        products: [
            {
                price: 100,
                name: "Laptop",
            },
            {
                price: 50,
                name: "Printer",
            },
        ]
    },
    {
        id: "ABC102",
        total: 200,
        products: [
            {
                price: 100,
                name: "Laptop",
            },
            {
                price: 100,
                name: "TV",
            },
        ]
    },
];

const serializedOrders = JSON.stringify(orders);

console.log(serializedOrders);

const fs = require('fs');

fs.writeFileSync('serializedOrders.txt', serializedOrders);
