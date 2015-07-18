//config for project data file

var config = require('./');
module.exports = {
    src: config.sourceDirectory + "/data/",
    dest: config.publicDirectory + '/data/'
};
