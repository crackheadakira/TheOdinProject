let computerWins = 0;
let playerWins = 0;

function computerPlay() {
    return Math.round(Math.random() * (3 - 1) + 1);
}

function playRound() {
    let playerSelection = prompt("What are you going to play? Rock, Paper or Scissors").toUpperCase()
    let computerSelection = computerPlay()

    switch (playerSelection) {
        case "ROCK":
            playerSelection = 1;
            break;
        case "PAPER":
            playerSelection = 2;
            break;
        case "SCISSORS":
            playerSelection = 3;
            break;

    }

    if (playerSelection === 1 && computerSelection === 3) {
        console.log("The player wins!")
        return ++playerWins;
    } else if (playerSelection === 3 && computerSelection === 1) {
        console.log("The computer wins!")
        return ++computerWins;
    } else if (playerSelection > computerSelection) {
        console.log("The player wins!");
        return ++playerWins;
    } else if (computerSelection > playerSelection) {
        console.log("The computer wins!");
        return ++computerWins;
    } else {
        return console.log("The game was a tie!");
    }
}

function game() {
    while (playerWins < 3 && computerWins < 3) {
        playRound()
        console.log(`You have won ${playerWins} times!`)
        console.log(`The computer has won ${computerWins} times!`)
    }
}

game()