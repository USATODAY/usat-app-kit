USAT-APP-KIT
============

# What this kit does
- processes SASS into CSS
- runs autoprefixer on CSS
- bundles JS files via Webpack/Babel
- generates static HTML from [Nunjucks templates](http://mozilla.github.io/nunjucks/)
- runs a dev server with live reload

# Getting Started

First, clone this repository into a new directory. The name of your new directory will be used as the new project's slug.

Example:
```
$ git clone git@github.com:usatoday/usat-app-kit.git new-project
```

## Run setup script
```
$ npm run setup
```

This will start your new project as it's own git repository, set up some configuration, and install dependencies.

## Start gulp
To run your new project locally run:
```
$ gulp
```
You may need to alias `gulp` to `node_modules/.bin/gulp`, or `npm install -g gulp`.

## Preview production environment
```
gulp build:production
gulp server
```
