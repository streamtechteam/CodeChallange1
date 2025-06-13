const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const players1 = game.players[0]
console.log("DEBUG:Players1 " + players1)
const players2 = game.players[1]
console.log("DEBUG:Players2 " + players2)
const players1final = [...game.players[0] , "Thiago" , "Countinho" , "Perisic"]

const team1 = {
    gk:players1[0],
    fieldPlayers: players1.slice(1)
}

const team2 = {
    gk:players1[0],
    fieldPlayers: players1.slice(1)

}

const allplayers = [...players1 , ...players2]
const team1odd = game.odds.team1
const drawodd = game.odds.x
const team2odd = game.odds.team2

function printGoal() {
    let players = [];
    let scoredPlayers = []

    for(let i = 0; i < arguments.length;i++){
        if(allplayers.includes(arguments[i])){
            players.push(arguments[i])
        }
    }    

    for(let i = 0; i < arguments.length; i++){
        if (game.scored.includes(arguments[i]))
        {
            console.log(scoredPlayers)
            scoredPlayers = [...scoredPlayers , arguments[i]]

            
        }
    }
    console.log(...players)
    console.log(scoredPlayers.length)

    // for(let i = 0; i < number; i++){
    //     players.push(allplayers[i])
    // }
    // console.log(players)
    // console.log(scoredPlayers)
}

console.log(team1)
console.log(allplayers)



printGoal("Hakimi","Gotze","Gnarby","Hummels")