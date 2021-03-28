function calculateTimeByBike(distance) {
    const time = distance / 15;

    return time;
}

function calculateTimeByCar(distance, departureTime) {
    let speed;

    if (departureTime >= 9 && departureTime <= 19) {
        speed = 10;
    } else {
        speed = 30;
    }

    const time = distance / speed;

    return time;
}

function calculateShortestTime(distance, departureTime) {
    const timeByBike = calculateTimeByBike(distance);
    const timeByCar = calculateTimeByCar(distance, departureTime);
    let bestTime;
    if (timeByBike < timeByCar) {
        bestTime = timeByBike;
    } else {
        bestTime = timeByCar;
    }

    const bestTimeInMinutes = bestTime * 60;

    return bestTimeInMinutes;
}

console.log(calculateShortestTime(5, 7));

