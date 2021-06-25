import Coordinate from "../src/coordinate";
import Game from "../src/game";

it("should not create more zombies than cells", () => {
  const rows = 1;
  const columns = 1;
  const initialNumberOfZombies = 2;

  const t = () => {
    new Game(rows, columns, initialNumberOfZombies);
  };

  expect(() => {
    t();
  }).toThrow(RangeError);
});

it("should populate the world with zomibes when it's started", () => {
  const rows = 1;
  const columns = 1;
  const initialNumberOfZombies = 1;

  const game = new Game(rows, columns, initialNumberOfZombies);

  game.start();
  game.cleanIntervals();

  expect(game.numZombies()).toBe(1);
});

it("should not allow to place more than one zombie in a cell", () => {
  const rows = 1;
  const columns = 1;
  const initialNumberOfZombies = 1;

  const game = new Game(rows, columns, initialNumberOfZombies);

  game.markCellAsOccupiedByAZombie(new Coordinate(0, 0));

  const t = () => {
    game.markCellAsOccupiedByAZombie(new Coordinate(0, 0));
  };

  expect(() => {
    t();
  }).toThrow(RangeError);
});

it("should render the game in text format", () => {
  const rows = 1;
  const columns = 1;
  const initialNumberOfZombies = 0;

  const game = new Game(rows, columns, initialNumberOfZombies);

  const output = game.render(new Coordinate(0, 0));

  expect(output).toBe(" .. \nCells: 1 Zombies: 0\nCtrl-c to exit");
});

it("should move zombies around", () => {
  /*
    Before:
    (0,0)    (0,1)
    OCCUPIED EMPTY

    After:
    (0,0)    (0,1)
    EMPTY    OCCUPIED
  */

  const rows = 1;
  const columns = 2;
  const initialNumberOfZombies = 1;
  const gameMenu = "\nCells: 2 Zombies: 1\nCtrl-c to exit";

  const game = new Game(rows, columns, initialNumberOfZombies);

  game.start('aggregate');

  const output = game.render();
  let finalOutputValid = false;

  if (output == ` ..  🧟 ${gameMenu}` || output == ` 🧟  .. ${gameMenu}`) {
    finalOutputValid = true;
  }

  game.cleanIntervals();

  expect(finalOutputValid).toBe(true);
});

it("should not move zombies where they can not go anywhere", () => {
  /*
    Before:
    (0,0)    (0,1)
    OCCUPIED OCCUPIED

    After:
    (0,0)    (0,1)
    OCCUPIED OCCUPIED
  */

  const rows = 1;
  const columns = 2;
  const initialNumberOfZombies = 2;
  const gameMenu = "\nCells: 2 Zombies: 2\nCtrl-c to exit";

  const game = new Game(rows, columns, initialNumberOfZombies);

  game.start('aggregate');

  const output = game.render();

  game.cleanIntervals();

  expect(output).toBe(` 🧟  🧟 ${gameMenu}`);
});