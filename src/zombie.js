class Zombie {
  constructor(coordinate) {
    this.coordinate = coordinate;
    this.nextCoordinate = null;
  }

  getCoordinate() {
    return this.coordinate;
  }

  moveRandomly(world) {
    this.nextCoordinate = this.thinkWhereToMove(world);
    this.walkTo(world);
  }

  thinkWhereToMove(world) {
    const emptyAdjacentCoordinates = world.getEmptyAdjacentCoordinates(
      this.coordinate
    );

    if (emptyAdjacentCoordinates.isEmpty()) {
      // The zombie can't move anywhere -> stay at current coordinate
      return this.coordinate;
    }

    return emptyAdjacentCoordinates.getRandomCoordinate();
  }

  walkTo(world) {
    this.updatePositionInTheWorld(world, this.coordinate, this.nextCoordinate);
    this.updateCoordinate(this.nextCoordinate);
  }

  updateCoordinate(coordinate) {
    this.coordinate = coordinate;
    this.nextCoordinate = null;
    return this.coordinate;
  }

  updatePositionInTheWorld(world, fromCoordinate, toCoordinate) {
    world.markCellAsEmpty(fromCoordinate);
    world.markCellAsOccupiedByAZombie(toCoordinate);
  }
}

export default Zombie;
