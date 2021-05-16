import is_dead from "../src/zombie";

test("zombie is dead", () => {
  expect(is_dead()).toBe(true);
});
