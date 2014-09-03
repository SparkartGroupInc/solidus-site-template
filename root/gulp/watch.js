var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('assets/styles/**/*.css', ['minify-css']);
  gulp.watch('assets/scripts/**/*.js', ['uglify']);
  gulp.watch('assets/images/**', ['image-min']);
});