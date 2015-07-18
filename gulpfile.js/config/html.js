var config = require('./')

module.exports = {
  watch: config.sourceDirectory + '/templates/**/*.html',
  src: [config.sourceDirectory + '/templates/**/*.html', '!**/{layouts,shared}/**'],
  dest: config.publicDirectory,
  swig: {
    defaults: { cache: false }
  }
}
