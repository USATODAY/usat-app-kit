var browserSync  = require('browser-sync');
var config       = require('../config/html');
var gulp         = require('gulp');
var data         = require('gulp-data');
var getContext   = require('../lib/getContext');
var render = require('gulp-nunjucks-render');
var handleErrors = require('../lib/handleErrors');

gulp.task('html', function() {
    render.nunjucks.configure(['./app/templates'], {watch: false});

    var context = getContext();
    
    return gulp.src(config.src)
      .pipe(data(getContext))
      .pipe(render())
      .on('error', handleErrors)
      .pipe(gulp.dest(config.dest))
      .pipe(browserSync.reload({stream:true}));
});
