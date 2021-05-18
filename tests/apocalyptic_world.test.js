import ApocalypticWorld from "../src/apocalyptic_world";
import Coordinate from "../src/coordinate";
import Zombie from "../src/zombie";

it("should be a grid of n rows x m columns", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);

  expect(apocalypticWorld.numRows()).toBe(10);
  expect(apocalypticWorld.numColumns()).toBe(11);
});

it("could have a zombie in a world cell", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);
  const zombie = new Zombie();
  const coordinate = new Coordinate(0, 0);

  apocalypticWorld.addZombie(zombie, coordinate);

  const theSameZombie = apocalypticWorld.getZombie(coordinate);

  expect(zombie).toBe(theSameZombie);
});

it("it should be empty at the beginning", () => {
  const apocalypticWorld = new ApocalypticWorld(1, 1);

  expect(apocalypticWorld.getZombie(new Coordinate(0, 0))).toBe(" ");
});
