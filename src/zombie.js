class Zombie {
  constructor(coordinate) {
    this.coordinate = coordinate;
    this.nextCoordinate = coordinate;
  }

  getCoordinate() {
    return this.coordinate;
  }

  moveRandomly(world) {
    this.thinkWhereToWalk(world);
    this.walkTo(world);
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

  walkTo(world) {
    this.updatePositionInTheWorld(world, this.coordinate, this.nextCoordinate);
    this.updateCoordinate(this.nextCoordinate);
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
