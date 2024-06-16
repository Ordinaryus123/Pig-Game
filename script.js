'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const curScore0 = document.getElementById('current--0');
const curScore1 = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

let scores, currentScore, activePlayer, playing;

//Starting Conditions

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  curScore0.textContent = 0;
  curScore1.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollDice = function () {
  if (playing) {
    const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${randomDiceRoll}.png`;

    if (randomDiceRoll !== 1) {
      currentScore += randomDiceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const hold = function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
};

btnNew.addEventListener('click', init);

btnRoll.addEventListener('click', rollDice);

btnHold.addEventListener('click', hold);
//DEFTER İÇİN
//The problem was declaring the variables in the function. That way those variables are not seen in the global scope because they are declared
//in the local scope of the function

// rollDice();
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');

// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');

// const curScore0El = document.getElementById('current--0');
// const curScore1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// //Set Starting conditions

// score0El.textContent = 0;
// score1El.textContent = 0;

// diceEl.classList.add('hidden');

// let currentScore = 0;

// let activePlayer = 0;

// btnRoll.addEventListener('click', function () {
//   let randomDiceRoll = Math.trunc(Math.random() * 6) + 1;

//   diceEl.classList.remove('hidden');
//   diceEl.src = `dice-${randomDiceRoll}.png`;

//   if (randomDiceRoll !== 1) {
//     currentScore += randomDiceRoll;
//     // curScore0El.textContent = currentScore;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//   } else {
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     currentScore = 0;

//     player0El.classList.toggle('player--active');
//     player1El.classList.toggle('player--active');
//   }
// });
