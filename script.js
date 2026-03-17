const gameBoard = document.getElementById("game-board");
const restartBtn = document.getElementById("restart-btn");

const icons = ["🧠", "☕️", "💻", "💡", "🩷", "🥡", "🍔", "🍟"];
let cards = [...icons, ...icons];

function suffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

