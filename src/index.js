import Game from "./game";
import waitUntilKeyPressed from "./input";

// Constants
const CTRL_C = "\u0003";

// Game configuration
const KEY_TO_STOP_THE_GAME = CTRL_C;
const percentageOfCellsOccupiedByZombies = 10;
const rows = 45;
const columns = 30;
const initialNumberOfZombies = Math.floor(
  (rows * columns) / percentageOfCellsOccupiedByZombies
);

// Game instantiation
const game = new Game(rows, columns, initialNumberOfZombies);

// Game start

game.startGame();

// Game cron tasks

setInterval(() => {
  /* eslint-disable no-console */
  console.clear();
  /* eslint-disable no-console */
  console.log(game.render());
}, 500);

setInterval(() => {
  game.moveZombies();
}, 1500);

// Game input

waitUntilKeyPressed(KEY_TO_STOP_THE_GAME);
