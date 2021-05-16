import ApocalypticWorld from "../src/apocalyptic_world";
import Zombie from "../src/zombie";

it("should be a grid of n rows x m columns", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);

  expect(apocalypticWorld.numRows()).toBe(10);
  expect(apocalypticWorld.numColumns()).toBe(11);
});

it("could have a zombie in a world cell", () => {
  const apocalypticWorld = new ApocalypticWorld(10, 11);
  const zombie = new Zombie();

  const row = 0;
  const column = 0;

  apocalypticWorld.addZombie(zombie, row, column);

  const theSameZombie = apocalypticWorld.getZombie(row, column);

  expect(zombie).toBe(theSameZombie);
});
