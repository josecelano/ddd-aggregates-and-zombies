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
  const content = apocalypticWorld.getCellContent(coordinate);

  expect(content).toBe(true);
});

it("it should be empty at the beginning", () => {
  const apocalypticWorld = new ApocalypticWorld(1, 1);
  const cellContent = apocalypticWorld.getCellContent(new Coordinate(0, 0));

  expect(cellContent).toBe(null);
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

it("should allow to get cell content only inside", () => {
  const apocalypticWorld = new ApocalypticWorld(1, 1);

  const attemptToGetCellContentInABadRow = () => {
    apocalypticWorld.getCellContent(new Coordinate(1, 0));
  };

  expect(attemptToGetCellContentInABadRow).toThrow(RangeError);

  const attemptToGetCellContentInABadColumn = () => {
    apocalypticWorld.getCellContent(new Coordinate(0, 1));
  };

  expect(attemptToGetCellContentInABadColumn).toThrow(RangeError);
});

it("should calculate de absolute position in the grid array from the grid matrix coordinate", () => {
  const apocalypticWorld = new ApocalypticWorld(3, 3);

  /*
    Matrix:
    (0,0) (0,1) (0,2)
    (1,0) (1,1) (1,2)
    (2,0) (2,1) (2,2)

    Position in array:
      0     1     2
      3     4     5
      6     7     8 
  */

  expect(apocalypticWorld.getGridPositionFrom(new Coordinate(0, 0))).toBe(0);
  expect(apocalypticWorld.getGridPositionFrom(new Coordinate(0, 1))).toBe(1);
  expect(apocalypticWorld.getGridPositionFrom(new Coordinate(0, 2))).toBe(2);

  expect(apocalypticWorld.getGridPositionFrom(new Coordinate(1, 0))).toBe(3);
  expect(apocalypticWorld.getGridPositionFrom(new Coordinate(1, 1))).toBe(4);
  expect(apocalypticWorld.getGridPositionFrom(new Coordinate(1, 2))).toBe(5);

  expect(apocalypticWorld.getGridPositionFrom(new Coordinate(2, 0))).toBe(6);
  expect(apocalypticWorld.getGridPositionFrom(new Coordinate(2, 1))).toBe(7);
  expect(apocalypticWorld.getGridPositionFrom(new Coordinate(2, 2))).toBe(8);
});
