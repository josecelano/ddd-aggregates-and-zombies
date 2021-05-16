Build docker image:
```
docker build -t agg-zom .
```

Run docker image on development enviornment:
```
docker run -it --rm \
  --entrypoint /bin/sh \
  -v "$PWD":/usr/src/app \
  -w /usr/src/app -u "$(id -u ${USER}):$(id -g ${USER})" \
  agg-zom
```