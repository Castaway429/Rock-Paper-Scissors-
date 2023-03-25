const choices = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("#headings"); 
const results = document.getElementById("actionmessage");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const rock_img = document.getElementById("rock-img");
const paper_img = document.getElementById("paper-img");
const scissors_img = document.getElementById("scissors-img");
const human_image = document.getElementById("pimp");
const computer_image = document.getElementById("comimg");


function getComputerChoice() {
    const computerChoice = Math.floor(Math.random()* 3);
   
   if (computerChoice === 0) {
    document.getElementById("comimg").src = "https://em-content.zobj.net/thumbs/160/apple/271/rock_1faa8.png";
   } else if (computerChoice === 1) {
    document.getElementById("comimg").src = "https://em-content.zobj.net/thumbs/120/apple/325/page-facing-up_1f4c4.png";
   } else if (computerChoice === 2) {
    document.getElementById("comimg").src = "https://em-content.zobj.net/thumbs/160/apple/81/black-scissors_2702.png";
   }

    return choices[computerChoice]
}

function toTitleCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results.innerHTML = `You chose ${toTitleCase(userChoice)} which beats ${toTitleCase(computerChoice)}. You win!`;


}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results.innerHTML = `The Computer chose ${toTitleCase(computerChoice)} which beats ${toTitleCase(userChoice)}. You lose!`;

}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results.innerHTML =  `The Computer chose ${toTitleCase(computerChoice)} which is the same as ${toTitleCase(userChoice)}. It's a draw!`;
 
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener("click", () => game("rock"));
    paper_div.addEventListener("click", () => game("paper"));
    scissors_div.addEventListener("click", () => game("scissors"));
}

window.addEventListener('load', function() {
    var rock = document.getElementById("rock");
    var paper = document.getElementById("paper");
    var scissors = document.getElementById("scissors");

    rock.addEventListener('click', function() {
        document.getElementById('pimg').src = "https://em-content.zobj.net/thumbs/160/apple/271/rock_1faa8.png";
    });

    paper.addEventListener('click', function() {
        document.getElementById('pimg').src="https://em-content.zobj.net/thumbs/120/apple/325/page-facing-up_1f4c4.png";
    });

    scissors.addEventListener('click', function() {
        document.getElementById('pimg').src = "https://em-content.zobj.net/thumbs/160/apple/81/black-scissors_2702.png";
    });
});

main();
