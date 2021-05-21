import ApocalypticWorld from "./apocalyptic_world";
import Coordinate from "./coordinate";
import print_world from "./print_world";
import Zombie from "./zombie";

// World size
const rows = 10;
const columns = 10;

const world = new ApocalypticWorld(rows, columns);
const zombies = [];

function populate_world_zombies(world, zombies) {
  for (let i = 0; i < world.numRows(); i++) {
    for (let j = 0; j < world.numColumns(); j++) {
      const addZombie = Math.random() < 0.1; // ~10% of cells with zombies
      if (addZombie) {
        const zombie = new Zombie();
        zombies.push(zombie);
        world.addZombie(zombie, new Coordinate(i, j));
      }
    }
  }
}

function add_zombie_in_an_empty_cell(world, zombies) {
  for (let i = 0; i < world.numRows(); i++) {
    for (let j = 0; j < world.numColumns(); j++) {
      const coordinate = new Coordinate(i, j);
      if (!world.cellConstainsZombie(coordinate)) {
        const zombie = new Zombie();
        zombies.push(zombie);
        world.addZombie(zombie, coordinate);
        return;
      }
    }
  }
}

function render_world(world, zombies) {
  /* eslint-disable no-console */
  console.clear();

  /* eslint-disable no-console */
  console.log(print_world(world));

  /* eslint-disable no-console */
  console.log(`Zombies: ${zombies.length}`);

  /* eslint-disable no-console */
  console.log('Ctrl-c to exit');    
}

function createInterval(f, interval, world, zombies) {
  setInterval(function () {
    f(world, zombies);
  }, 1000);
}

populate_world_zombies(world, zombies);
createInterval(add_zombie_in_an_empty_cell, 1000, world, zombies);
createInterval(render_world, 500, world, zombies);

const { stdin } = process;

stdin.setRawMode(true);
stdin.setEncoding("utf8");
// Begin reading from stdin so the process does not exit.
stdin.resume();

stdin.on("data", function (key) {
  // ctrl-c to exit
  if (key === "\u0003") {
    process.exit();
  }
  // write the key to stdout
  process.stdout.write(key);
});
