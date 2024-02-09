//this function to choose random value for the computer rock, paper or scissors
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        return "Rock";
    } else if (number == 2) {
        return "Scissors";
    } else {
        return "Paper";
    }
}
//this function to play single round in rock-paper-scissors game
function playRound(computerSelection, playerSelection) {
    //this line to convert user input to be in form the first char is uppercase and other characters is lowerCase
    playerSelection = (playerSelection.at(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
    if (computerSelection == playerSelection) {
        return "Draw.";
    } else if (computerSelection == "Rock" && playerSelection == "Paper") {
        return "You Won! Paper beats Rock.";
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        return "You Lose! Rock beats Scissors.";
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
        return "You Lose! Paper beats Rock.";
    } else if (computerSelection == "paper" && playerSelection == "Scissors") {
        return "You Won! Scissors beats Paper.";
    } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        return "You Won! Rock beats Scissors.";
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        return "You Lose! Scissors beats Paper.";
    } else {
        return "The input is wrong try again.";
    }
}
//this function allows players to play 5 rounds VS computer and after the 5 rounds they got a final result won lose or draw
function playGame() {
    let input, temp;
    let result = 0, computerResult = 0;
    console.log("You start the game you can choose 'rock','paper' or 'scissors'");
    for (let i = 0; i < 5; i++) {
        input = prompt("Enter your selection to start the round!");
        temp = playRound(getComputerChoice(), input);
        console.log(temp);
        if (temp.at(4) == "W") {
            result++;
        } else if (temp.at(4) == "L") {
            computerResult++;
        } else {
        }
    }
    console.log("---------------------------");
    if (result > computerResult) {
        console.log("You Won.");
    } else if (result < computerResult) {
        console.log("You Lose.");
    } else {
        console.log("Draw.");
    }
    console.log("---------------------------");
}
let userResult=0;
let computerResult=0;
//call the function
const buttons=document.querySelectorAll('button');
const container=document.querySelector("#container");
const div=document.createElement("div");
const div2=document.createElement("div");
const div3=document.createElement("div");
const span=document.createElement("span");
const span2=document.createElement("span");
span.style.color="green";
span2.style.color="red";
function end(){
    container.appendChild(div2);
    userResult=0;
    computerResult=0
    div.textContent="";
    span.textContent="";
    span2.textContent="";
}
container.appendChild(div);
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(computerResult==0&&userResult==0){
            div2.textContent="";
        }
        const temp=playRound(getComputerChoice(),button.id);
        div.textContent=temp;
        container.appendChild(span);
        container.appendChild(span2);
        if (temp.at(4) == "W") {
            userResult++;
            span.textContent=userResult;
        } else if (temp.at(4) == "L") {
            computerResult++;
            span2.textContent=computerResult;
        } else {
        }
        if(userResult==5){
            div2.textContent="congratulation you won!";
            div2.style.color="green";
            end();
        }else if(computerResult==5){
            div2.textContent="You lose!";
            div2.style.color="red";
            end();
        }
    });
});
