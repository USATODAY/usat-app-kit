var gulp = require('gulp');
var del = require('del');
var config = require('../config');
var htmlConfig = require('../config/html');
var dataConfig = require('../config/data');

gulp.task('clean', function (cb) {
  del([
    config.publicAssets,
    htmlConfig.dest,
    dataConfig.dest
  ], cb);
});
