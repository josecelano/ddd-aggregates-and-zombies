import Grid from "./grid";

const CELL_OCCUPIED = true;
const CELL_EMPTY = false;

class ApocalypticWorld {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.grid = new Grid(this.rows, this.columns, CELL_EMPTY);
  }

  numRows() {
    return this.rows;
  }

  numColumns() {
    return this.columns;
  }

  markCellAsOccupiedByAZombie(coordinate) {
    this.grid.setGridCellContent(coordinate, CELL_OCCUPIED);
  }

  cellIsOccupiedByAZombie(coordinate) {
    return this.grid.getGridCellContent(coordinate);
  }
}

export default ApocalypticWorld;
