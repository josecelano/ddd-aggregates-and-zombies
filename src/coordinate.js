class Coordinate {
  constructor(row, column) {
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
