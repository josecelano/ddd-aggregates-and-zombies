import Coordinate from "./coordinate";

class Zombie {
  constructor(coordinate) {
    this.coordinate = coordinate;
  }

  getCoordinate() {
    return this.coordinate;
  }

  moveToTheRight(world) {
    const newCoordinate = new Coordinate(
      this.coordinate.row,
      this.coordinate.column + 1
    );

    if (!world.isInside(newCoordinate)) {
      return this.coordinate;
    }

    if (world.cellIsOccupiedByAZombie(newCoordinate)) {
      return this.coordinate;
    }

    this.coordinate = newCoordinate;

    return this.coordinate;
  }

  moveRandomly(world) {
    const emptyAdjacentCoordinates = world.getEmptyAdjacentCoordinates(
      this.coordinate
    );

    if (emptyAdjacentCoordinates.length() == 0) {
      return this.coordinate;
    }

    this.coordinate = emptyAdjacentCoordinates.getRandomCoordinate();

    return this.coordinate;
  }
}

export default Zombie;
