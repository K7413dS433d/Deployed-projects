let msg = document.getElementById('msg');
let cards = document.getElementById('cards');
let sum = document.getElementById('sum');
let cardArray = [];
let sumArray = 0;
let gameIsRunning = false;
let gameOver = false;



function getRandom() {
    let rand = Math.floor(Math.random() * 13) + 1;
    return rand > 10 ? 10 : rand == 1 ? 11 : rand
}

function startGame() {
    if (!gameIsRunning) {
        msg.innerText = "Draw A Card";
        sum.innerHTML = "Sum: ";
        cards.innerHTML = "Cards: ";
        gameOver = false;
        sumArray = 0;
        let num1 = getRandom();
        gameIsRunning = true;
        sumArray += num1;
        cards.innerHTML += num1 + " ";
        sum.innerHTML = "Sum: " + sumArray;

    } else {
        msg.innerHTML = "Game is already running";
    }
}

function DrawCard() {
    if (gameIsRunning && !gameOver) {
        let num = getRandom();
        sumArray += num;
        cards.innerHTML += num + " ";
        sum.innerHTML = "Sum: " + sumArray;

        if (sumArray > 21) {
            msg.innerHTML = "Game Over! <br> Start New Game";
            gameOver = true;
            gameIsRunning = false;
        } else if (sumArray < 21) {
            msg.innerHTML = "Draw A Card";
        } else {
            msg.innerHTML = "You Win😎 <br> Start New Game";
            gameOver = true;
            gameIsRunning = false;
        }
    }

}
