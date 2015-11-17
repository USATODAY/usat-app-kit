var gulp     = require('gulp');
var html     = require('../config/html');
var data     = require('../config/data');
var images   = require('../config/images');
var sass     = require('../config/sass');
var fonts    = require('../config/fonts');
var watch    = require('gulp-watch');

gulp.task('watch', ['browserSync'], function() {
  watch(images.src, function() { gulp.start('images'); });
  watch(sass.src, function() { gulp.start('sass'); });
  watch(data.src + '*', function() { gulp.start('html'); gulp.start('data'); });
  watch(fonts.src, function() { gulp.start('fonts'); });
  watch(html.watch, function() { gulp.start('html'); });
});
