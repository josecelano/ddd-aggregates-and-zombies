import ApocalypticWorld from "../src/apocalyptic_world";
import Coordinate from "../src/coordinate";
import CoordinateCollection from "../src/coordinate_collection";
import Zoombie from "../src/zombie";

it("should be a grid of n rows x m columns", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);

  expect(apocalypticWorld.numRows()).toBe(10);
  expect(apocalypticWorld.numColumns()).toBe(11);
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

it("should allow to mark a cell as occupied by a zombie", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);
  const coordinate = new Coordinate(0, 0);

  apocalypticWorld.markCellAsOccupiedByAZombie(coordinate);

  expect(apocalypticWorld.cellIsOccupiedByAZombie(coordinate)).toBe(true);
});

it("should allow to update the position of a zombie (non aggregate version)", () => {
  const twoCellWorld = new ApocalypticWorld(1, 2);
  const initialCoordinate = new Coordinate(0, 0);
  const finalCoordinate = new Coordinate(0, 1);

  twoCellWorld.markCellAsOccupiedByAZombie(new Coordinate(0, 0));
  
  twoCellWorld.updateZombiePosition(initialCoordinate, finalCoordinate);

  expect(twoCellWorld.cellIsEmpty(initialCoordinate)).toBe(true);
  expect(twoCellWorld.cellIsOccupiedByAZombie(finalCoordinate)).toBe(true);
});

it("should move a zombie (aggregate version)", () => {
  const twoCellWorld = new ApocalypticWorld(1, 2);
  const initialCoordinate = new Coordinate(0, 0);
  const finalCoordinate = new Coordinate(0, 1);
  const zombie = new Zoombie(initialCoordinate);
  
  // Init zombie positions in the world
  twoCellWorld.markCellAsOccupiedByAZombie(zombie.getCoordinate());
  
  // Make zombie think
  zombie.thinkWhereToWalk(twoCellWorld);
  
  // Make zombie walk
  twoCellWorld.moveZombie(zombie);

  expect(twoCellWorld.cellIsEmpty(initialCoordinate)).toBe(true);
  expect(twoCellWorld.cellIsOccupiedByAZombie(finalCoordinate)).toBe(true);
});

it("should move a zombie only if the new cell is free (aggregate version)", () => {
  const threeCellWorld = new ApocalypticWorld(1, 3);
  const zombie01InitialCoordinate = new Coordinate(0, 0);
  const zombie02InitialCoordinate = new Coordinate(0, 2);
  const zombie01 = new Zoombie(zombie01InitialCoordinate);
  const zombie02 = new Zoombie(zombie02InitialCoordinate);

  // Init zombie positions in the world
  threeCellWorld.markCellAsOccupiedByAZombie(zombie01.getCoordinate());
  threeCellWorld.markCellAsOccupiedByAZombie(zombie02.getCoordinate());

  // Make zombies think. Both of them can only go to the center cell
  zombie01.thinkWhereToWalk(threeCellWorld);
  zombie02.thinkWhereToWalk(threeCellWorld);

  // Make zombies walk
  threeCellWorld.moveZombie(zombie01); // Zombie01 can only move the the center cell
  threeCellWorld.moveZombie(zombie02); // Zombie02 can't move

  // Free cell is now (0,0). Zombie01 moved from (0,0) to (0,1)
  expect(threeCellWorld.cellIsEmpty(zombie01InitialCoordinate)).toBe(true);
  expect(threeCellWorld.cellIsOccupiedByAZombie(zombie01.getCoordinate())).toBe(true);
  expect(threeCellWorld.cellIsOccupiedByAZombie(zombie02.getCoordinate())).toBe(true);
  
  // Zombie02 has not moved
  expect(zombie02.getCoordinate().equalsTo(zombie02InitialCoordinate)).toBe(true);
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
