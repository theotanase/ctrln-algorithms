function getMostFrequentAge(ages) {
    let maxPeople = 0;
    let mostFrequentAge = 0;

    const buckets = [];
    for (let i = 0; i <= 140; i++) {
        buckets[i] = 0;
    }

    for (const age of ages) {
        buckets[age]++;
        if (buckets[age] > maxPeople) {
            maxPeople = buckets[age];
            mostFrequentAge = age;
        }
    }

    return mostFrequentAge;
}

const ages = [20, 30, 15, 17, 30, 35, 29, 30, 45, 30, 21];

console.log(getMostFrequentAge(ages));
