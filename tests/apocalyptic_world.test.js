import ApocalypticWorld from "../src/apocalyptic_world";
import Coordinate from "../src/coordinate";
import CoordinateCollection from "../src/coordinate_collection";

it("should be a grid of n rows x m columns", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);

  expect(apocalypticWorld.numRows()).toBe(10);
  expect(apocalypticWorld.numColumns()).toBe(11);
});

it("should allow to mark a cell as occupied by a zombie", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);
  const coordinate = new Coordinate(0, 0);

  apocalypticWorld.markCellAsOccupiedByAZombie(coordinate);

  expect(apocalypticWorld.cellIsOccupiedByAZombie(coordinate)).toBe(true);
});

it("it should be empty at the beginning", () => {
  const apocalypticWorld = new ApocalypticWorld(1, 1);
  expect(apocalypticWorld.cellIsOccupiedByAZombie(new Coordinate(0, 0))).toBe(
    false
  );
});

it("should allow to mark a cell as empty", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);
  const coordinate = new Coordinate(0, 0);

  apocalypticWorld.markCellAsEmpty(coordinate);

  expect(apocalypticWorld.cellIsEmpty(coordinate)).toBe(true);
});

it("should only allow to mark valid cells", () => {
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

it("should return the world size in number of cells", () => {
  const apocalypticWorld = new ApocalypticWorld(2, 2);
  expect(apocalypticWorld.size()).toBe(4);
});

it("should get collection of empty adjacent cells from a given coordinate", () => {
  const apocalypticWorld = new ApocalypticWorld(1, 2);

  /*
    (0,0) (0,1)
    EMPTY OCCUPIED
  */

  apocalypticWorld.markCellAsOccupiedByAZombie(new Coordinate(0, 1));

  expect(
    apocalypticWorld
      .getEmptyAdjacentCoordinates(new Coordinate(0, 1))
      .equalsTo(new CoordinateCollection([new Coordinate(0, 0)]))
  ).toBe(true);
});

it("should filter the valid and empty coordinates from a collection of coordinates", () => {
  const apocalypticWorld = new ApocalypticWorld(1, 2);

  /*
    (0,0) (0,1)
    EMPTY OCCUPIED
  */

  const allCoordinates = new CoordinateCollection([
    new Coordinate(0, 0),
    new Coordinate(0, 1),
  ]);

  apocalypticWorld.markCellAsOccupiedByAZombie(new Coordinate(0, 1));

  expect(
    apocalypticWorld
      .filterEmptyCoordinatesFromCollection(allCoordinates)
      .equalsTo(new CoordinateCollection([new Coordinate(0, 0)]))
  ).toBe(true);
});
