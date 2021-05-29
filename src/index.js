import Game from "./game";
import waitUntilKeyPressed from "./input";

// Game constants
const CTRL_C = "\u0003";

// Game configuration
const KEY_TO_STOP_THE_GAME = CTRL_C;
const percentageOfCellsOccupiedByZombies = 4; // 100% means all cells with a zombie
const rows = 30;
const columns = 20;
const initialNumberOfZombies = Math.floor(
  (rows * columns * percentageOfCellsOccupiedByZombies) / 100
);

// Game instantiation
const game = new Game(rows, columns, initialNumberOfZombies);

// Game start
game.start();

// Game rendering
setInterval(() => {
  /* eslint-disable no-console */
  console.clear();
  /* eslint-disable no-console */
  console.log(game.render());
}, 500);

// Game input
waitUntilKeyPressed(KEY_TO_STOP_THE_GAME, () => {
  game.cleanIntervals();
  process.exit();
});
