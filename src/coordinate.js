class Coordinate {
  constructor(row, column) {
    this.guardThatRowIsValid(row);
    this.guardThatColumnIsValid(column);
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

  guardThatRowIsValid(row) {
    if (!this.isValidRow(row)) {
      throw new RangeError(
        `The coordinate row must be a positive integer instead of ${row}`
      );
    }
  }

  guardThatColumnIsValid(column) {
    if (!this.isValidColumn(column)) {
      throw new RangeError(
        `The coordinate column must be a positive integer instead of ${column}`
      );
    }
  }
}

export default Coordinate;
