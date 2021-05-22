import ApocalypticWorld from "./apocalyptic_world";
import print_world from "./print_world";
import generateRamdomCoordinate from "./random";
import Zombie from "./zombie";

// World size
const rows = 10;
const columns = 10;
const number_of_zombies = Math.floor((rows * columns) / 10); // 10% of cells

const world = new ApocalypticWorld(rows, columns);
const zombies = [];

function populate_world_with_zombies_in_random_positions(
  world,
  zombies,
  number_of_zombies
) {
  if (number_of_zombies > world.size()) {
    throw new RangeError(
      `The number of zombies in the world cannot be greater than the number of cells`
    );
  }

  do {
    const coordinate = generateRamdomCoordinate(
      world.numRows(),
      world.numColumns()
    );

    if (!world.cellIsOccupiedByAZombie(coordinate)) {
      const zombie = new Zombie();
      zombies.push(zombie);
      world.markCellAsOccupiedByAZombie(coordinate);
    }
  } while (zombies.length < number_of_zombies);
}

function render_game(world, zombies) {
  /* eslint-disable no-console */
  console.clear();

  /* eslint-disable no-console */
  console.log(print_world(world));

  /* eslint-disable no-console */
  console.log(`Zombies: ${zombies.length}`);

  /* eslint-disable no-console */
  console.log("Ctrl-c to exit");
}

function createInterval(f, interval, world, zombies) {
  setInterval(function () {
    f(world, zombies);
  }, interval);
}

function start_game() {
  populate_world_with_zombies_in_random_positions(
    world,
    zombies,
    number_of_zombies
  );
  createInterval(render_game, 500, world, zombies);
}

export default start_game;
