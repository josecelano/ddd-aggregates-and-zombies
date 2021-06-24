import ApocalypticWorld from "../src/apocalyptic_world";
import Coordinate from "../src/coordinate";
import Zombie from "../src/zombie";

it("should have a initial coordinate", () => {
  const coordinate = new Coordinate(0, 0);
  const zombie = new Zombie(coordinate);

  expect(zombie.getCoordinate()).toBe(coordinate);
});

it("should keep its current location if it can't move anywhere", () => {
  const oneCellWorld = new ApocalypticWorld(1, 1);
  const initialCoordinate = new Coordinate(0, 0);
  const zombie = new Zombie(initialCoordinate);

  zombie.thinkWhereToWalk(oneCellWorld);

  expect(zombie.getNextCoordinate().equalsTo(initialCoordinate)).toBe(true);
});

it("should chose a random adjacent free cell to move on", () => {
  const twoCellWorld = new ApocalypticWorld(1, 2);
  const initialCoordinate = new Coordinate(0, 0);
  const zombie = new Zombie(initialCoordinate);

  // The only free coordinate in the world
  const nextCoordinate = new Coordinate(0, 1);

  zombie.thinkWhereToWalk(twoCellWorld);

  expect(zombie.getNextCoordinate().equalsTo(nextCoordinate)).toBe(true);
});

it("should walk to the cell which was previously chosen to move on", () => {
  const twoCellWorld = new ApocalypticWorld(1, 2);
  const initialCoordinate = new Coordinate(0, 0);
  const zombie = new Zombie(initialCoordinate);

  zombie.thinkWhereToWalk(twoCellWorld);
  const finalCoordinate = zombie.getNextCoordinate();

  zombie.walk(twoCellWorld);

  expect(zombie.getNextCoordinate().equalsTo(finalCoordinate)).toBe(true);
});