var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var config      = require('../config/data');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');

gulp.task('data', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
