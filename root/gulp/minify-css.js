var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', ['import-css'], function() {
  gulp.src('assets/compiled/index.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/compiled'))
});