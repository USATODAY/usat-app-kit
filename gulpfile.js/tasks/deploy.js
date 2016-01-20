var gulp = require( 'gulp' );
var gutil = require('gulp-util');
var ftp = require( 'vinyl-ftp' );
var app_config = require('../../app/data/app_config.json');

var FTP_USER = process.env.USAT_FTP_USER;
var FTP_PASS = process.env.USAT_FTP_PASS;
var dest = "/17200/experiments/usatoday/" + app_config.year + '/' + app_config.mongth + '/' + app_config.graphic_slug;

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

