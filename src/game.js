import ApocalypticWorld from "./apocalyptic_world";
import print_world from "./print_world";
import generateRamdomCoordinate from "./random";
import Zombie from "./zombie";

class Game {
  constructor(rows, columns, initialNumberOfZombies) {
    this.rows = rows;
    this.columns = columns;
    this.initialNumberOfZombies = initialNumberOfZombies;
    this.world = new ApocalypticWorld(rows, columns);
    this.zombies = [];
    this.guardThatZombiesNumberDoesNotExceedTheNumberOfCells();
  }

  startGame() {
    this.populateWorldWithZombiesInRandomPositions();
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

  moveZombies() {
    this.zombies.forEach((zombie) => {
      const currentCoordinate = zombie.getCoordinate();
      const newCoordinate = zombie.moveRandomly(this.world);

      if (newCoordinate.equalsTo(currentCoordinate)) {
        return;
      }

      this.world.markCellAsOccupiedByAZombie(newCoordinate);
      this.world.markCellAsEmpty(currentCoordinate);
    });
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
