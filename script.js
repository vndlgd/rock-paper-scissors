// list of available choices in game
const choices = ["rock", "paper", "scissors"];

// initial score of users at start of game
let userScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

// retrieve a random choice in choices list to assign to computerSelection
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let results = "";

    // store results for whoever wins this current round
    results = getRoundWinner(playerSelection, computerSelection);

    // error catching
    if (results === "") {
        console.error("You have a bug");
    }

    updateScores(results);

    return results;
}

function getRoundWinner(playerSelection, computerSelection) {
    let winner = ""
    // make user input case insensitive
    playerSelection = playerSelection.toLowerCase();

    // if user chooses same choice as computer 
    if (playerSelection === computerSelection) {
        winner = "It's a Tie!";
    }

    // if user chooses rock
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            winner = "You Lose! Paper beats Rock";
        }
        else if (computerSelection === "scissors") {
            winner = "You Win! Rock beats Paper";
        }
    }

    // if user chooses paper
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            winner = "You Win! Paper beats Rock";
        }
        else if (computerSelection === "scissors") {
            winner = "You Lose! Scissors beats Paper";
        }
    }

    // if user chooses scissors
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            winner = "You Lose! Rock beats Scissors";
        }
        else if (computerSelection === "paper") {
            winner = "You Win! Scissors beats Paper";
        }
    }

    return winner;
}

function updateScores(result) {
    if (result.substring(0, 7) === "You Win") {
        userScore += 1;
    }
    else if (result.substring(0, 8) === "You Lose") {
        computerScore += 1;
    }
}

// print winner of the game
function printGameWinner() {
    if (userScore > computerScore) {
        console.log("You Won!");
    }
    else if (computerScore > userScore) {
        console.log("You Lost!");
    }
    else {
        console.log("It's a Tie!");
    }
}


function game() {
    let result = "";

    // let playerSelection = prompt("Enter your choice (rock, paper, scissors):");
    const buttons = document.querySelector('#buttons');
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');

    // place text inside of each button
    rock.textContent = 'Rock';
    paper.textContent = 'Paper';
    scissors.textContent = 'Scissors';

    // place element into the DOM 
    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);

    const displayResult = document.querySelector('#displayResult');
    const winner = document.createElement('div');

    // when button is clicked, playerSelection equals value inside of button 
    document.getElementById('buttons').addEventListener("click", function (e) {
        playerSelection = e.target.textContent;
        console.log(playerSelection);
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        // display results on page
        winner.textContent = result;
        displayResult.appendChild(winner);
        // console.log(result);
    });



    // printGameWinner();
}

// play game 
game();
