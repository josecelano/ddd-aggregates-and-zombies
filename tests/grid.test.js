import Coordinate from "../src/coordinate";
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

  grid.setGridCellContent(coordinate, 'new value');

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