import ApocalypticWorld from "../src/apocalyptic_world";
import Coordinate from "../src/coordinate";

it("should be a grid of n rows x m columns", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);

  expect(apocalypticWorld.numRows()).toBe(10);
  expect(apocalypticWorld.numColumns()).toBe(11);
});

it("could have a zombie in a world cell", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);
  const coordinate = new Coordinate(0, 0);

  apocalypticWorld.markCellAsOccupiedByAZombie(coordinate);
  const content = apocalypticWorld.cellIsOccupiedByAZombie(coordinate);

  expect(content).toBe(true);
});

it("it should be empty at the beginning", () => {
  const apocalypticWorld = new ApocalypticWorld(1, 1);
  expect(apocalypticWorld.cellIsOccupiedByAZombie(new Coordinate(0, 0))).toBe(
    false
  );
});

it("should allow to add zombies only inside", () => {
  const apocalypticWorld = new ApocalypticWorld(1, 1);

  const attemptToAddAZombieInABadRow = () => {
    apocalypticWorld.markCellAsOccupiedByAZombie(new Coordinate(1, 0));
  };

  expect(attemptToAddAZombieInABadRow).toThrow(RangeError);

  const attemptToAddAZombieInABadColumn = () => {
    apocalypticWorld.markCellAsOccupiedByAZombie(new Coordinate(0, 1));
  };

  expect(attemptToAddAZombieInABadColumn).toThrow(RangeError);
});

it("it should return the world size in number of cells", () => {
  const apocalypticWorld = new ApocalypticWorld(2, 2);
  expect(apocalypticWorld.size()).toBe(4);
});
