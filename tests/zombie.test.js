import Zombie from "../src/zombie";

test("zombie is dead", () => {
  const zombie = new Zombie();

  expect(zombie.isDead()).toBe(true);
});
