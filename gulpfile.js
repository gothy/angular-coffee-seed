var gulp = require('gulp'),
    gutil = require('gulp-util'),
    rename = require("gulp-rename"),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee');

var paths = {
  sass: './app/sass/*.scss',
  coffee: './app/coffee/*.coffee'
};

gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('coffee', function() {
  gulp.src(paths.coffee)
    .pipe(coffee()).on('error', gutil.log)
    .pipe(gulp.dest('./app/js/'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.coffee, ['coffee']);
});

gulp.task('default', ['coffee', 'sass']);
