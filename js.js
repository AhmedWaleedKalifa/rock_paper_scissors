function getComputerChoice(){
    let number= Math.floor(Math.random()*3)+1;
    if(number==1){
        return "Rock";
    }else if(number==2){
        return "Scissors";
    }else{
        return "Paper";
    }
}
function playRound(computerSelection,playerSelection){
    playerSelection=(playerSelection.at(0).toUpperCase()+playerSelection.slice(1).toLowerCase());
    if(computerSelection==playerSelection){
    return "Draw";
    }else if(computerSelection=="Rock"&&playerSelection=="Paper"){
    return "You Won! Paper beats Rock.";
    }else if(computerSelection=="Rock"&&playerSelection=="Scissors"){
    return "You Lose! Rock beats Scissors.";
    }else if(computerSelection=="Paper"&&playerSelection=="Rock"){
    return "You Lose! Paper beats Rock.";
    }else if(computerSelection=="paper"&&playerSelection=="Scissors"){
    return "You Won! Scissors beats Paper.";
    }else if(computerSelection=="Scissors"&&playerSelection=="Rock"){
    return "You Won! Rock beats Scissors.";
    }else if(computerSelection=="Scissors"&&playerSelection=="Paper"){
    return "You Lose! Scissors beats Paper.";
    }else{
    return "The input is wrong try again.";
    }
    }