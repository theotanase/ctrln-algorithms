const fs = require('fs');

const fileContent = fs.readFileSync('temperature-data.txt');
const fileContentAsString = fileContent.toString();

const citiesData = JSON.parse(fileContentAsString);

let maxTemperature = -99999;
let totalTemperatures = 0;

for (const city of citiesData) {
    const temperatureTokens = city.temperature.split(" ");
    const degrees = temperatureTokens[0];
    const degreesAsNumber = parseInt(degrees);

    if (degreesAsNumber > maxTemperature) {
        maxTemperature = degreesAsNumber;
    }

    totalTemperatures = totalTemperatures + degreesAsNumber;
}

const averageTemperature = totalTemperatures / citiesData.length;

console.log(`Max temperature is ${maxTemperature}`);
console.log(`Average temperature is ${averageTemperature}`);
