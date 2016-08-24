const gulp = require('gulp');
const utilTool = require('utility-tool');

gulp.task('default', () => {
  utilTool.debug('This is a default task...', null, 0);
});

gulp.task('server', () => {
  utilTool.debug('Starting the server...', null, 0);
});

gulp.task('minifi', () => {
  utilTool.debug('Minifi the JS files', null, 0);
});
