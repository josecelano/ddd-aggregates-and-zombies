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
        this.grid.push(" ");
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
    this.grid[coordinate.row() * this.rows + coordinate.column()] = zombie;
  }

  getZombie(coordinate) {
    return this.grid[coordinate.row() * this.rows + coordinate.column()];
  }
}

export default ApocalypticWorld;
