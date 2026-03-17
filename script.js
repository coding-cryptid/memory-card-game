const gameBoard = document.getElementById("game-board");
const restartBtn = document.getElementById("restart-btn");

const icons = ["🧠", "☕️", "💻", "💡", "🩷", "🥡", "🍔", "🍟"];
let cards = [...icons, ...icons];

function suffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    gameBoard.innerHTML = "";

    shuffle(cards).forEach(icon => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = icon;
        card.dataset.icon = icon;
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    })
}

createBoard();


let flippedCards = [];
let lockBoard = false;

function flipCard() {
    if(lockBoard || this.classList.contains("flipped")) return;

    this.classList.add("flipped");
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

let attempts = 0;

const scoreDisplay = document.createElement("p");
document.body.insertBefore(scoreDisplay, gameBoard);

function updateScore() {
    scoreDisplay.textContent = `Attempts: ${attempts}`;
}

updateScore();

function checkMatch() {
    const[card1, card2] = flippedCards;
    attempts++;
    updateScore();

    if(card1.dataset.icon === card2.dataset.icon) {
        flippedCards = [];
        checkWin();
    } else {
        lockBoard = true;
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
            lockBoard = false;
        }, 1000);
    }
}

restartBtn.addEventListener("click", () => {
    attempts = 0;
    updateScore();
    flippedCards = [];
    lockBoard = false;
    createBoard();
});

function checkWin() {
    const allFlipped = [...document.querySelectorAll('.card')].every(card => card.classList.contains("flipped"));

    if (allFlipped) {
        setTimeout(() => alert(`You won in ${attempts} attempts!`), 300);
    }
}