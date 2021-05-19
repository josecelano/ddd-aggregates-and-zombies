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

  cellConstainsZombie(coordinate) {
    return this.getCellContent(coordinate) !== null;
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

  setGridCellContent(coordinate, content) {
    this.grid[this.getGridPositionFrom(coordinate)] = content;
  }

  getGridCellContent(coordinate) {
    return this.grid[this.getGridPositionFrom(coordinate)];
  }

  getGridPositionFrom(coordinate) {
    return coordinate.row() * this.rows + coordinate.column();
  }
}

export default ApocalypticWorld;
