
function game() {}
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {

const words = ['rock', 'paper', 'scissors'];
let getComputerChoice = words[Math.floor(Math.random() * words.length)]
   console.log (getComputerChoice)

   let playerSelection = prompt ('choose rock, paper or scissors');
function playRound(playerSelection, computerSelection) {

   if (playerSelection===computerSelection){
     console.log( 'It\'s a tie!');

  }
  else if (playerSelection==='rock' && computerSelection==='paper'){
   computerScore++;
   console.log('Paper beats rock.');
  
  }
  else if (playerSelection=== 'rock' && computerSelection=== 'scissors'){
   playerScore++;
   console.log('Rock beats scissors');
 
  }
  else if (playerSelection==='paper' && computerSelection=== 'paper'){
     console.log('It\'s a tie!');

  }
  else if (playerSelection==='paper' && computerSelection=== 'rock'){
   playerScore++;  
   console.log('paper beats rock');
  
  }
  else if (playerSelection==='paper' && computerSelection=== 'scissors'){
   computerScore++;
   console.log('scissors beats paper');
 
  }
  else if (playerSelection==='scissors' && computerSelection=== 'scissors'){
   console.log('It\'s a tie!');
 
  }
  else if (playerSelection==='scissors' && computerSelection=== 'paper'){
   playerScore++;
   console.log('scissors beats paper');
   
  }
  else if (playerSelection==='scissors' && computerSelection=== 'rock'){
   computerScore++;
   console.log('rock beats scissors');
  
  }
  else {
     console.log('this is not an adequate response. Choose rock, paper or scissors.');
  }
}



const computerSelection =getComputerChoice;
console.log(playRound(playerSelection, computerSelection));

game();
console.log(`Player pick: ${playerSelection}`);
console.log(`Computer pick: ${computerSelection}`);

console.log(`Computer: ${computerScore}`);
console.log(`Player: ${playerScore}`);
}


console.log('Game Over')
if (playerScore > computerScore){
   console.log ('Congrats! You win!')
}
else if (playerScore < computerScore){
   console.log ('Computer wins!')
}
else{
   console.log ('No one wins. It is a tie.')
}

