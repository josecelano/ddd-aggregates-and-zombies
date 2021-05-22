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
      const newCoordinate = zombie.move(this.world);
      
      if (newCoordinate.equalsTo(currentCoordinate)) {
        return;
      }

      this.world.markCellAsOccupiedByAZombie(newCoordinate);
      this.world.markCellAsEmpty(currentCoordinate);
    });
  }

  render() {
    /* eslint-disable no-console */
    console.clear();

    /* eslint-disable no-console */
    console.log(print_world(this.world));

    /* eslint-disable no-console */
    console.log(`Zombies: ${this.zombies.length}`);

    /* eslint-disable no-console */
    console.log("Ctrl-c to exit");
  }

  processInputFromKeyboard() {
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
    })
  }

  guardThatZombiesNumberDoesNotExceedTheNumberOfCells() {
    if (this.initialNumberOfZombies > this.world.size()) {
      throw new RangeError(
        `The number of zombies in the world cannot be greater than the number of cells`
      );
    }
  }

  numZombies() {
    return this.zombies.length;
  }
}

export default Game;
