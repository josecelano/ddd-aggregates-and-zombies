import Coordinate from "../src/coordinate";

it("should represent a row and column position in the world", () => {
  const coordinate = new Coordinate(1, 2);

  expect(coordinate.row()).toBe(1);
  expect(coordinate.column()).toBe(2);
});
