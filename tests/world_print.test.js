import ApocalypticWorld from "../src/apocalyptic_world";
import Coordinate from "../src/coordinate";
import world_print from "../src/world_print";
import Zombie from "../src/zombie";

it("should print the empty world in a plain text format", () => {
  const world = new ApocalypticWorld(1, 1);

  const output = world_print(world);

  expect(output).toBe(" .. \n");
});

it("should print a world with a zombie in a plain text format", () => {
  const world = new ApocalypticWorld(1, 1);
  const coordinate = new Coordinate(0, 0);
  const zombie = new Zombie();

  world.addZombie(zombie, coordinate);

  const output = world_print(world);

  expect(output).toBe(" 🧟 \n");
});
