var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceDirectory + "/style/**/*.{sass,scss}",
  dest: config.publicAssets + '/style',
  settings: {
    indentedSyntax: true, // Enable .sass syntax!
    imagePath: 'assets/img' // Used by the image-url helper
  }
}
