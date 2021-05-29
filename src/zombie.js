class Zombie {
  constructor(coordinate) {
    this.coordinate = coordinate;
  }

  getCoordinate() {
    return this.coordinate;
  }

  moveRandomly(world) {
    const emptyAdjacentCoordinates = world.getEmptyAdjacentCoordinates(
      this.coordinate
    );

    if (emptyAdjacentCoordinates.length() == 0) {
      // The zombie can't move anywhere
      return this.coordinate;
    }

    const currentCoordinate = this.coordinate;
    const newCoordinate = emptyAdjacentCoordinates.getRandomCoordinate();

    this.updatePositionInTheWorld(world, currentCoordinate, newCoordinate);
    this.updateCoordinate(newCoordinate);

    return this.coordinate;
  }

  updateCoordinate(coordinate) {
    this.coordinate = coordinate;
    return this.coordinate;
  }

  updatePositionInTheWorld(world, fromCoordinate, toCoordinate) {
    world.markCellAsEmpty(fromCoordinate);
    world.markCellAsOccupiedByAZombie(toCoordinate);
  }
}

export default Zombie;
