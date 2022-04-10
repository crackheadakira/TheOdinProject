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
        ++playerWins;
        return alert(`The player wins! You currently have ${playerWins} wins`)
    } else if (playerSelection === 3 && computerSelection === 1) {
        ++computerWins;
        return alert(`The computer wins! They currently have ${computerWins} wins`)
    } else if (playerSelection > computerSelection) {
        ++playerWins;
        return alert(`The player wins! You currently have ${playerWins} wins`)
    } else if (computerSelection > playerSelection) {
        ++computerWins;
        return alert(`The computer wins! They currently have ${computerWins} wins`)
    } else {
        return alert("The game was a tie!");
    }
}

function game() {
    while (playerWins < 3 && computerWins < 3) {
        playRound()
    }
    if(playerWins === 3){
        alert("You won best of 3!")
    } else {
        alert("You sadly lost against the computer in a best of 3!")
    }
}

game()