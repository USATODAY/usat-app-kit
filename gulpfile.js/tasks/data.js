var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var config      = require('../config/data');
var gulp        = require('gulp');

gulp.task('data', function() {
  return gulp.src(config.src + "*.json")
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
