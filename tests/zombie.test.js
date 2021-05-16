import Zombie from "../src/zombie";

it("should be dead", () => {
  const zombie = new Zombie();

  expect(zombie.isDead()).toBe(true);
});
