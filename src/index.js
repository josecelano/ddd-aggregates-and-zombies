import Game from "./game";

// World configuration
const rows = 10;
const columns = 10;
const initialNumberOfZombies = Math.floor((rows * columns) / 10); // 10% of cells

const game = new Game(rows, columns, initialNumberOfZombies);

game.startGame();

setInterval(() => {
  game.render();
}, 500);
setInterval(() => {
  game.moveZombies();
}, 1500);

game.processInputFromKeyboard();
