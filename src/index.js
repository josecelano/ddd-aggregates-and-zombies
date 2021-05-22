import Game from "./game";
import process_input_from_keyboard from "./input";

// World configuration
const rows = 10;
const columns = 10;
const initialNumberOfZombies = Math.floor((rows * columns) / 10); // 10% of cells

let game = new Game(rows, columns, initialNumberOfZombies);

game.startGame();

setInterval((() => { game.render() }), 500);

game.processInputFromKeyboard();
