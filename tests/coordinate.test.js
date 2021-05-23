import Coordinate from "../src/coordinate";

it("should represent a row and column position in the world", () => {
  const coordinate = new Coordinate(1, 2);

  expect(coordinate.row()).toBe(1);
  expect(coordinate.column()).toBe(2);
});

it("should contain only zero or positive values for rows", () => {
  const invalidValues = [
    [null, 1],
    ["", 1],
    [" ", 1],
    [-1, 1],
    [1.2, 1],
    [-1.2, 1],
  ];

  invalidValues.forEach(function (value) {
    const t = (value) => {
      new Coordinate(value[0], value[1]);
    };

    expect(() => {
      t(value);
    }).toThrow(RangeError);
  });
});

it("should contain only zero or positive values for colums", () => {
  const invalidValues = [
    [1, null],
    [1, ""],
    [1, " "],
    [1, -1],
    [1, 1.2],
    [1, -1.2],
  ];

  invalidValues.forEach(function (value) {
    const t = (value) => {
      new Coordinate(value[0], value[1]);
    };

    expect(() => {
      t(value);
    }).toThrow(RangeError);
  });
});

it("should print the coordinate as string", () => {
  const coordinate = new Coordinate(1, 2);

  expect(coordinate.toString()).toBe('(1,2)');
});