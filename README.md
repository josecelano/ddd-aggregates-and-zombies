## Requirements

* Node 14.17.0
* Docker 20.10.5

## Usage

Build docker image:
```
./bin/docker/build.sh
```

Run app:
```
./bin/docker/run.sh
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

 * Move zombies around.
 * Zombies have to be independent objects. Create all all them at the beginning and assign them an initial cell.
 * Zombies just move randomly to an empty adyacent cell.
 * Add to index the game loop:
    ```
    do {
        zombie.move(world);
        print_world(world);
    } while key ESC pressed ...
    ```
