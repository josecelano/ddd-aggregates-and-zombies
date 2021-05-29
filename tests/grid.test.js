import Coordinate from "../src/coordinate";
import CoordinateCollection from "../src/coordinate_collection";
import Grid from "../src/grid";

it("should be a grid of n rows x m columns", () => {
  const grid = new Grid(10, 11, null);

  expect(grid.numRows()).toBe(10);
  expect(grid.numColumns()).toBe(11);
});

it("should allow to get a position value using the coordinate", () => {
  const grid = new Grid(1, 1, "value");

  expect(grid.getGridCellContent(new Coordinate(0, 0))).toBe("value");
});

it("should be initialised with a given vale for all positions", () => {
  const grid = new Grid(1, 1, "value");

  expect(grid.getGridCellContent(new Coordinate(0, 0))).toBe("value");
});

it("should allow to set the value for a given position", () => {
  const grid = new Grid(1, 1, "value");
  const coordinate = new Coordinate(0, 0);

  grid.setGridCellContent(coordinate, "new value");

  expect(grid.getGridCellContent(coordinate)).toBe("new value");
});

it("should calculate de absolute position in the grid array from the grid matrix coordinate", () => {
  /*
    Matrix:
    (0,0) (0,1) (0,2)
    (1,0) (1,1) (1,2)
    (2,0) (2,1) (2,2)

    Position in array:
      0     1     2
      3     4     5
      6     7     8 
  */

  const NumRows = 3;
  const numColumns = 3;

  const grid = new Grid(NumRows, numColumns);

  let position = 0;

  for (let i = 0; i < NumRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      expect(grid.getGridPositionFrom(new Coordinate(i, j))).toBe(position++);
    }
  }
});

it("should allow to get cell content only inside", () => {
  const grid = new Grid(1, 1, null);

  const attemptToGetCellContentInABadRow = () => {
    grid.getGridCellContent(new Coordinate(1, 0));
  };

  expect(attemptToGetCellContentInABadRow).toThrow(RangeError);

  const attemptToGetCellContentInABadColumn = () => {
    grid.getGridCellContent(new Coordinate(0, 1));
  };

  expect(attemptToGetCellContentInABadColumn).toThrow(RangeError);
});

describe("it should calculate the adjacent coordinates of a given coordinate", () => {
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

  const grid = new Grid(3, 3, null);

  it("for the top-left corner coordinate (0, 0)", () => {
    expect(
      grid
        .adjacentCoordinates(new Coordinate(0, 0))
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
      grid.adjacentCoordinates(new Coordinate(0, 1)).equalsTo(
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
      grid.adjacentCoordinates(new Coordinate(1, 0)).equalsTo(
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
      grid.adjacentCoordinates(new Coordinate(1, 1)).equalsTo(
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
