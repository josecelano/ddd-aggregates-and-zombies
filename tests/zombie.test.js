import ApocalypticWorld from "../src/apocalyptic_world";
import Coordinate from "../src/coordinate";
import Zombie from "../src/zombie";

it("should have a initial coordinate", () => {
  const coordinate = new Coordinate(0, 0);
  const zombie = new Zombie(coordinate);

  expect(zombie.getCoordinate()).toBe(coordinate);
});

it("should move to the right", () => {
  const world = new ApocalypticWorld(2, 2);
  const coordinate = new Coordinate(0, 0);
  const zombie = new Zombie(coordinate);

  const newCoordiante = zombie.moveToTheRight(world);

  expect(newCoordiante.equalsTo(new Coordinate(0, 1))).toBe(true);
});

it("should not move outside the world", () => {
  const world = new ApocalypticWorld(2, 2);
  const coordinate = new Coordinate(1, 1);
  const zombie = new Zombie(coordinate);

  const newCoordiante = zombie.moveToTheRight(world);

  expect(newCoordiante.equalsTo(coordinate)).toBe(true);
});

it("should not move to another cells occupied by another zombie", () => {
  const world = new ApocalypticWorld(1, 2);

  // (0, 0) (0, 1)

  const coordinate = new Coordinate(0, 0);
  const zombie = new Zombie(coordinate);

  world.markCellAsOccupiedByAZombie(new Coordinate(0, 1));

  expect(zombie.moveToTheRight(world).equalsTo(coordinate)).toBe(true);
});
