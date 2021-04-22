const plateNumbers = [
    "IS 43 ABC",
    "CJ 20 EFG",
    "B 101 EDC",
    "CJ 30 XYZ"
];

let counter = 0;

for (const plateNumber of plateNumbers) {
    const county = plateNumber.substr(0, 2);
    if(county == "CJ") {
        counter++;
    }
}

console.log("Am gasit " + counter + " numere din judetul Cluj");
