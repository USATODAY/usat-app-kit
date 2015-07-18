USAT-APP-KIT
============

# What this kit does
- processes SASS into CSS
- reuns autoprefixer on CSS
- bundles JS files via Webpack/Babel
- generates static HTML from [Nunjucks templates](http://mozilla.github.io/nunjucks/)
- runs a dev server with live reload

# Getting Started

## Install dependencies
```
npm install
```

## Start gulp
```
gulp
```
You may need to alias `gulp` to `node_modules/.bin/gulp`, or `npm install -g gulp`.

Start editing assets and views from the `gulp/assets` and `gulp/views` folder. Files compile to `public`.

## Preview production environment
```
gulp build:production
gulp server
```


## Inspired By
https://github.com/texastribune/newsapps-app-kit and https://github.com/nprapps/app-template/ and https://github.com/greypants/gulp-starter/tree/2.0

