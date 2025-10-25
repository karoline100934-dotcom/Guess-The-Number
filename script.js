let randomNumber;
let attempts;
let previousGuesses;

// Game initialization
function initGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    previousGuesses = [];
    updateDisplay();
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('message').className = 'message';
}

// Check your guess
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Enter a number between 1-100!';
        message.className = 'message wrong';
        return;
    }
    
    attempts++;
    previousGuesses.push(guess);
    
    if (guess === randomNumber) {
        message.textContent = `🎉 Congratulations! You guessed the number ${randomNumber} dalam ${attempts} percobaan!`;
        message.className = 'message correct';
        document.getElementById('guessInput').disabled = true;
    } else if (guess < randomNumber) {
        message.textContent = '📈 Too low! Try again.';
        message.className = 'message hint';
    } else {
        message.textContent = '📉 Too high! Try again.';
        message.className = 'message hint';
    }
    
    updateDisplay();
    guessInput.value = '';
    guessInput.focus();
}

// Reset game
function resetGame() {
    document.getElementById('guessInput').disabled = false;
    initGame();
}

// Display Update 
function updateDisplay() {
    document.getElementById('attempts').textContent = `Percobaan: ${attempts}`;
    
    const previousElement = document.getElementById('previousGuesses');
    if (previousGuesses.length > 0) {
        previousElement.textContent = `Tebakan sebelumnya: ${previousGuesses.join(', ')}`;
    } else {
        previousElement.textContent = '';
    }
}

// Event listener untuk Enter key
document.getElementById('guessInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

// Inisialisasi game saat pertama kali load
window.onload = initGame;
