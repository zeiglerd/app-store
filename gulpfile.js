const git = require('gulp-git');
const gulp = require('gulp');
const argv = require('yargs').argv;
// const utilTool = require('utility-tool');

gulp.task('gitAdd', () => {
  console.log(argv.major);

  return gulp.src('./')
    .pipe(git.add());
});

gulp.task('gitCommit', () => {
  return gulp.src('./')
    .pipe(git.commit('auto commit message...'));
});

gulp.task('commitAll', ['gitAdd', 'gitCommit']);
