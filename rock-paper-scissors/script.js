let computerWins = 0;
let playerWins = 0;

function computerPlay() {
    return Math.round(Math.random() * (3 - 1) + 1);
}

function playRound(playerSelection) {
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
        return ++playerWins;
    } else if (playerSelection === 3 && computerSelection === 1) {
        return ++computerWins;
    } else if (playerSelection > computerSelection) {
        return ++playerWins;
    } else if (computerSelection > playerSelection) {
        return ++computerWins;
    } else {
        return "The game was a tie!";
    }
}

let results = document.querySelector('#results');
let winner = document.querySelector('#winner')

const buttons = document.querySelectorAll('button');
let totalWins = `Player: ${playerWins} Computer: ${computerWins}`;
results.textContent = totalWins;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        console.log(playerWins, computerWins)
        totalWins = `Player: ${playerWins} Computer: ${computerWins}`;
        results.textContent = totalWins;
        if (playerWins === 5) {
            winner.textContext = "You won!"
        } else if (computerWins === 5) {
            winner.textContent = `The computer won!`
        }
    });
});