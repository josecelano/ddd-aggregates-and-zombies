class ApocalypticWorld {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.grid = [];
    this.initGrid(this.rows, this.columns);
  }

  numRows() {
    return this.rows;
  }

  numColumns() {
    return this.columns;
  }

  addZombie(zombie, coordinate) {
    this.guardThatisInside(coordinate);
    this.setGridCellContent(coordinate, zombie);
  }

  getCellContent(coordinate) {
    this.guardThatisInside(coordinate);
    return this.getGridCellContent(coordinate);
  }

  guardThatisInside(coordinate) {
    if (!this.isInside(coordinate)) {
      throw new RangeError(`The coordinate must be inside the world`);
    }
  }

  isInside(coordinate) {
    return coordinate.row() < this.rows && coordinate.column() < this.columns;
  }

  // Grid methods.
  // Code Review: extract grid class?

  initGrid(rows, columns) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        this.grid.push(null);
      }
    }
  }

  getGridPositionFrom(coordinate) {
    return coordinate.row() * this.rows + coordinate.column();
  }

  setGridCellContent(coordinate, content) {
    this.grid[this.getGridPositionFrom(coordinate)] = content;
  }

  getGridCellContent(coordinate) {
    return this.grid[this.getGridPositionFrom(coordinate)];
  }

  // Print methods.
  // TODO: extract to presentation layer.

  print() {
    for (let i = 0; i < this.rows; i++) {
      let row = "";
      for (let j = 0; j < this.columns; j++) {
        if (this.grid[i * this.rows + j] === null) {
          row = `${row} .. `;
        } else {
          row = `${row} 🧟 `;
        }
      }

      /* eslint-disable no-console */
      console.log(row);
    }
  }
}

export default ApocalypticWorld;
