var dataConfig = require('../config/data');
var fs = require('fs');
YAML = require('yamljs');
var _ = require('lodash');

var dataFiles = fs.readdirSync(dataConfig.src);

module.exports = function() {
    var data = {};

    dataFiles = fs.readdirSync(dataConfig.src)

    _.each(dataFiles, function(dataFile) {
        var splitName = dataFile.split('.');
        var keyName = splitName[0];
        var extension = splitName[1];
        var fileData;
        if (extension.toLowerCase() == 'yaml' || extension.toLowerCase() == 'yml') {
            fileData = YAML.load(dataConfig.src + dataFile);
            data[keyName] = fileData;
        }
    });
    return data;
};
