import CoordinateCollection from "./coordinate_collection";

class Coordinate {
  constructor(row, column) {
    if (!this.isValidRow(row)) {
      throw new RangeError(
        `The coordinate row must be a positive integer instead of ${row}`
      );
    }

    if (!this.isValidColumn(column)) {
      throw new RangeError(
        `The coordinate column must be a positive integer instead of ${column}`
      );
    }

    this.row = row;
    this.column = column;
  }

  equalsTo(coordinate) {
    return this.row === coordinate.row && this.column === coordinate.column;
  }

  toString() {
    return `(${this.row},${this.column})`;
  }

  isValidRow(row) {
    return Number.isInteger(row) && row >= 0;
  }

  isValidColumn(column) {
    return Number.isInteger(column) && column >= 0;
  }

  adjacentCoordinates() {
    if (this.equalsTo(new Coordinate(0, 0))) {
      return new CoordinateCollection([
        new Coordinate(0, 1),
        new Coordinate(1, 1),
        new Coordinate(1, 0),
      ]);
    }

    if (this.row == 0) {
      return new CoordinateCollection([
        // Same row left and right
        new Coordinate(0, this.column - 1),
        new Coordinate(0, this.column + 1),
        // Row below 3 cells
        new Coordinate(this.row + 1, this.column - 1),
        new Coordinate(this.row + 1, this.column),
        new Coordinate(this.row + 1, this.column + 1),
      ]);
    }

    if (this.column == 0) {
      return new CoordinateCollection([
        // Same column top and below
        new Coordinate(this.row - 1, this.column),
        new Coordinate(this.row + 1, this.column),
        // Right column 3 cells
        new Coordinate(this.row - 1, this.column + 1),
        new Coordinate(this.row, this.column + 1),
        new Coordinate(this.row + 1, this.column + 1),
      ]);
    }

    return new CoordinateCollection([
      // Row above 3 cells
      new Coordinate(this.row - 1, this.column - 1),
      new Coordinate(this.row - 1, this.column),
      new Coordinate(this.row - 1, this.column + 1),
      // Same row left and rght cells
      new Coordinate(this.row, this.column - 1),
      new Coordinate(this.row, this.column + 1),
      // Row below 3 cells
      new Coordinate(this.row + 1, this.column - 1),
      new Coordinate(this.row + 1, this.column),
      new Coordinate(this.row + 1, this.column + 1),
    ]);
  }
}

export default Coordinate;
