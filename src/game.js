import ApocalypticWorld from "./apocalyptic_world";
import printWorld from "./print_world";
import { generateRamdomCoordinate, getRandomItemFromArray } from "./random";
import Zombie from "./zombie";

const MODE_AGGREGATE = "aggregate";

class Game {
  constructor(rows, columns, initialNumberOfZombies) {
    this.rows = rows;
    this.columns = columns;
    this.initialNumberOfZombies = initialNumberOfZombies;
    this.world = new ApocalypticWorld(rows, columns);
    this.zombies = [];
    this.zombiesThinkingMovementIntervals = [];
    this.zombiesMovementIntervals = [];
    this.guardThatZombiesNumberDoesNotExceedTheNumberOfCells();
  }

  start(mode) {
    this.populateWorldWithZombiesInRandomPositions();
    this.moveZombiesRandomly(mode);
  }

  populateWorldWithZombiesInRandomPositions() {
    if (this.initialNumberOfZombies == 0) return;

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

  moveZombiesRandomly(mode) {
    this.zombies.forEach((zombie) => {
      const zombieSpeedsInMiliseconds = [500, 1000, 1500, 2000];

      const zoombieThinkingSpeed = getRandomItemFromArray(
        zombieSpeedsInMiliseconds
      );
      const zoombieWalkingSpeed = getRandomItemFromArray(
        zombieSpeedsInMiliseconds
      );

      this.makeZombieThinkOnEachInterval(zombie, zoombieThinkingSpeed);
      this.makeZombieWalkOnEachInterval(zombie, zoombieWalkingSpeed, mode);
    }, this);
  }

  makeZombieThinkOnEachInterval(zombie, zoombieThinkingSpeed) {
    const thinkingInterval = setInterval(
      function (world, zombie) {
        zombie.thinkWhereToWalk(world);
      },
      zoombieThinkingSpeed,
      this.world,
      zombie
    );
    this.zombiesThinkingMovementIntervals.push(thinkingInterval);
  }

  makeZombieWalkOnEachInterval(zombie, zoombieWalkingSpeed, mode) {
    const walkingInterval = setInterval(
      function (world, zombie) {
        const fromCoordinate = zombie.getCoordinate();
        if (mode == MODE_AGGREGATE) {
          // We update the zombie position using the world aggregate root entity
          world.moveZombie(zombie);
        } else {
          const toCoordinate = zombie.walk(world);
          world.updateZombiePosition(fromCoordinate, toCoordinate);
        }
      },
      zoombieWalkingSpeed,
      this.world,
      zombie
    );
    this.zombiesMovementIntervals.push(walkingInterval);
  }

  cleanIntervals() {
    this.zombiesThinkingMovementIntervals.forEach((interval) => {
      clearInterval(interval);
    });
    this.zombiesMovementIntervals.forEach((interval) => {
      clearInterval(interval);
    });
  }

  markCellAsOccupiedByAZombie(coordinate) {
    return this.world.markCellAsOccupiedByAZombie(coordinate);
  }

  render() {
    return `${this.renderWorld()}${this.renderGameFooter()}`;
  }

  renderWorld() {
    return printWorld(this.world);
  }

  renderGameFooter() {
    return (
      `Cells: ${this.numCells()} Zombies: ${this.numZombies()}\n` +
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

  numCells() {
    return this.world.size();
  }
}

export default Game;
