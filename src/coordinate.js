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
}

export default Coordinate;
