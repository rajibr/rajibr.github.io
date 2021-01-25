//Declaration of variables
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

//For random number
var randomNumber = Math.floor(Math.random() * 100) + 1;

//For focus of guessFields
guessField.focus();

//Make function to work for submission
function checkGuess() {
    var userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = 'Previous Guesses: ';
    }

    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.background = 'green';
        lowOrHi.textContent = '';

        setGameOver();

    } else if(guessCount === 10) {
        lastResult.textContent = '!!!Game Over!!!';
        lowOrHi.textContent = '';


        //Call setGameOver
        setGameOver();

    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.background = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last Guess Was Too Low!';
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last Guess Was Too High!';
        }
    }

    //For next guess count increase
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

//Add event listener
guessSubmit.addEventListener('click', checkGuess);

//Function for game over
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//Reset button function
function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.results p');
    for(var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.background = '#fff';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}