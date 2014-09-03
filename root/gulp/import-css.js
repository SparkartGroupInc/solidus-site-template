var gulp = require('gulp');
var importCss = require('gulp-import-css');

gulp.task('import-css', ['move'], function () {
  gulp.src('assets/styles/index.css')
    .pipe(importCss())
    .pipe(gulp.dest('assets/compiled'));
});