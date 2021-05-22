import Coordinate from "./coordinate";

function generateRamdomCoordinate(rows, columns) {
  const randomRow = randomIntFromInterval(0, rows - 1);
  const randomColumn = randomIntFromInterval(0, columns - 1);
  return new Coordinate(randomRow, randomColumn);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default generateRamdomCoordinate;
