#!/bin/sh

BASEDIR=$(dirname $0)
echo =======================
echo USA TODAY GRAPHICS KIT
echo =======================
SLUG=${PWD##*/}

# set up graphic config based on folder name as slug
node bin/setup.js

# commit new graphic
git add .
git commit -m "setup $SLUG from template."
