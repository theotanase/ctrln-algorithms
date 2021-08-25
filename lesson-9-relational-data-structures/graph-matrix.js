const cities = ["Sf. Gheorghe", "Brasov", "Ploiesti",
    "Bucuresti", "Tulcea", "Constanta"];

const roadsMatrix = [
    [0, 1, 0, 0, 0, 0,],
    [1, 0, 1, 0, 0, 0,],
    [0, 1, 0, 1, 0, 0,],
    [0, 0, 1, 0, 0, 1,],
    [0, 0, 0, 0, 0, 1,],
    [0, 0, 0, 1, 1, 0,],
];

roadsMatrix[2][4] = 1;
roadsMatrix[4][2] = 1;

for (let line = 0; line < roadsMatrix.length; line++) {
    for (let column = line + 1; column < roadsMatrix.length; column++) {
        const hasRoad = roadsMatrix[line][column];
        if (hasRoad == 1) {
            const firstCity = cities[line];
            const secondCity = cities[column];

            console.log(`Exista drum direct intre ${firstCity} si ${secondCity}`);
        }
    }
}


