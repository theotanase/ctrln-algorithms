const orders = [
    {
        name: "Ion Popescu",
        clientCode: "ABC12",
        products: [
            {
                sku: 'SK1257',
                quantity: 2,
                price: 20,
            },
            {
                sku: 'QW123',
                quantity: 1,
                price: 20,
            },
            {
                sku: 'RT5647',
                quantity: 3,
                price: 25,
            },

        ],
        total: 130
    },
    {
        name: "Ion Popescu",
        clientCode: "ABC12",
        products: [
            {
                sku: 'FG1357',
                quantity: 1,
                price: 25,
            },
            {
                sku: 'QW123',
                quantity: 1,
                price: 20,
            },
            {
                sku: 'TY45645654',
                quantity: 1,
                price: 25,
            },

        ],
        total: 130
    },
    {
        name: "George Georgescu",
        clientCode: "XY778",
        products: [
            {
                sku: 'SK1257',
                quantity: 2,
                price: 20,
            },
            {
                sku: 'QW123',
                quantity: 1,
                price: 20,
            },
            {
                sku: 'RT5647',
                quantity: 3,
                price: 25,
            },

        ],
        total: 130
    },
];

const stats = {};

for (const order of orders) {
    const clientCode = order.clientCode;

    for (const product of order.products) {
        const productCode = product.sku;

        const key =  getCompositeKey(clientCode, productCode);

        if (!stats[key]) {
            stats[key] = 0;
        }

        stats[key] = stats[key] + product.quantity;
    }
}

const queryKey = getCompositeKey(`ABC12`, `QW123`); //2

function getCompositeKey(clientCode, productCode) {
    return `${clientCode}_${productCode}`;
}

console.log(stats[queryKey]);
