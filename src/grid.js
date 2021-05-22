class Grid {
  constructor(rows, columns, value) {
    this.rows = rows;
    this.columns = columns;
    this.grid = [];
    this.initGrid(this.rows, this.columns, value);
  }

  initGrid(rows, columns, value) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        this.grid.push(value);
      }
    }
  }

  numRows() {
    return this.rows;
  }

  numColumns() {
    return this.columns;
  }

  setGridCellContent(coordinate, content) {
    this.grid[this.getGridPositionFrom(coordinate)] = content;
  }

  getGridCellContent(coordinate) {
    return this.grid[this.getGridPositionFrom(coordinate)];
  }

  getGridPositionFrom(coordinate) {
    this.guardThatIsInside(coordinate);
    return coordinate.row() * this.numColumns() + coordinate.column();
  }

  guardThatIsInside(coordinate) {
    if (!this.isInside(coordinate)) {
      throw new RangeError(`The coordinate must be inside the grid`);
    }
  }
  
  isInside(coordinate) {
    return coordinate.row() < this.rows && coordinate.column() < this.columns;
  }  
}

export default Grid;
