
function game() {}
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.btn');
let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

const words = ['rock', 'paper', 'scissors'];
let getComputerChoice = words[Math.floor(Math.random() * words.length)]
   console.log (getComputerChoice)


function playRound(playerSelection, computerSelection) {
   if (playerSelection===computerSelection){
     console.log( 'It\'s a tie!');
      return;
  }
  else if (playerSelection==='rock' && computerSelection==='paper'){
   computerScore++;
   console.log('Paper beats rock.');
   return;
  }
  else if (playerSelection=== 'rock' && computerSelection=== 'scissors'){
   playerScore++;
   console.log('Rock beats scissors');
   return;
  }
  else if (playerSelection==='paper' && computerSelection=== 'paper'){
     console.log('It\'s a tie!');
     return;
  }
  else if (playerSelection==='paper' && computerSelection=== 'rock'){
   playerScore++;  
   console.log('paper beats rock');
   return;
  }
  else if (playerSelection==='paper' && computerSelection=== 'scissors'){
   computerScore++;
   console.log('scissors beats paper');
   return;
  }
  else if (playerSelection==='scissors' && computerSelection=== 'scissors'){
   console.log('It\'s a tie!');
   return;
  }
  else if (playerSelection==='scissors' && computerSelection=== 'paper'){
   playerScore++;
   console.log('scissors beats paper');
   return;
  }
  else if (playerSelection==='scissors' && computerSelection=== 'rock'){
   computerScore++;
   console.log('rock beats scissors');
   return;
  }
  else {
     console.log('this is not an adequate response. Choose rock, paper or scissors.');
     return;
   }

console.log(playRound(playerSelection, computerSelection));

game();
console.log(`Player pick: ${playerSelection}`);
console.log(`Computer pick: ${computerSelection}`);
console.log(`Computer: ${computerScore}`);
console.log(`Player: ${playerScore}`);

function checkGame(){
   if (playerScore === '5'){
      console.log('Game Over')
      console.log ('Congrats! You win!')
   }
   else if (computerScore === '5'){
      console.log('Game Over')
      console.log ('Computer wins!')
   }

   else{
      for (let i = 0; i < 5; i++) {
         playRound()
      };
   }
}
}

