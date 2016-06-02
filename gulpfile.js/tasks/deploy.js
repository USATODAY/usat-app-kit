var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('deploy', function(cb) {
  gulpSequence('build:production', 'upload', cb);
});
