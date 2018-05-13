var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gzip = require('gulp-gzip');

gulp.task('js-build', function(){
    return gulp.src([
        './dist/runtime.js',
        './dist/polyfills.js',
        './dist/scripts.js',
        './dist/main.js',
    ])
        .pipe(gp_concat('my-widget.js'))
        .pipe(gulp.dest('widgets'))
        .pipe(gzip())
        .pipe(gulp.dest('widgets'));
});

gulp.task('default', ['js-build'], function(){});