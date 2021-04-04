const scores = [100, 75, 30, 20, 15, 12, 9];

let numberOfItemsToDisplay = Math.min(scores.length, 5);

for (let index = 0; index < numberOfItemsToDisplay; index++) {
    console.log(scores[index]);
}
