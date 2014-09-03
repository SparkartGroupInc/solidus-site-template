var gulp = require('gulp');

gulp.task('move', function(){
  gulp.src(['node_modules/jungle-solidus/common_assets/**'])
  .pipe(gulp.dest('assets/common'));
});