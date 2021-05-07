const price = 12.5;

console.log("Pretul este " + price);

const pricesArray = [10, 12, 15, 20];

console.log("Preturile sunt " + pricesArray);

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return "Nume: " + this.name + " . Pret: " + this.price;
    }
}


const productInstance = new Product("TV Samsung", 1400);
const anotherProduct = new Product("TElefon mobil", 950);

console.log("Produsul cumparat " + productInstance);
console.log("Produs returnat " + anotherProduct);
