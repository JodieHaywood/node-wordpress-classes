var gulp = require('gulp'),
    notify = require('gulp-notify'),
    babel = require('gulp-babel'),
    flow = require('gulp-flowtype'),
    sourcemaps = require('gulp-sourcemaps'),
    sourcemapReporter = require('jshint-sourcemap-reporter');
 
var clientSrcDir = "lib", flowDest = "tmp_build_flow";
 
gulp.task('flow:babel', function(cb) {
    gulp.src(clientSrcDir + '/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({ optional: ['runtime'], blacklist: ['flow'] }))
        .on('error', notify.onError(function(error) {
            return error.message;
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(flowDest))
        .on('end', cb);
});
 
gulp.task('flow', ['flow:babel'], function() {
    gulp.src(flowDest + '/**/*.js')
        .pipe(flow({
            all: false,
            weak: false,
            killFlow: false,
            beep: true,
            abort: false,
            reporter: {
                reporter: function(errors) {
                    return sourcemapReporter.reporter(errors, { sourceRoot: '/' + clientSrcDir + '/' });
                }
            }
        }));
});
 
gulp.task('flow:watch', function() {
    gulp.watch(clientSrcDir + '/**/*.js', ['client:flow']);
});
