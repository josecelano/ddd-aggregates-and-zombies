import Coordinate from "./coordinate";

function world_print(world) {
  let output = "";
  for (let i = 0; i < world.numRows(); i++) {
    let row = "";
    for (let j = 0; j < world.numColumns(); j++) {
      if (world.getCellContent(new Coordinate(i, j)) === null) {
        row = `${row} .. `;
      } else {
        row = `${row} 🧟 `;
      }
    }
    output = `${output}${row}\n`;
  }
  return output;
}

export default world_print;
