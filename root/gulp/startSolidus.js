var solidus = require('solidus');
var gulp = require('gulp');

gulp.task('startSolidus', ['build', 'watch'], function() {
  solidus.start({
    port: 8080,
    dev: true,
    log_level: 3,
    log_server_level: 3
  });
});
