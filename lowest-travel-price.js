function calculatePriceByTrain(distance) {
    const cost = distance * 1;

    return cost;
}

function calculatePriceByPlane(distance) {
    const cost = distance * 0.5 + 200;

    return cost;
}

function getCheapestOption(distance) {

    const costByTrain = calculatePriceByTrain(distance);

    const costByPlane = calculatePriceByPlane(distance);

    if(costByTrain < costByPlane) {
        console.log("Train");
    } else {
        console.log("Plane");
    }
}

getCheapestOption(200);
