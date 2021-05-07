class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log("Hi! My name is " + this.name + " and I am " + this.age + " years old");
    }
}


const persons = [
    new Person("Ion popescu", 26),
    new Person("George Georgescu", 17),
    new Person("Vasile Vasilescu",33),
];

for (const person of persons) {
    if (person.age >= 18) {
        person.sayHello();
    }
}
