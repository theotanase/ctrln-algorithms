const person1 = {
    name: "Ion Popescu",
    age: 35
};

const person2 = {
    name: "Ion Popescu",
    age: 32
};

function comparePersons(p1, p2) {
    return p1.name == p2.name && p1.age == p2.age;
}

console.log(comparePersons(person1, person2));

const numbers = [20, 23, 35];

const values = [20, 23, 21];

console.log(numbers == values);

function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] != arr2[index]) {
            return false;
        }
    }

    return true;
}

console.log(compareArrays([12, 12, 13], [12, 12, 13]));
