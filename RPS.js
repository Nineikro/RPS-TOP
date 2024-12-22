function getComputerChoice(){
    //Math.random(3) doesnt work since it doesnt receive any parameters ... Math.random()
    //Math.floor(x) rounds number to its nearest integer
    //Math.random() gives a number between 0 and 1; multiply that number by 3 and rounding it up you'd have 0 to 2 (3 numbers total)
    let cChoice = Math.floor(Math.random() * 3); 

    if(cChoice == 0){
        return "rock"
    } 
    else if(cChoice == 1){
        return "paper"
    } 
    else {
        return "scissors"
    }
}

function getHumanChoice(){
    //prompt() will make a window popup on browser screen; message is optional
	let hChoice = prompt("rock, paper or scissors?");
	
	if(hChoice.toLowerCase() == "rock"){
		return "rock";
	}
	else if(hChoice.toLowerCase() == "paper"){
		return "paper";
	}
	else if(hChoice.toLowerCase() == "scissors"){
		return "scissors";
	}
    else {
        return "please try again"
    }
}

console.log(getComputerChoice())
console.log(getHumanChoice())