import Coordinate from "./coordinate";

const emptyCell = " .. ";
const zombieCell = " 🧟 ";

function print_world(world) {
  let output = "";
  for (let rowIndex = 0; rowIndex < world.numRows(); rowIndex++) {
    const row = print_row(world, rowIndex);
    output = `${output}${row}\n`;
  }
  return output;
}

function print_row(world, rowIndex) {
  let row = "";
  for (let columnIndex = 0; columnIndex < world.numColumns(); columnIndex++) {
    if (world.cellIsOccupiedByAZombie(new Coordinate(rowIndex, columnIndex))) {
      row = `${row}${zombieCell}`;
    } else {
      row = `${row}${emptyCell}`;
    }
  }
  return row;
}

export default print_world;
