//functions

function computerPlay() {
    let a = Math.random();
    if ( a <= 0.33) {
        return "Rock";
    }else if (a <= 0.66) {
        return "Paper";
    }else {
        return "Scissors";
    }
}

function playSingleRound (playerSelection, computerSelection) {
    
    pChose.textContent = "\(" + playerSelection + "\)";
    cChose.textContent = "\(" + computerSelection + "\)";    

    if (i==5 ) {                
        gameover.textContent = "You won the game!!! :D";                
        btndiv.appendChild(button);        
        return;
    }else if (j==5){                
        gameover.textContent = "You lost the game!!! :(";
        btndiv.appendChild(button);

    } else if (playerSelection === computerSelection) {                   
        return rNote.textContent = "It's draw!";

    }else if (playerSelection === "Rock" && computerSelection === "Paper") {
        j++;
        cScore.textContent = j;
        return rNote.textContent = "You Lose! Paper beats Rock!";
    }else if  (playerSelection === "Rock" && computerSelection === "Scissors") {        
        i++;
        pScore.textContent = i;
        return rNote.textContent = "You Win! Rock beats Scissors!";

    }else if  (playerSelection === "Paper" && computerSelection === "Rock") {        
        i++;
        pScore.textContent = i;
        return rNote.textContent = "You Win! Paper beats Rock!";
    }else if  (playerSelection === "Paper" && computerSelection === "Scissors") {        
        j++;
        cScore.textContent = j;
        return rNote.textContent = "You Lose! Scissors beats Paper!";

    }else if  (playerSelection === "Scissors" && computerSelection === "Rock") {        
        j++;
        cScore.textContent = j;
        return rNote.textContent = "You Lose! Rock beats Scissors!";
    }else if (playerSelection === "Scissors" && computerSelection === "Paper") {        
        i++;
        pScore.textContent = i;
        return rNote.textContent = "You Win! Scissors beats Paper!";       
     }
}

let gameRock = () => {    
    playerSelection= "Rock";
    computerSelection =computerPlay();
    playSingleRound(playerSelection, computerSelection);
} 
let gamePaper = () => {    
    playerSelection= "Paper";
    computerSelection =computerPlay();
    playSingleRound(playerSelection, computerSelection);
}
let gameScissors = () => {    
    playerSelection= "Scissors";
    computerSelection =computerPlay();
    playSingleRound(playerSelection, computerSelection);
}


//Variables
let playerSelection ;
let computerSelection ;
let i=0;
let j=0;
let pScore = document.querySelector("#pScore"); 
let cScore = document.querySelector("#cScore"); 
let pChose = document.querySelector(".player p");
let cChose = document.querySelector(".computer p");
let rNote = document.querySelector(".rounds p");
let gameover = document.querySelector(".game-over h2");
let btndiv = document.querySelector(".game-over");

//magic
const rock = document.querySelector("#Rock"); 
rock.addEventListener('click', gameRock); 

const paper = document.querySelector("#Paper");
paper.addEventListener('click', gamePaper);

const scissors = document.querySelector("#Scissors");
scissors.addEventListener('click', gameScissors);

const button =document.createElement("button");
button.textContent= "Play again!";
button.setAttribute("onclick" , "history.go(0)");




