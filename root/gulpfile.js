var gulp = require('gulp');
var broadway = require('broadway/tasks')

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['bundleJS', 'compileCSS']);
gulp.task('predeploy', ['fingerprint']);

////////////
// build //
//////////

gulp.task('bundleJS', function(){
  gulp.src('assets/styles/index.js')
    .pipe(broadway.browserify('assets/scripts/index.js'))
    .on('error', broadway.handleErrors)
    .pipe(gulp.dest('assets/compiled'));
});

gulp.task('compileCSS', function() {
  gulp.src('assets/styles/index.scss')
    .pipe(broadway.compileSass('index.css'))
    .on('error', broadway.handleErrors)
    .pipe(gulp.dest('assets/compiled'))
});

gulp.task('fingerprint', function(){
  gulp.src(['assets/**/*', '!assets/{scripts,styles}/**/*', 'views/**/*'], { base: process.cwd() })
    .pipe(broadway.fingerprint())
    .on('error', broadway.handleErrors)
    .pipe(gulp.dest(process.cwd()));
});

//////////////
// preview //
////////////

gulp.task('watch', function(){
  gulp.watch('assets/styles/**/*', ['compileCSS']);
  gulp.watch('assets/scripts/**/*', ['bundleJS']);
  broadway.watch('assets/**/*');
});
