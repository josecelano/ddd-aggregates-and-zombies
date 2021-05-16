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

  addZombie(zombie, row, column) {
    this.grid[row * this.rows + column] = zombie;
  }

  getZombie(row, column) {
    return this.grid[row * this.rows + column];
  }
}

export default ApocalypticWorld;
