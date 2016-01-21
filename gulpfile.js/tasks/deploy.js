var gulp = require( 'gulp' );
var gutil = require('gulp-util');
var ftp = require( 'vinyl-ftp' );
var npm_package = require('../../package.json');

var FTP_USER = process.env.USAT_FTP_USER;
var FTP_PASS = process.env.USAT_FTP_PASS;
var dest = "/17200/experiments/usatoday/" + npm_package.config.year + '/' + npm_package.config.month + '/' + npm_package.config.app_slug;

gulp.task( 'deploy', function () {

    var conn = ftp.create( {
        host:     'usatoday.upload.akamai.com',
        user:     FTP_USER,
        password: FTP_PASS,
        parallel: 10,
        log:      gutil.log
    } );

    var globs = [
        'public/data/**/*.json',
        'public/style/**/*.css',
        'public/js/**/*.js',
        'public/**/index.html',
        'public/**/preview.html'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( globs, {base: 'public', buffer: false} )
        .pipe(conn.newer(dest)) // only upload newer files
        .pipe(conn.dest(dest));

} );

