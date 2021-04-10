function getDaysAgoMaxPushups(pushupsEachDay) {
    let max = -1;
    let indexOfMax;

    for (let index = 0; index < pushupsEachDay.length; index++) {
        if (pushupsEachDay[index] > max) {
            max = pushupsEachDay[index];
            indexOfMax = index;
        }
    }

    const daysAgo = pushupsEachDay.length - indexOfMax;

    return daysAgo;
}

console.log(getDaysAgoMaxPushups([10, 25, 20, 15, 14, 20]));
