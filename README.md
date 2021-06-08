## Requirements

* Node 14.17.0
* Docker 20.10.5

## Run

With docker:
```
docker run --rm -it josecelano/ddd-aggregates-and-zombies
```

Dockerhub image: https://hub.docker.com/r/josecelano/ddd-aggregates-and-zombies

You can also install the project (clone, build and run).

## Install

From repo:
```
git clone git@github.com:josecelano/ddd-aggregates-and-zombies.git
./bin/docker/build.sh
./bin/docker/run.sh
```

## Development

Build docker image:
```
./bin/docker/build.sh
```

Run app with concurrency problem:
```
./bin/docker/run.sh
```

After some seconds you will get this error:
```
/usr/src/app/lib/apocalyptic_world.js:83
      throw new RangeError(`The cell ${coordinate.toString()} is already occupied by another zombie`);
      ^

RangeError: The cell (7,17) is already occupied by another zombie
    at ApocalypticWorld.guardThatCellIsNotMarkedAsOccupiedTwice (/usr/src/app/lib/apocalyptic_world.js:83:13)
    at ApocalypticWorld.markCellAsOccupiedByAZombie (/usr/src/app/lib/apocalyptic_world.js:51:10)
    at ApocalypticWorld.moveZombie (/usr/src/app/lib/apocalyptic_world.js:38:10)
    at Timeout._onTimeout (/usr/src/app/lib/game.js:76:20)
    at listOnTimeout (internal/timers.js:557:17)
    at processTimers (internal/timers.js:498:7)
error Command failed with exit code 1.
```

Run app with mutual exclusivity to avoid race contitions using the Game aggregate:
```
./bin/docker/run-aggregate.sh
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

 * Add missing tests for new changes.