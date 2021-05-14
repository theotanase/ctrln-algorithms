function longestWinSequenceWithAllCases(outcomes) {
    let mostWins = 0;

    for (let left = 0; left < outcomes.length; left++) {
        for (let right = left; right < outcomes.length; right++) {
            if (hasOnlyWins(outcomes, left, right)) {
                const wins = right - left + 1;
                if (wins > mostWins) {
                    mostWins = wins;
                }
            }
        }
    }

    return mostWins;
}

function hasOnlyWins(outcomes, left, right) {
    for (let index = left; index <= right; index++) {
        if (outcomes[index] != 'W') {
            return false;
        }
    }

    return true;
}

function longestWinSequenceNatural(outcomes) {
    let maxWins = 0;
    let left = 0;

    while(left < outcomes.length) {
        if(outcomes[left] == 'W') {
            let wins = 1;
            let right = left + 1;
            while (right < outcomes.length && outcomes[right] == 'W') {
                wins++;
                right++;
            }

            if(wins > maxWins) {
                maxWins = wins;
            }

            left = right;
        }else {
            left ++;
        }
    }

    return maxWins;
}

const chelseaResults = [ 'L', 'W', 'W', 'D', 'D', 'W', 'W', 'W', 'W', 'W', 'L'];

console.log(longestWinSequenceWithAllCases(chelseaResults));
console.log(longestWinSequenceNatural(chelseaResults));
