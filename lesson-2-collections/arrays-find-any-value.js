function hasRable(years) {
    let foundOne = false;

    for (const year of years) {
        if (year <= 2021 - 8) {
            foundOne = true;
        }
    }

    return foundOne;
}

function hasRableWithPreemptiveReturn(years) {
    for (const year of years) {
        if (year <= 2021 - 8) {
            return true;
        }
    }

    return false;
}

const years = [2019, 2019, 2015, 2020, 2021];

console.log(hasRable(years));
console.log(hasRableWithPreemptiveReturn(years));
