import Coordinate from "./coordinate";

class Zombie {
  constructor(coordinate) {
    this.coordinate = coordinate;
  }

  getCoordinate() {
    return this.coordinate;
  }

  move(world) {
    const newCoordinate = new Coordinate(this.coordinate.row(), this.coordinate.column() + 1);

    if (!world.isInside(newCoordinate)) {
      return this.coordinate;
    }

    if (world.cellIsOccupiedByAZombie(newCoordinate)) {
      return this.coordinate;
    }

    this.coordinate = newCoordinate;

    return this.coordinate;
  }
}

export default Zombie;
