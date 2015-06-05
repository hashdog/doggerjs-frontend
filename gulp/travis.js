'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('travis', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
