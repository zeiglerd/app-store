const argv = require('yargs').argv;
const git = require('gulp-git');
const gulp = require('gulp');
const jsonfile = require('jsonfile');
const utilTool = require('utility-tool');

gulp.task('gitAdd', () => {
  return gulp.src('./')
  .pipe(git.add({ args: '-A -v' }));
});

const gitCommitErr = 'Cannot commit without: --m "a meaningful commit message"';
gulp.task('gitCommit', () => {
  if (!argv.m || argv.m !== String(argv.m)) {
    utilTool.debug(gitCommitErr);
    return false;
  }
  return gulp.src('./')
  .pipe(git.commit(argv.m, { args: '-v', emitData: true }))
  .on('data', (data) => {
    utilTool.debug(data, null, 0);
  });
});

const gitPushErr = 'Cannot push without: --b "feature-branch-name"';
gulp.task('gitPush', () => {
  if (!argv.b || argv.b !== String(argv.b)) {
    utilTool.debug(gitPushErr);
  } else {
    git.push('origin', `${argv.b}:release`, { args: '--tags -v' }, (err) => {
      if (err) throw err;
    });
  }
});

gulp.task('version', () => {
  if (!argv.major && !argv.minor && !argv.patch) {
    utilTool.debug('Cannot use this script without: --major, --minor or --patch');
  } else if (!argv.m || argv.m !== String(argv.m)) {
    utilTool.debug(gitCommitErr);
  } else if (!argv.b || argv.b !== String(argv.b)) {
    utilTool.debug(gitPushErr);
  } else {
    jsonfile.readFile('package.json', (err, obj) => {
      if (err) {
        utilTool.debug('Failed to read the version in package.json.');
      } else {
        let type;

        if (argv.major) {
          type = 'major';
        } else if (argv.minor) {
          type = 'minor';
        } else if (argv.patch) {
          type = 'patch';
        }

        const newObj = obj;
        newObj.version = utilTool.vni(newObj.version, type);

        jsonfile.writeFile('package.json', newObj, { spaces: 2 }, (err) => {
          if (err) {
            utilTool.debug('Failed to update the version in package.json.');
          } else {
            utilTool.debug('Successfully updated the version to ' +
            `${newObj.version} in package.json.`, null, 0);
          }
        });
      }
    });
  }
});

gulp.task('release', ['version', 'gitAdd', 'gitCommit', 'gitPush']);
