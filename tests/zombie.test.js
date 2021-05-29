import ApocalypticWorld from "../src/apocalyptic_world";
import Coordinate from "../src/coordinate";
import Zombie from "../src/zombie";

it("should have a initial coordinate", () => {
  const coordinate = new Coordinate(0, 0);
  const zombie = new Zombie(coordinate);

  expect(zombie.getCoordinate()).toBe(coordinate);
});

/* TODO
it("should not move outside the world", () => {

});*/

/* TODO
it("should not move to another cells occupied by another zombie", () => {
});*/

describe("random movement", () => {
  it("should move randomly to an adjacent empty cell", () => {
    const world = new ApocalypticWorld(1, 2);

    // (0, 0) (0, 1)

    const coordinate = new Coordinate(0, 0);
    const zombie = new Zombie(coordinate);

    world.markCellAsOccupiedByAZombie(coordinate);

    zombie.moveRandomly(world);

    expect(zombie.getCoordinate().equalsTo(new Coordinate(0, 1))).toBe(true);
  });

  it("should staty at the same cell if it cant move to any cell", () => {
    const world = new ApocalypticWorld(1, 2);

    // (0, 0) (0, 1)

    const coordinate1 = new Coordinate(0, 0);
    const coordinate2 = new Coordinate(0, 1);

    const zombie1 = new Zombie(coordinate1);

    world.markCellAsOccupiedByAZombie(coordinate1);
    world.markCellAsOccupiedByAZombie(coordinate2);

    zombie1.moveRandomly(world);

    expect(zombie1.getCoordinate().equalsTo(coordinate1)).toBe(true);
  });
});
