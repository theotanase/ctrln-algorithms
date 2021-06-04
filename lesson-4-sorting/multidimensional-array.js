const attempts = [
    [110, 100, 95,],
    [110, 115, 112],
    [90, 97, 103],
    [100, 120, 105]
];

for (let athlete = 0; athlete < attempts.length; athlete++) {

    let max = 0;

    for (let attempt = 0; attempt < 3; attempt++) {
        const score = attempts[athlete][attempt];

        if (score > max) {
            max = score;
        }
    }

    console.log("Maximul sportivului curent este " + max);
}
