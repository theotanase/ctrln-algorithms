const somePlayers = [
    {
        name: "John",
        skill: 5,
    },
    {
        name: "Michael",
        skill: 15,
    },
    {
        name: "George",
        skill: 13.4,
    },
    {
        name: "Olliver",
        skill: 19,
    },
    {
        name: "Adam",
        skill: 9,
    },
    {
        name: "AnotherPlayer",
        skill: 10.3,
    },

];

function formTeams(players) {
    players.sort((playerA, playerB) => playerA.skill - playerB.skill);

    let start = 0;
    let end = players.length - 1;

    while (start < end) {
        const playerA = players[start];
        const playerB = players[end];
        const teamSkill = playerA.skill + playerB.skill;

        start ++;
        end --;

        console.log(`Team: ${playerA.name} and ${playerB.name}. TeamSkill: ${teamSkill}`);
    }
}

formTeams(somePlayers);
