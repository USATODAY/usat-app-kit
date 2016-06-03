#!/usr/bin/env node
var fs = require('fs');
var YAML = require('yamljs');
var app_config = require('../app/data/app_config.yml');
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

if (!npm_package.config) {
    npm_package.config = {};
};

npm_package.name = slug
npm_package.config.year = year;
npm_package.config.month = month;
npm_package.config.app_slug = slug;

fs.writeFile(__dirname + '/../app/data/app_config.yml', YAML.stringify(app_config, 4), function(err) {
    if(err) {
        return console.log(err);
    }
});

fs.writeFile(__dirname + '/../package.json', JSON.stringify(npm_package), function(err) {
    if(err) {
        return console.log(err);
    }
    else {
        return console.log("New app setup as : " + slug);
    }
});
