import Coordinate from "./coordinate";
import { getRandomItemFromArray } from "./random";

class CoordinateCollection {
  constructor(coordinates) {
    this.guardThatIsArray(coordinates);
    this.guardThatAllValuesAreCoordinates(coordinates);
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

  guardThatIsArray(coordinates) {
    if (!Array.isArray(coordinates)) {
      throw new TypeError(
        `The coordinate collection constructor expects an array instead of ${coordinates}`
      );
    }
  }

  guardThatAllValuesAreCoordinates(coordinates) {
    coordinates.forEach((value) => {
      if (!(value instanceof Coordinate)) {
        throw new TypeError(
          `The coordinate collection constructor expects an array of Coordinate. Found invalid value ${value}`
        );
      }
    });
  }
}

export default CoordinateCollection;
