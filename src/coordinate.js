class Coordinate {
  constructor(row, column) {
    if (!Number.isInteger(row) || row < 0) {
      throw new RangeError(
        `The coordinate row must be a positive integer.${row}`
      );
    }

    if (!Number.isInteger(column) || column < 0) {
      throw new RangeError(
        `The coordinate column must be a positive integer.${column}`
      );
    }

    this.rowNumber = row;
    this.columNumber = column;
  }

  row() {
    return this.rowNumber;
  }

  column() {
    return this.columNumber;
  }
}

export default Coordinate;
