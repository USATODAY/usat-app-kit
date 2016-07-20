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
## Preview production environment
```
$ gulp build:production
$ gulp server
```

## Analytics

To track events and page views on USA TODAY's Omniture account, require the analytics library
```javascript
var Analytics = require('./lib/analytics');
```
Make sure analytics are initialized once with slug as namespace parameter
```javascript
Analytics.setup(app_config.app_slug);
```

You can also pass an options object as an optional, second parameter.

```javascript
Analytics.setup(app_config.app_slug, {
  embedded: true,
  trackTime: true,
  ssts: 'news/politics/elections',
  cst: 'news/politics/elections'
});
```
All values are optional, but can override default settings, such as ssts, and cst, as well as enable time on page tracking, and specifying `embedded: true`, which disables initial page view.

Time tracking fires a click event for users who linger on the page for discrete amounts of time. Currently this is set to:

- 30 seconds
- 1 minutes
- 5 minutes
- 10 minutes

Subsequently track page views and events with

```javascript
Analytics.click($EVENT_NAME)
Analytics.pageView($EVENT_NAME)
```
