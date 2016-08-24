const git = require('gulp-git');
const gulp = require('gulp');
const utilTool = require('utility-tool');

gulp.task('gitAdd', () => {
  utilTool.debug('Doing a Git add:', null, 0);

  return gulp.src('./')
    .pipe(git.add());
});

gulp.task('gitCommit', () => {
  utilTool.debug('Doing a Git commit:', null, 0);

  return gulp.src('./')
    .pipe(git.commit('auto commit message...'));
});

gulp.task('commitAll', ['gitAdd', 'gitCommit']);
