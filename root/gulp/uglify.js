var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('uglify', function() {
  gulp.src([
      'assets/common/javascripts/jquery/jquery_1.4.x/jquery-1.4.2.js',
      'assets/common/patterns/basics/actions/jquery-actions.js',
      'assets/scripts/jquery-forms.js',
      'assets/scripts/functions.js'
    ])
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('assets/compiled'))
});