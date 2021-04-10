function getNumberOfVoters(years) {
    let counter = 0;

    const currentYear = new Date().getFullYear();

    for (const year of years) {
        if (currentYear - year >= 18) {
            counter = counter + 1;
        }
    }

    return counter;
}

console.log(getNumberOfVoters([1995, 2000, 1997, 2010]));
