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
