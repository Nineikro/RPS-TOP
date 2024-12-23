//variables in global scope - can be accessed anywhere since they're out of a function or block
//keep in mind, they need to be LET since they'll be modified to keep track of scores
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    //Math.random(3) doesnt work since it doesnt receive any parameters ... Math.random()
    //Math.floor(x) rounds number to its nearest integer
    //Math.random() gives a number between 0 and 1; multiply that number by 3 and rounding it up you'd have 0 to 2 (3 numbers total)
    let cChoice = Math.floor(Math.random() * 3); 

    if(cChoice == 0){
        cChoice = "rock";
        return cChoice;
    } 
    else if(cChoice == 1){
        cChoice = "paper";
        return cChoice;
    } 
    else {
        cChoice = "scissors";
        return cChoice;
    }
}

function getHumanChoice(){
    //prompt() will make a window popup on browser screen; message is optional
	let hChoice = prompt("rock, paper or scissors?");
	
	if(hChoice.toLowerCase() == "rock"){
		return hChoice;
	}
	else if(hChoice.toLowerCase() == "paper"){
		return hChoice;
	}
	else if(hChoice.toLowerCase() == "scissors"){
		return hChoice;
	}
    else {
        return "please try again"
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "rock"){
        console.log("Tie!");
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        console.log("Computer scores, you lose :(");
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        console.log("User scores and wins!")
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        console.log("User scores and wins!")
    }
    else if(humanChoice == "paper" && computerChoice == "paper"){
        console.log("Tie!");
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        console.log("Computer scores, you lose :(");
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        console.log("Computer scores, you lose :(");
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        console.log("User scores and wins!")
    }
    else{
        console.log("Tie!");
    }
}


//calls function and stores result in variables so that they can be put into function's parameters
//an error ive faced: dont use console.log(getHumanChoice()) here. console.log() returns undefined and not the result of the function that was called. i tried it out on my function there and it alwayes returned "Tie!", thats because undefined fell into the last "else"... make another console.log() with these variables' names if you want to see the results
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);