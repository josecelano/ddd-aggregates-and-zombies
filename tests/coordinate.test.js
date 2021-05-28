import Coordinate from "../src/coordinate";
import CoordinateCollection from "../src/coordinate_collection";

it("should represent a row and column position in the world", () => {
  const coordinate = new Coordinate(1, 2);

  expect(coordinate.row).toBe(1);
  expect(coordinate.column).toBe(2);
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

  expect(coordinate.toString()).toBe("(1,2)");
});

describe("it should calculate the adjacent coordinates", () => {
  /*
    top-left    top-middle    top-right
    middle-left center        middle-right
    bottom-left bottom-middle bottom-right
  */

  /*
    (0,0) (0,1) (0,2)
    (1,0) (1,1) (1,2)
    (2,0) (2,1) (2,2)
  */

  it("for the top-left corner coordinate (0, 0)", () => {
    expect(
      new Coordinate(0, 0)
        .adjacentCoordinates()
        .equalsTo(
          new CoordinateCollection([
            new Coordinate(0, 1),
            new Coordinate(1, 1),
            new Coordinate(1, 0),
          ])
        )
    ).toBe(true);
  });

  it("for the first row of coordinates (0, X)", () => {
    expect(
      new Coordinate(0, 1).adjacentCoordinates().equalsTo(
        new CoordinateCollection([
          // Same row left and right
          new Coordinate(0, 0),
          new Coordinate(0, 2),
          // Row below 3 cells
          new Coordinate(1, 0),
          new Coordinate(1, 1),
          new Coordinate(1, 2),
        ])
      )
    ).toBe(true);
  });

  it("for the first column of coordinates (X, 0)", () => {
    expect(
      new Coordinate(1, 0).adjacentCoordinates().equalsTo(
        new CoordinateCollection([
          // Same column top and below
          new Coordinate(0, 0),
          new Coordinate(2, 0),
          // Right column 3 cells
          new Coordinate(0, 1),
          new Coordinate(1, 1),
          new Coordinate(2, 1),
        ])
      )
    ).toBe(true);
  });

  it("for any coordinate not in the first row or column (X, Y) where X and Y != 0", () => {
    expect(
      new Coordinate(1, 1).adjacentCoordinates().equalsTo(
        new CoordinateCollection([
          // Row above 3 cells
          new Coordinate(0, 0),
          new Coordinate(0, 1),
          new Coordinate(0, 2),
          // Same row left and rght cells
          new Coordinate(1, 0),
          new Coordinate(1, 2),
          // Row below 3 cells
          new Coordinate(2, 0),
          new Coordinate(2, 1),
          new Coordinate(2, 2),
        ])
      )
    ).toBe(true);
  });
});
