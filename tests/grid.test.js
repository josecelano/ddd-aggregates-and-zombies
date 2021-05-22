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
  const grid = new Grid(3, 3);

  // TODO: refactor to loop

  expect(grid.getGridPositionFrom(new Coordinate(0, 0))).toBe(0);
  expect(grid.getGridPositionFrom(new Coordinate(0, 1))).toBe(1);
  expect(grid.getGridPositionFrom(new Coordinate(0, 2))).toBe(2);

  expect(grid.getGridPositionFrom(new Coordinate(1, 0))).toBe(3);
  expect(grid.getGridPositionFrom(new Coordinate(1, 1))).toBe(4);
  expect(grid.getGridPositionFrom(new Coordinate(1, 2))).toBe(5);

  expect(grid.getGridPositionFrom(new Coordinate(2, 0))).toBe(6);
  expect(grid.getGridPositionFrom(new Coordinate(2, 1))).toBe(7);
  expect(grid.getGridPositionFrom(new Coordinate(2, 2))).toBe(8);
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