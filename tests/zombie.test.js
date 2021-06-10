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
