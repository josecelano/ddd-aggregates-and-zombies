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

 * `getZombie` can't be used with an outside world coordinate.
 * Refactor: extract grid (matrix) from world
