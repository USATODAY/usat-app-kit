var config = require('./')

module.exports = {
    watch: config.sourceDirectory + '/templates/**/*.html',
    src: [config.sourceDirectory + '/templates/**/*.html', '!**/{layouts,shared}/**'],
    dest: config.publicDirectory,
    nunjucks: [config.sourceDirectory + '/templates/']
};
