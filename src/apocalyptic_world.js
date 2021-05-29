import CoordinateCollection from "./coordinate_collection";
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

  size() {
    return this.rows * this.columns;
  }

  markCellAsOccupiedByAZombie(coordinate) {
    this.grid.setGridCellContent(coordinate, CELL_OCCUPIED);
  }

  markCellAsEmpty(coordinate) {
    this.grid.setGridCellContent(coordinate, CELL_EMPTY);
  }

  cellIsOccupiedByAZombie(coordinate) {
    return this.grid.getGridCellContent(coordinate) == CELL_OCCUPIED;
  }

  cellIsEmpty(coordinate) {
    return this.grid.getGridCellContent(coordinate) == CELL_EMPTY;
  }

  isInside(coordinate) {
    return this.grid.isInside(coordinate);
  }

  getEmptyAdjacentCoordinates(coordinate) {
    return this.filterEmptyCoordinatesFromCollection(
      this.grid.adjacentCoordinates(coordinate)
    );
  }

  filterEmptyCoordinatesFromCollection(coordinateCollection) {
    return new CoordinateCollection(
      coordinateCollection.coordinates.filter((coordinate) => {
        return this.isInside(coordinate) && this.cellIsEmpty(coordinate);
      })
    );
  }
}

export default ApocalypticWorld;
