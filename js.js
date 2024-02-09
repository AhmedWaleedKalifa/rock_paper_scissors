
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
        return "You Win! Paper beats Rock.";
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        return "You Lose! Rock beats Scissors.";
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
        return "You Lose! Paper beats Rock.";
    } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        return "You Win! Scissors beats Paper.";
    } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        return "You Win! Rock beats Scissors.";
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        return "You Lose! Scissors beats Paper.";
    } else {
        return "The input is wrong try again.";
    }
}
let userResultNum1=0;
let computerResultNum1=0;
const buttons=document.querySelectorAll('button');
const leftImage=document.querySelector("#left");
const rightImage=document.querySelector("#right");
const message=document.querySelector("#message");
const userScore=document.querySelector("#user");
const computerScore=document.querySelector("#computer");
userScore.style.color="green";
computerScore.style.color="red";
userScore.textContent=userResultNum1;
computerScore.textContent=computerResultNum1;
function end(){
    userResultNum1=0;
    computerResultNum1=0
    userScore.textContent="0";
    computerScore.textContent="0";
};
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(computerResultNum1==0&&userResultNum1==0){
            message.textContent="";
            message.style.color="#4a4949";
        }
        const computerTemp=getComputerChoice();
        if(computerTemp=="Rock"){
            rightImage.setAttribute("src","./images/rockLMin.png");
        }else if(computerTemp=="Paper"){
            rightImage.setAttribute("src","./images/paperLMin.png");
        }else{
            rightImage.setAttribute("src","./images/scissorLMin.png");
        }
        const userTemp=button.id;
        if(userTemp=="Rock"){
            leftImage.setAttribute("src","./images/rockRMin.png");
        }else if(userTemp=="Paper"){
            leftImage.setAttribute("src","./images/paperRMin.png");
        }else{
            leftImage.setAttribute("src","./images/scissorRMin.png");
        }
        const temp=playRound(computerTemp,userTemp);
        message.textContent=temp;
        if (temp.at(4) == "W") {
            userResultNum1++;
            userScore.textContent=userResultNum1;
        } else if (temp.at(4) == "L") {
            computerResultNum1++;
            computerScore.textContent=computerResultNum1;
        } else {
        }
        if(userResultNum1==5){
            message.textContent="congratulation, You Win!";
            message.style.color="green";
            end();
        }else if(computerResultNum1==5){
            message.textContent="Game Over, You Lose!";
            message.style.color="red";
            end();
        }
    });
});
