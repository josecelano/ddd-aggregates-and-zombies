class Zombie {
  constructor(coordinate) {
    this.coordinate = coordinate;
    this.nextCoordinate = coordinate;
  }

  getCoordinate() {
    return this.coordinate;
  }

  getNextCoordinate() {
    return this.nextCoordinate;
  }

  moveRandomly(world) {
    this.thinkWhereToWalk(world);
    this.walk(world);
  }

  thinkWhereToWalk(world) {
    const emptyAdjacentCoordinates = world.getEmptyAdjacentCoordinates(
      this.coordinate
    );

    if (emptyAdjacentCoordinates.isEmpty()) {
      // The zombie can't move anywhere -> stay at current coordinate
      return this.coordinate;
    }

    this.nextCoordinate = emptyAdjacentCoordinates.getRandomCoordinate();
  }

  walk() {
    return this.updateCoordinate(this.nextCoordinate);
  }

  updateCoordinate(coordinate) {
    this.coordinate = coordinate;
    return this.coordinate;
  }
}

export default Zombie;
