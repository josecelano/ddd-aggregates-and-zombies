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

 * Github workflow to run tests and publish docker image.
 * Force concurrency problems: two zombies in the same cell.