var dataConfig = require('../config/data');
var fs = require('fs');
var _ = require('lodash');

var dataFiles = fs.readdirSync(dataConfig.src);

module.exports = function() {
    var data = {};

    _.each(dataFiles, function(dataFile) {
        if (dataFile.indexOf(".json") > 0) {
            var filename = dataFile.split(".")[0]
            data[filename] = JSON.parse(fs.readFileSync(dataConfig.src + "/" + dataFile));
        }
    });
    return data;
};
