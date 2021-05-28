import { getRandomItemFromArray } from "./random";

class CoordinateCollection {
  constructor(coordinates) {
    if (!Array.isArray(coordinates)) {
      throw new RangeError(
        `The coordinate collection constructor expects an array instead of ${coordinates}`
      );
    }
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

  getRandomCoordinate() {
    return getRandomItemFromArray(this.coordinates);
  }
}

export default CoordinateCollection;
