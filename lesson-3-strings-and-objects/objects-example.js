const persons = [
    {
        name: "Ion popescu",
        age: 26,
    },
    {
        name: "George Georgescu",
        age: 17,
    },
    {
        name: "Vasile Vasilescu",
        age: 33
    }
];

for (const person of persons) {
    if (person.age >= 18) {
        console.log(person.name + " are drept de vot");
    }
}




