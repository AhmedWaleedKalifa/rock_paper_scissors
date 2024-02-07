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
    function playGame(){
        let input,temp;
        let result=0,computerResult=0;
        for(let i=0;i<5;i++){
        input=prompt("Enter your selection to start the round!");
        temp=playRound(getComputerChoice(),input);
        console.log(temp);
        if(temp.at(4)=="W"){
        result++;
        }else if(temp.at(4)=="L"){
        computerResult++;
        }else{
        }
        }
        console.log("---------------------------");
        if(result>computerResult){
        console.log( "You Won");
        }else if(result<computerResult){
        console.log( "You Lose");
        }else{
        console.log("Draw");
        }
        console.log("---------------------------");
        }
        playGame();
        