<script>
        // Generate a random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let turns = 10;
        let previousGuesses = [];

        function checkGuess() {
            const guess = parseInt(document.getElementById('guessInput').value);
            if (isNaN(guess) || guess < 1 || guess > 100) {
                alert("Please enter a valid number between 1 and 100.");
                return;
            }

            previousGuesses.push(guess);
            const resultDiv = document.getElementById('result');
            if (guess === randomNumber) {
                resultDiv.innerHTML = `Congratulations! You guessed the number ${randomNumber} correctly in ${11 - turns} turns. <button onclick="resetGame()">Play Again</button>`;
            } else {
                turns--;
                if (turns === 0) {
                    resultDiv.innerHTML = `Sorry, you've run out of turns. The correct number was ${randomNumber}. <button onclick="resetGame()">Play Again</button>`;
                } else {
                    const message = guess < randomNumber ? 'Too low!' : 'Too high!';
                    resultDiv.innerHTML = `${message} You have ${turns} turns left.<br>Previous guesses: ${previousGuesses.join(', ')}`;
                }
            }
            document.getElementById('guessInput').value = '';
        }

        function resetGame() {
            window.location.reload();
        }
    </script>