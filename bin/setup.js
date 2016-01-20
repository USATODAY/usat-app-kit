#!/usr/bin/env node
var fs = require('fs');
var app_config = require('../app/data/app_config.json');
var npm_package = require('../package.json');
var pathArray = __dirname.split('/');
var slug = pathArray[pathArray.length - 2];
app_config.app_slug = slug;

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
if (month < 10) {
    month = "0" + month.toString();
} else {
    month = month.toString();
}

npm_package.config.year = year;
npm_package.config.month = month;

if (!npm_package.config) {
    npm_package.config = {};
};

npm_package.config.app_slug = slug;

fs.writeFile('app/data/app_config.json', JSON.stringify(app_config), function(err) {
    if(err) {
        return console.log(err);
    }
});

fs.writeFile('../package.json', JSON.stringify(npm_package), function(err) {
    if(err) {
        return console.log(err);
    }
    else {
        return console.log("New app setup as : " + slug);
    }
});
