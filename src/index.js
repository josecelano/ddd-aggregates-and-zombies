import ApocalypticWorld from "./apocalyptic_world";
import Coordinate from "./coordinate";
import print_world from "./world_print";
import Zombie from "./zombie";

const rows = 10;
const columns = 10;

const world = new ApocalypticWorld(rows, columns);
const zombie = new Zombie();

function populate_world_zombies(world, zombie) {
  for (let i = 0; i < world.numRows(); i++) {
    for (let j = 0; j < world.numColumns(); j++) {
      const addZombie = Math.random() < 0.1; // 10% of cells with zombie
      if (addZombie) {
        world.addZombie(zombie, new Coordinate(i, j));
      }
    }
  }
}

populate_world_zombies(world, zombie);

/* eslint-disable no-console */
console.log(print_world(world));
