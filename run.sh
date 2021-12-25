#!/bin/bash

#docker run -p 8090:8090 -it -v $(pwd):/src klakegg/hugo:0.91.2 server --bind 0.0.0.0 -p 8090  -w
docker run -p 8090:8090 -it -v $(pwd):/src klakegg/hugo:0.91.2
