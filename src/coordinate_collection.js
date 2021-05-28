class CoordinateCollection {
  constructor(coordinates) {
    this.coordinates = coordinates;
  }

  add(coordinate) {
    return this.coordinates.push(coordinate);
  }

  length() {
    return this.coordinates.length;
  }

  contains(coordinate) {
    return this.coordinates.some((currentCoordinate) =>
      currentCoordinate.equalsTo(coordinate)
    );
  }

  equalsTo(coordinateCollection) {
    if (this.coordinates.length !== coordinateCollection.length()) return false;

    for (let i = 0; i < this.coordinates.length; i++) {
      if (!coordinateCollection.contains(this.coordinates[i])) {
        return false;
      }
    }

    return true;
  }
}

export default CoordinateCollection;
