const address = "Romania 123456 Iasi";
const addressComponents = address.split(" ");
const postalCode = addressComponents[1];

console.log(addressComponents);
console.log("The postal code is " + postalCode);

const formattedAddress = addressComponents.join(", ");
console.log("Formatted address is " + formattedAddress);


const plateNumbers = [
    "IS 43 ABC",
    "CJ 20 EFG",
    "B 101 EDC",
    "CJ 30 XYZ"
];

let counter = 0;

for (const plateNumber of plateNumbers) {
    const plateNumberComponents = plateNumber.split(" ")
    const county = plateNumberComponents[0];

    if(county == "CJ") {
        counter++;
    }
}

console.log("Am gasit " + counter + " numere din judetul Cluj");
