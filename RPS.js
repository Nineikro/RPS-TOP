function getComputerChoice(){
    //Math.random(3) doesnt work since it doesnt receive any parameters ... Math.random()
    //Math.floor(x) rounds number to its nearest integer
    //Math.random() gives a number between 0 and 1; multiply that number by 3 and rounding it up you'd have 0 to 2 (3 numbers total)
    let choice = Math.floor(Math.random() * 3); 

    if(choice == 0){
        return "rock"
    } 
    else if(choice == 1){
        return "paper"
    } 
    else {
        return "scissors"
    }
}

console.log(getComputerChoice())