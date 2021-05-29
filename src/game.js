import ApocalypticWorld from "./apocalyptic_world";
import print_world from "./print_world";
import { generateRamdomCoordinate, getRandomItemFromArray } from "./random";
import Zombie from "./zombie";

class Game {
  constructor(rows, columns, initialNumberOfZombies) {
    this.rows = rows;
    this.columns = columns;
    this.initialNumberOfZombies = initialNumberOfZombies;
    this.world = new ApocalypticWorld(rows, columns);
    this.zombies = [];
    this.zombiesMovementIntervals = [];
    this.guardThatZombiesNumberDoesNotExceedTheNumberOfCells();
  }

  start() {
    this.populateWorldWithZombiesInRandomPositions();
    this.moveZombiesRandomly();
  }

  populateWorldWithZombiesInRandomPositions() {
    do {
      const coordinate = generateRamdomCoordinate(
        this.world.numRows(),
        this.world.numColumns()
      );

      if (!this.world.cellIsOccupiedByAZombie(coordinate)) {
        const zombie = new Zombie(coordinate);
        this.zombies.push(zombie);
        this.world.markCellAsOccupiedByAZombie(coordinate);
      }
    } while (this.zombies.length < this.initialNumberOfZombies);
  }

  moveZombiesRandomly() {
    this.zombies.forEach((zombie) => {
      const zombieSpeedsInMiliseconds = [500, 1000, 1500];
      const speedOfZombie = getRandomItemFromArray(zombieSpeedsInMiliseconds);
      const interval = setInterval(
        function (game, zombie) {
          game.moveZombieRandomly(zombie);
        },
        speedOfZombie,
        this,
        zombie
      );
      this.zombiesMovementIntervals.push(interval);
    }, this);
  }

  cleanIntervals() {
    this.zombiesMovementIntervals.forEach((interval) => {
      clearInterval(interval);
    });
  }

  moveZombieRandomly(zombie) {
    zombie.moveRandomly(this.world);
  }

  markCellAsOccupiedByAZombie(coordinate) {
    return this.world.markCellAsOccupiedByAZombie(coordinate);
  }

  render() {
    return (
      `${print_world(this.world)}Zombies: ${this.zombies.length}\n` +
      `Ctrl-c to exit`
    );
  }

  guardThatZombiesNumberDoesNotExceedTheNumberOfCells() {
    if (this.initialNumberOfZombies > this.world.size()) {
      throw new RangeError(
        `The initial number of zombies (${
          this.initialNumberOfZombies
        }) in the world cannot be greater than the number of cells (${this.world.size()})`
      );
    }
  }

  numZombies() {
    return this.zombies.length;
  }
}

export default Game;
