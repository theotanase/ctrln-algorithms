const people = [
    {
        name: "Ion",
        age: 34
    },
    {
        name: "Mihai",
        age: 19
    },
    {
        name: "Elena",
        age: 31
    }
];

function compareByAgeAscending(personA, personB) {
    return  personA.age - personB.age;
}

function compareByNameAscending(personA, personB) {
    if(personA.name < personB.name) {
        return -1;
    }

    if(personA.name > personB.name) {
        return 1;
    }

    return 0;
}

console.log(people.sort(compareByAgeAscending));
console.log(people.sort(compareByNameAscending));


const numbers = [
    10, 13,2, 100, 120, -1, 34, 45
];

function compareNumbers(numberA, numberB) {
    return numberB - numberA;
}

console.log(numbers.sort(compareNumbers));
