/*
0 - 17
18 - 29
30 - 49
50 - 65
66 ->
 */

/*
person -> name, age
 */

function bucketSort(persons) {
    const numberOfBuckets = 5;
    const buckets = [];

    for (let index = 0; index < numberOfBuckets; index++) {
        buckets.push([]);
    }

    for (const person of persons) {
        const bucketIndex = getBucketIndex(person);
        const bucket = buckets[bucketIndex];
        bucket.push(person);
    }

    // ? Daca dorim sa sortam si elementele din fiecare bucket

    for (const bucket of buckets) {
        sortBucket(bucket);
    }

    for (const bucket of buckets) {
        for (const person of bucket) {
            console.log(`${person.name}, ${person.age}`);
        }
    }
}

function getBucketIndex(person) {
    const age = person.age;

    if (age > 65) {
        return 4;
    }

    if (age > 49) {
        return 3;
    }

    if (age > 29) {
        return 2;
    }

    if (age > 17) {
        return 1;
    }

    return 0;
}

function sortBucket(bucket) {
    for (let index = 0; index < bucket.length - 1; index++) {
        for (let j = index + 1; j < bucket.length; j++) {
            if (bucket[index].age > bucket[j].age) {
                const auxPerson = bucket[index];
                bucket[index] = bucket[j];
                bucket[j] = auxPerson;
            }
        }
    }
}

const persons = [
    {
        name: "John",
        age: 24,
    },
    {
        name: "Michael",
        age: 15,
    },
    {
        name: "George",
        age: 55,
    },
    {
        name: "Olliver",
        age: 7,
    },
    {
        name: "Smith",
        age: 33,
    },

]
bucketSort(persons);
