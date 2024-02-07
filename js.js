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
