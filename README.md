## Usage

Build docker image:
```
docker build -t agg-zom .
```

Run docker image on development environment:
```
docker run -it --rm \
  --entrypoint /bin/sh \
  -v "$PWD":/usr/src/app \
  -w /usr/src/app -u "$(id -u ${USER}):$(id -g ${USER})" \
  agg-zom
```

Run tests:
```
docker run -it --rm \
  -v "$PWD":/usr/src/app \
  -w /usr/src/app -u "$(id -u ${USER}):$(id -g ${USER})" \
  agg-zom \
  yarn test
```

## TODO

 * A zombie can't be added outside the world.
 * A zombie can't be from a outside world position.
 * Refactor getZombie?
