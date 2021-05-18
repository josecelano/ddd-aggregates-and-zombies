## Requirements

* Node 14.17.0
* Docker 20.10.5

## Usage

Build docker image:
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

 * A zombie can't be added outside the world.
 * A zombie can't be from a outside world position.
 * Refactor getZombie? getCellContent and class EmptyCell?. Cell could be empty or contain a zombie.
