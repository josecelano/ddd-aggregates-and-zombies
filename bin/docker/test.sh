#!/bin/bash

docker run -it --rm \
  -v "$PWD":/usr/src/app \
  -w /usr/src/app -u "$(id -u ${USER}):$(id -g ${USER})" \
  agg-zom \
  yarn test:coverage