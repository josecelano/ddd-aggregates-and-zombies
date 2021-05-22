import ApocalypticWorld from "../src/apocalyptic_world";
import Coordinate from "../src/coordinate";
import print_world from "../src/print_world";

it("should print the empty world in a plain text format", () => {
  const world = new ApocalypticWorld(1, 1);

  const output = print_world(world);

  expect(output).toBe(" .. \n");
});

it("should print a world with a zombie in a plain text format", () => {
  const world = new ApocalypticWorld(1, 1);
  const coordinate = new Coordinate(0, 0);

  world.addZombie(coordinate);

  const output = print_world(world);

  expect(output).toBe(" 🧟 \n");
});
