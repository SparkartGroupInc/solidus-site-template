var gulp       = require('gulp');
var changed    = require('gulp-changed');
var imagemin   = require('gulp-imagemin');

gulp.task('image-min', function() {
  var dest = 'assets/images';

  return gulp.src(['assets/images/**'])
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(dest));
});