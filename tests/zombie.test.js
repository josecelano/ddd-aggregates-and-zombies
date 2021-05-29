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

describe("random movement", () => {
  it("should move randomly to an adjacent empty cell", () => {
    const world = new ApocalypticWorld(1, 2);

    // (0, 0) (0, 1)

    const coordinate = new Coordinate(0, 0);
    const zombie = new Zombie(coordinate);

    world.markCellAsOccupiedByAZombie(coordinate);

    const newCoordiante = zombie.moveRandomly(world);

    expect(newCoordiante.equalsTo(new Coordinate(0, 1))).toBe(true);
  });

  it("should staty at the same cell if it cant move to any cell", () => {
    const world = new ApocalypticWorld(1, 2);

    // (0, 0) (0, 1)

    const coordinate1 = new Coordinate(0, 0);
    const coordinate2 = new Coordinate(0, 1);

    const zombie1 = new Zombie(coordinate1);

    world.markCellAsOccupiedByAZombie(coordinate1);
    world.markCellAsOccupiedByAZombie(coordinate2);

    const newCoordiante = zombie1.moveRandomly(world);

    expect(newCoordiante.equalsTo(coordinate1)).toBe(true);
  });
});
