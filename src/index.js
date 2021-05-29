import Game from "./game";

// World configuration
const percentageOfCellsOccupiedByZombies = 10;
const rows = 45;
const columns = 30;
const initialNumberOfZombies = Math.floor(
  (rows * columns) / percentageOfCellsOccupiedByZombies
);

const game = new Game(rows, columns, initialNumberOfZombies);

game.startGame();

setInterval(() => {
  game.render();
}, 500);
setInterval(() => {
  game.moveZombies();
}, 1500);

game.processInputFromKeyboard();
