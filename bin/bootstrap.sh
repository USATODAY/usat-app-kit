#!/bin/sh

BASEDIR=$(dirname $0)
echo =======================
echo USA TODAY GRAPHICS KIT
echo =======================
SLUG=${PWD##*/}

# set up graphic config based on folder name as slug
node bin/setup.js

# remove existing git stuff
rm -rf .git

# initialize as a fresh repo
git init

# commit new graphic
git add .
git commit -m "setup $SLUG from template."

# install dependencies
npm install
