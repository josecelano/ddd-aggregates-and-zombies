## Requirements

* Node 14.17.0
* Docker 20.10.5

## Install

From repo:
```
git@github.com:josecelano/ddd-aggregates-and-zombies.git
./bin/docker/build.sh
./bin/docker/build.sh
```

## Development

Build docker image:
```
./bin/docker/build.sh
```

Run app:
```
./bin/docker/build.sh
```

Run and connect to docker image on development environment:
```
./bin/docker/up.sh
```

Run tests:
```
./bin/docker/test.sh
```

## TODO

 * Move zombies randomly in one of the 8 possible directions when the adyacent cell is empty.
 * Extract non testable from game and complete testing for the class.
 * Force concurrency problems: two zombies in the same cell.

Strategy to implement feature to move zombies randomly:

 * Calculate the list of adjacent coordinates for the zombie current coordinate position.
 * Remove already occupied cells from the previous list (AppocalypticWorld class).
 * Use previous list of potencial cells to move and choose one randomly (Zombie class).