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
    this.zombiesThinkingMovementIntervals = [];
    this.zombiesMovementIntervals = [];
    this.guardThatZombiesNumberDoesNotExceedTheNumberOfCells();
  }

  start() {
    this.populateWorldWithZombiesInRandomPositions();
    this.moveZombiesRandomly();
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

  moveZombiesRandomly() {
    this.zombies.forEach((zombie) => {
      const zombieSpeedsInMiliseconds = [500, 1000, 1500, 2000];

      const zoombieThinkingSpeed = getRandomItemFromArray(
        zombieSpeedsInMiliseconds
      );
      const zoombieWalkingSpeed = getRandomItemFromArray(
        zombieSpeedsInMiliseconds
      );

      this.makeZombieThinkOnEachInterval(this, zombie, zoombieThinkingSpeed);
      this.makeZombieWalkOnEachInterval(this, zombie, zoombieWalkingSpeed);
    }, this);
  }

  makeZombieThinkOnEachInterval(game, zombie, zoombieThinkingSpeed) {
    const thinkingInterval = setInterval(
      function (game, zombie) {
        zombie.thinkWhereToWalk(game.world);
      },
      zoombieThinkingSpeed,
      this,
      zombie
    );
    this.zombiesThinkingMovementIntervals.push(thinkingInterval);
  }

  makeZombieWalkOnEachInterval(game, zombie, zoombieWalkingSpeed) {
    const walkingInterval = setInterval(
      function (game, zombie) {
        zombie.walkTo(game.world);
      },
      zoombieWalkingSpeed,
      this,
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

  moveZombieRandomly(zombie) {
    zombie.moveRandomly(this.world);
  }

  markCellAsOccupiedByAZombie(coordinate) {
    return this.world.markCellAsOccupiedByAZombie(coordinate);
  }

  render() {
    return `${this.renderWorld()}${this.renderGameFooter()}`;
  }

  renderWorld() {
    return print_world(this.world);
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
