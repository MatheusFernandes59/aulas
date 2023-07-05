function checkGuess() {
    var guessInput = document.getElementById('guessInput');
    var result = document.getElementById('result');
    
    var guess = parseInt(guessInput.value);
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    
    if (guess === randomNumber) {
      result.textContent = 'Parabéns! Você acertou!';
      result.style.color = 'green';
    } else if (guess < randomNumber) {
      result.textContent = 'Tente um número maior.';
      result.style.color = 'red';
    } else {
      result.textContent = 'Tente um número menor.';
      result.style.color = 'red';
    }
    
    guessInput.value = '';
    guessInput.focus();
  }
  