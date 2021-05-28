import Coordinate from "../src/coordinate";
import CoordinateCollection from "../src/coordinate_collection";

it("should allow to add a coordinate", () => {
  const coordinateCollection = new CoordinateCollection([]);
  const coordiante = new Coordinate(0, 0);

  coordinateCollection.add(coordiante);

  expect(coordinateCollection.contains(coordiante)).toBe(true);
});

describe("it should compare two coordinate collections", () => {
  it("returns false when the size is different", () => {
    const coordinateCollection1 = new CoordinateCollection([
      new Coordinate(0, 0),
    ]);

    const coordinateCollection2 = new CoordinateCollection([
      new Coordinate(0, 0),
      new Coordinate(0, 1),
    ]);

    expect(coordinateCollection1.equalsTo(coordinateCollection2)).toBe(false);
  });

  it("returns true when collections contain the same coordinates", () => {
    const coordinateCollection1 = new CoordinateCollection([
      new Coordinate(0, 0),
      new Coordinate(0, 1),
    ]);

    const coordinateCollection2 = new CoordinateCollection([
      new Coordinate(0, 0),
      new Coordinate(0, 1),
    ]);

    expect(coordinateCollection1.equalsTo(coordinateCollection2)).toBe(true);
  });

  it("returns true even if coordinates are in different order", () => {
    const coordinateCollection1 = new CoordinateCollection([
      new Coordinate(0, 0),
      new Coordinate(0, 1),
    ]);

    const coordinateCollection2 = new CoordinateCollection([
      new Coordinate(0, 1),
      new Coordinate(0, 0),
    ]);

    expect(coordinateCollection1.equalsTo(coordinateCollection2)).toBe(true);
  });

  it("returns false when they do not contain the same coordinates", () => {
    const coordinateCollection1 = new CoordinateCollection([
      new Coordinate(0, 0),
    ]);

    const coordinateCollection2 = new CoordinateCollection([
      new Coordinate(0, 1),
    ]);

    expect(coordinateCollection1.equalsTo(coordinateCollection2)).toBe(false);
  });
});
