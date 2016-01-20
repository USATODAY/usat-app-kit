var dataConfig = require('../config/data');
var fs = require('fs');
var _ = require('lodash');

var dataFiles = fs.readdirSync(dataConfig.src);

module.exports = function() {
    var data = {};

    data.graphic_config = JSON.parse(fs.readFileSync(dataConfig.src + "app_config.json"));
    return data;
};
