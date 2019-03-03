//Rock Paper Scissors Javascript code here
let userInput;
let score = 0;
let maxScore = 5;
let roundCount = 1;
let restart= document.querySelector("#restart");
restart.addEventListener('click', () => {window.location.reload(false);});

let moniter= document.querySelector("#instruction");
let noRound= document.createElement('h2');
noRound.textContent= `Round No. : ${roundCount}`;
moniter.appendChild(noRound);

let finalRdiv = document.querySelector('#final');
let finalResult = document.createElement('h2');
finalResult.textContent = "";
console.log(typeof(finalRdiv));
finalRdiv.appendChild(finalResult);

let resultdiv = document.querySelector('#roundResult');
let resultElement = document.createElement('p');
resultElement.textContent = "Click Rock, Paper or Scissors.";
resultdiv.appendChild(resultElement);

function computerPlay(){
    //we gernerate a random_number between 0 and 1 
   //and then use this number to decide the computer play 

    let random_number = Math.random();
    
    if(random_number <=0.33)
    return "Rock";
    else if( random_number > 0.66)
    return "Paper";
    else 
    return "Scissors";
}

function playRound( playerSelection , computerSelection){

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if( playerSelection == computerSelection)
    return "It's a tie! No one wins!";

    if( playerSelection == "ROCK")
    {
        if (computerSelection == "PAPER")
        return "Computer wins this round! Paper beats Rock!";

        if (computerSelection == "SCISSORS")
        return  "You win this round! Rock beats Scissors";

    }

    if( playerSelection == "PAPER")
    {
        if (computerSelection == "ROCK")
        return "You win this round! Paper beats Rock!";

        if (computerSelection == "SCISSORS")
        return  "Computer wins this round! Scissors beats Paper";

    }

    if( playerSelection == "SCISSORS")
    {
        if (computerSelection == "ROCK")
        return "Computer wins this round! Rock beats Scissors!";

        if (computerSelection == "PAPER")
        return  "You win this round! Scissors beats Paper";

    } else
    return "wrong input! try again with rock, paper or scissors!";               
}

function gameEnd (){
    if ((maxScore-score) < score)
    finalResult.textContent =`You win the game by ${score} - ${maxScore-score}`;
    else if((maxScore-score) == score)
    finalResult.textContent =`You tied the game by ${score} - ${maxScore-score}`;
    else
    finalResult.textContent =`You lose the game by ${score} - ${maxScore-score}`;
}


//function game()

    /*for( let i=0; i <= 4; i++){

        userInput = inputValue;
        console.log(userInput);

        roundResult = playRound( userInput , computerPlay() );
        
        alert(roundResult);



    }*/

function report(e) {

    console.log(e);
    let result = playRound( e.target.id , computerPlay() );
    
    roundCount++;

    if(roundCount >= 6)
    gameEnd();
    else {
    noRound.textContent= `Round No. : ${roundCount}`;
    resultElement.textContent = result;
    
    if(result.indexOf("You") != -1)
    score ++;

    if(result.indexOf("wrong") != -1)
    roundCount--;
    
    if(result.indexOf("tie") != -1)
    maxScore--;

    }


}

let rockBtn     = document.querySelector("#rock"    );
let paperBtn    = document.querySelector("#paper"   );
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener(    'click', report );
paperBtn.addEventListener(   'click', report );
scissorsBtn.addEventListener('click', report );
