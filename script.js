var ranmNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

// stock références du formulaire et du boutton.
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

// stock nombre de conjectures de 1 ( sa garde trace du nombre de suppositions que le joueur à eu). Et stock référence au bouton de réinitialisation.
var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess(){
  var userGuess = Number(guessField.value);
  if(guessCount === 1){
    guesses.textContent = 'Previous guesses : ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Bravo mon pélo !! Tu gères les fougères';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = ' !!! WASTED !!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Faux !';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Merdasse, la dernière supposition était trop basse !'
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Merdasse, la dernière supposition était trop haute !';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
  // desactive l'entrée de texte et le bouton en définissant leurs propriétés désactivées sur true
  guessField.disabled = true;
  guessSubmit.disabled = true;
  // génère nouveau bouton pour entamer nouvelle partie
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game broww';
  document.body.appendchild(resetbutton);
  //définit un reset
  resetButton.addEventListener('click', resetGame);
}
// réinitialise entierement le jeu, pour un nouveau tour.
function resetGame(){
  guessCount = 1;

  //efface tous les paragraphes d'info
  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }
  // supprime bouton de réinitialisation
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random()* 100) +1;
}
