class ApocalypticWorld {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.createCells(this.rows, this.columns);
  }

  createCells(rows, columns) {
    this.grid = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        this.grid.push(null);
      }
    }
  }

  numRows() {
    return this.rows;
  }

  numColumns() {
    return this.columns;
  }

  addZombie(zombie, coordinate) {
    this.guardThatCoordinateIsInside(coordinate);
    this.grid[coordinate.row() * this.rows + coordinate.column()] = zombie;
  }

  getCellContent(coordinate) {
    return this.grid[coordinate.row() * this.rows + coordinate.column()];
  }

  guardThatCoordinateIsInside(coordinate) {
    if (!this.coordinateIsInside(coordinate)) {
      throw new RangeError(`The coordinate must be inside the world`);
    }
  }

  coordinateIsInside(coordinate) {
    return coordinate.row() < this.rows && coordinate.column() < this.columns;
  }
}

export default ApocalypticWorld;
