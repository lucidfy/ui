#!/bin/bash
# How to?
#    ./make {route-folder} {packages.scripts}
#
# As an example below:
#    ./make docs dev
ROUTE_FOLDER=$1 $(which npm) run $2 ${@:3}
