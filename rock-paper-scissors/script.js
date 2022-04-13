let computerWins = 0;
let playerWins = 0;
let gameWinner;

let gameResults = document.querySelector('.gameResults')
let computerPicks = ["rock", "paper", "scissors"];
let results = document.querySelector('.results');
let winner = document.querySelector('.winner')
let buttons = document.querySelectorAll('button');

results.textContent = `Player: ${playerWins} Computer: ${computerWins}`;

function playRound(playerSelection) {
    let computerPick = Math.floor(Math.random() * computerPicks.length);

    playerSelection = playerSelection.toLowerCase()
    let computerSelection = computerPicks[computerPick].toLowerCase()

    console.log(playerSelection, computerSelection)

    if (computerSelection == "rock" && playerSelection == "scissors" ||
        computerSelection == "paper" && playerSelection == "rock" ||
        computerSelection == "scissors" && playerSelection == "paper") {

        gameWinner = "Computer won round!";
        return computerWins++;

    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {

        gameWinner = "Player won round!"
        return playerWins++;

    } else if (playerSelection == computerSelection) {
        return gameWinner = "Round was tie!"
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.firstChild.data);
        results.textContent = `Player: ${playerWins} Computer: ${computerWins}`;
        gameResults.textContent = gameWinner;
        if (playerWins == 5) { winner.textContent = `You were the winner!` }
        else if (computerWins == 5) { winner.textContent = `The computer won!` }
    });
});