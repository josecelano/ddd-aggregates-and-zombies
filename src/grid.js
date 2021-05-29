import Coordinate from "./coordinate";
import CoordinateCollection from "./coordinate_collection";

class Grid {
  constructor(rows, columns, value) {
    this.rows = rows;
    this.columns = columns;
    this.grid = [];
    this.initGrid(this.rows, this.columns, value);
  }

  initGrid(rows, columns, value) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        this.grid.push(value);
      }
    }
  }

  numRows() {
    return this.rows;
  }

  numColumns() {
    return this.columns;
  }

  setGridCellContent(coordinate, content) {
    this.grid[this.getGridPositionFrom(coordinate)] = content;
  }

  getGridCellContent(coordinate) {
    return this.grid[this.getGridPositionFrom(coordinate)];
  }

  getGridPositionFrom(coordinate) {
    this.guardThatIsInside(coordinate);
    return coordinate.row * this.numColumns() + coordinate.column;
  }

  guardThatIsInside(coordinate) {
    if (!this.isInside(coordinate)) {
      throw new RangeError(
        `The coordinate ${coordinate.toString()} must be inside the grid`
      );
    }
  }

  isInside(coordinate) {
    return coordinate.row < this.rows && coordinate.column < this.columns;
  }

  adjacentCoordinates(coordinate) {
    if (coordinate.equalsTo(new Coordinate(0, 0))) {
      return new CoordinateCollection([
        new Coordinate(0, 1),
        new Coordinate(1, 1),
        new Coordinate(1, 0),
      ]);
    }

    if (coordinate.row == 0) {
      return new CoordinateCollection([
        // Same row left and right
        new Coordinate(0, coordinate.column - 1),
        new Coordinate(0, coordinate.column + 1),
        // Row below 3 cells
        new Coordinate(coordinate.row + 1, coordinate.column - 1),
        new Coordinate(coordinate.row + 1, coordinate.column),
        new Coordinate(coordinate.row + 1, coordinate.column + 1),
      ]);
    }

    if (coordinate.column == 0) {
      return new CoordinateCollection([
        // Same column top and below
        new Coordinate(coordinate.row - 1, coordinate.column),
        new Coordinate(coordinate.row + 1, coordinate.column),
        // Right column 3 cells
        new Coordinate(coordinate.row - 1, coordinate.column + 1),
        new Coordinate(coordinate.row, coordinate.column + 1),
        new Coordinate(coordinate.row + 1, coordinate.column + 1),
      ]);
    }

    return new CoordinateCollection([
      // Row above 3 cells
      new Coordinate(coordinate.row - 1, coordinate.column - 1),
      new Coordinate(coordinate.row - 1, coordinate.column),
      new Coordinate(coordinate.row - 1, coordinate.column + 1),
      // Same row left and rght cells
      new Coordinate(coordinate.row, coordinate.column - 1),
      new Coordinate(coordinate.row, coordinate.column + 1),
      // Row below 3 cells
      new Coordinate(coordinate.row + 1, coordinate.column - 1),
      new Coordinate(coordinate.row + 1, coordinate.column),
      new Coordinate(coordinate.row + 1, coordinate.column + 1),
    ]);
  }
}

export default Grid;
