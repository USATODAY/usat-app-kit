var browserSync  = require('browser-sync');
var config       = require('../config/html');
var gulp         = require('gulp');
var data         = require('gulp-data');
var getContext   = require('../lib/getContext');
var render = require('gulp-nunjucks-render');
var handleErrors = require('../lib/handleErrors');

gulp.task('html', function() {
    // render.nunjucks.configure(['./app/templates'], {watch: false});
    manageEnv = function(environment) {
        environment.addFilter('assetURL', function(str) {
            var asset_base_path = ''
            if (process.env.NODE_ENV == 'production') {
                asset_base_path = this.ctx.app_config.asset_base_path + '/';
            }
            return asset_base_path + str;
        }).addGlobal('env', process.env.NODE_ENV || 'development');
    }

    var context = getContext();
    return gulp.src(config.src)
      .pipe(data(getContext))
      .pipe(render({
          path: './app/templates',
          envOptions: {
              watch: false
          },
          manageEnv: manageEnv
      }))
      .on('error', handleErrors)
      .pipe(gulp.dest(config.dest))
      .pipe(browserSync.reload({stream:true}));
});
