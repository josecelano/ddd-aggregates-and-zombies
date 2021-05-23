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

  game.startGame();

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
