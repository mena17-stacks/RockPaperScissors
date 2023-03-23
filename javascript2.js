
function game() {}
let playerScore = 0;
let computerScore = 0;
let roundCount =0;

window.onload = function(){ 
document.getElementById('rock').onclick = player;
document.getElementById('paper').onclick = player;
document.getElementById('scissors').onclick = player;
};

function player(){
   let playerChoice = this.id;
   console.log("Player: " + playerChoice);

const words = ['rock', 'paper', 'scissors'];
let computerChoice = words[Math.floor(Math.random() * words.length)];
   console.log("Computer: " + computerChoice);

console.log(playRound(playerChoice, computerChoice)); 

function playRound(playerSelection, computerSelection) {
   
   if (playerSelection===computerSelection){
     return 'It\'s a tie!';
   }
  else if (playerSelection==='rock' && computerSelection==='paper'){
   computerScore++;
      return 'Paper beats rock.';
   }
  else if (playerSelection=== 'rock' && computerSelection=== 'scissors'){
   playerScore++;
      return 'Rock beats scissors';
   }
  else if (playerSelection==='paper' && computerSelection=== 'paper'){
     return 'It\'s a tie!';
   }
  else if (playerSelection==='paper' && computerSelection=== 'rock'){
   playerScore++;  
      return 'paper beats rock';
   }
  else if (playerSelection==='paper' && computerSelection=== 'scissors'){
   computerScore++;
      return 'scissors beats paper';
   }
  else if (playerSelection==='scissors' && computerSelection=== 'scissors'){
      return 'It\'s a tie!';
   }
  else if (playerSelection==='scissors' && computerSelection=== 'paper'){
   playerScore++;
      return 'scissors beats paper';
  }
  else if (playerSelection==='scissors' && computerSelection=== 'rock'){
   computerScore++;
      return 'rock beats scissors';
   }
  else {
     return 'this is not an adequate response. Choose rock, paper or scissors.';
   }
}
   console.log(`Computer: ${computerScore}`);
   console.log(`Player: ${playerScore}`);
}