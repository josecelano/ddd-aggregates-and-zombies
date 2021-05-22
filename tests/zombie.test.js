import ApocalypticWorld from "../src/apocalyptic_world"
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

  const newCoordiante = zombie.move(world);

  expect(newCoordiante.equalsTo(new Coordinate(0, 1))).toBe(true);
});
