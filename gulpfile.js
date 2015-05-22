var gulp = require('gulp'),
    notify = require('gulp-notify'),
    babel = require('gulp-babel'),
    flow = require('gulp-flowtype'),
    sourcemaps = require('gulp-sourcemaps'),
    sourcemapReporter = require('jshint-sourcemap-reporter');
 
var clientSrcDir = "lib", flowDest = "build";
 
gulp.task('babel', function(cb) {
    gulp.src(clientSrcDir + '/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({ optional: ['runtime'], blacklist: [] }))
        .on('error', notify.onError(function(error) {
            return error.message;
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(flowDest))
        .on('end', cb);
});

gulp.task("flow", function() {
    gulp.src(clientSrcDir + '/**/*.js')
        .pipe(flow({
            all: false,
            weak: false,
            killFlow: false,
            beep: true,
            abort: true,
            reporter: {
                reporter: function(errors) {
                    return sourcemapReporter.reporter(errors, { sourceRoot: '/' + clientSrcDir + '/' });
                }
            }
        }))
});
 
gulp.task('build', function(cb) {
    gulp.src(clientSrcDir + '/**/*.js')
        .pipe(flow({
            all: false,
            weak: false,
            killFlow: false,
            beep: true,
            abort: true,
            reporter: {
                reporter: function(errors) {
                    return sourcemapReporter.reporter(errors, { sourceRoot: '/' + clientSrcDir + '/' });
                }
            }
        }))
	.on('error', function(err) {
	    this.emit("end");
	})
        .pipe(sourcemaps.init())
        .pipe(babel({ optional: ['runtime'], blacklist: [] }))
        .on('error', notify.onError(function(error) {
            return error.message;
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(flowDest))
        .on('end', cb);
});

gulp.task('build:watch', ["build"], function() {
    gulp.watch(clientSrcDir + '/**/*.js', ['build']);
});
