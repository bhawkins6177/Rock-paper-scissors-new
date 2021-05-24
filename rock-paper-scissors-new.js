let compChoice = ['rock','paper','scissors'];
function computerPlay () {
    let x = compChoice[Math.floor(Math.random()* compChoice.length)];
    return x;
}

let score = 0
let cscore = 0

let result;
let playerChoice = ''

function playRoundS (playerSelection, computerSelection) {
   

    let compChoice =  computerPlay()
    let playerChoice = 'scissors'

    if (compChoice == 'rock' && playerChoice.toLowerCase() == 'scissors'){ 
        result ='you lost!'; 
    } else if (compChoice == 'paper' && playerChoice.toLowerCase() == 'scissors') {
        result = 'you win!';
    } else if (compChoice == 'scissors' && playerChoice.toLowerCase() == 'scissors'){
        result ='Its a tie!';
    } else {
        result = 'woops something went wrong';
    }

    if (result === 'you win!') {
        score++;
    } else if (result === 'Its a tie!') {
        cscore + 0;
        score + 0;
    } else {
        cscore++;
    }
document.querySelector("#PlayerScore").innerHTML = score;
document.querySelector("#ComputerScore").innerHTML = cscore;

    if (cscore == 5 ) {
        alert ('You Lost!')
    } else if (score == 5) {
        alert ('You won! Great job!')
    } else  {
        alert(result)
    }
    return result;
}

function playRoundP (playerSelection, computerSelection) {

    let compChoice =  computerPlay()
    let playerChoice = 'paper'
  
    if (compChoice == 'rock' && playerChoice.toLowerCase() == 'paper'){
        result ='you win!';
    } else if (compChoice == 'paper' && playerChoice.toLowerCase() == 'paper'){
        result ='Its a tie!';
    } else if (compChoice == 'scissors' && playerChoice.toLowerCase() ==  'paper') {
        result = 'you lost!';
    } else {
        result = 'woops something went wrong';
    }

    if (result === 'you win!') {
        score++;
    } else if (result === 'Its a tie!') {
        cscore + 0;
        score + 0;
    } else {
        cscore++;
    }
document.querySelector("#PlayerScore").innerHTML = score;
document.querySelector("#ComputerScore").innerHTML = cscore;

    if (cscore == 5 ) {
        alert ('You Lost!')
    } else if (score == 5) {
        alert ('You won! Great job!')
    } else  {
        alert(result)
    }
    return result;
}

function playRoundR (playerSelection, computerSelection) {


    let compChoice =  computerPlay()
    let playerChoice = 'rock'
    if (compChoice == 'rock' && playerChoice.toLowerCase() == 'rock'){
        result ='Its a tie!';
    } else if (compChoice == 'paper' && playerChoice.toLowerCase() == 'rock') {
        result = 'you lost!';
    } else if (compChoice == 'scissors' && playerChoice.toLowerCase() == 'rock') {
        result = 'you win!';
    } else {
        result = 'woops something went wrong';
    }

    if (result === 'you win!') {
        score++;
    } else if (result === 'Its a tie!') {
        cscore + 0;
        score + 0;
    } else {
        cscore++;
    }
document.querySelector("#PlayerScore").innerHTML = score;
document.querySelector("#ComputerScore").innerHTML = cscore;

    if (cscore == 5 ) {
        alert ('You Lost!')
    } else if (score == 5) {
        alert ('You won! Great job!')
    } else  {
    alert(result)
    }
    return result;
}


    



const BtnR = document.querySelector ('#BtnR');
    BtnR.addEventListener('click', function () {playRoundR (playerChoice, computerPlay())})
    

const BtnP = document.querySelector ('#BtnP');
    BtnP.addEventListener('click', function () {playRoundP (playerChoice, computerPlay())})

const BtnS = document.querySelector ('#BtnS');
    BtnS.addEventListener('click', function () {playRoundS (playerChoice, computerPlay())})


/*function game() {
    
    playRound(compChoice, playerChoice.toLowerCase);
    if (result == 'you win!') {
        score++;
    } else if (result == 'you lost!'){
        cscore++;
    } else {
        cscore + 0;
        score + 0;
    }
    
    playRound(compChoice, playerChoice.toLowerCase);
    if (result == 'you win!') {
        score++;
    } else if (result == 'you lost!'){
        cscore++;
    } else {
        cscore + 0;
        score + 0;
    }
    
    playRound(compChoice, playerChoice.toLowerCase);
    if (result == 'you win!') {
        score++;
    } else if (result == 'you lost!'){
        cscore++;
    } else {
        cscore + 0;
        score + 0;
    }
    
    playRound(compChoice, playerChoice.toLowerCase);
    if (result == 'you win!') {
        score++;
    } else if (result == 'you lost!'){
        cscore++;
    } else {
        cscore + 0;
        score + 0;
    }
    playRound(compChoice, playerChoice.toLowerCase);
    if (result == 'you win!') {
        score++;
    } else if (result == 'you lost!'){
        cscore++;
    } else {
        cscore + 0;
        score + 0;
    }

    
    
   /*
   alert('the computer won '+ cscore + ' points and you won '+ score +' points')
   if (cscore > score) {
       alert ('You lost!');
   } else if (cscore < score) {
       alert('You won!');
   } else {
       alert('It is a tie!');
   }
    return cscore;
    
}*/
//game()

