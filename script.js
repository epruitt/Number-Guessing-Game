'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ No Number';
    displayMessage('⛔️ No Number');

    //When player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '✅ Correct Number';
    displayMessage('✅ Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess < secretNumber ? '📉 Too Low' : '📈 Too High';
      displayMessage(guess < secretNumber ? '📉 Too Low' : '📈 Too High');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🙁 You lost the game';
      displayMessage('🙁 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess < secretNumber) {
    //   //When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '🙁 You lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }

    // document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing ...';
  displayMessage('Start guessing ...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
