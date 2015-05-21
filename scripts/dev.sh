#!/bin/bash

# Starts the code
# Mounts this directory inside the image

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker run -i -t --rm --name node-wordpress-classes -v $DIR/../:/srv/node-wordpress-classes/ lingz/node-wordpress-classes bash -l
