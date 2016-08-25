const argv = require('yargs').argv;
const git = require('gulp-git');
const gulp = require('gulp');
const jsonfile = require('jsonfile');
const runSequence = require('run-sequence');
const utilTool = require('utility-tool');

const gitCommitErr = 'Cannot commit without: --m "a meaningful commit message"';
const gitPushErr = 'Cannot push without --b feature-branch-name';

gulp.task('gitAdd', () => {
  return gulp.src('./')
  .pipe(git.add({ args: '-A -v' }));
});

gulp.task('gitCommit', () => {
  return gulp.src('./')
  .pipe(git.commit(argv.m, { args: '-v', emitData: true }))
  .on('data', (data) => {
    utilTool.debug(data, null, 0);
  });
});

gulp.task('gitPush', () => {
  git.push('origin', argv.b, { args: '--tags -v' }, (err) => {
    if (err) throw err;
  });
  return true;
});
gulp.task('gitPushRelease', () => {
  git.push('origin', `${argv.b}:release`, { args: '--tags -v' }, (err) => {
    if (err) throw err;
  });
  return true;
});

gulp.task('version', () => {
  jsonfile.readFile('package.json', (err, obj) => {
    if (err) {
      utilTool.debug('Failed to read the version in package.json.');
      throw err;
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
          throw err;
        } else {
          utilTool.debug('Successfully updated the version to ' +
          `${newObj.version} in package.json.`, null, 0);
        }
      });
    }
  });
});

// Pushes the current branch, to the remote release branch, at origin.
// $ gulp release [--major, --minor or --patch] --b feature-branch --m "meaningful commit message"
// ex $ gulp release --patch --b task-runners --m "finished implementing gulp tasks for release"
gulp.task('release', cb => {
  if (!argv.major && !argv.minor && !argv.patch) {
    utilTool.debug('Cannot release without: --major, --minor or --patch');
  } else if (!argv.b || argv.b !== String(argv.b)) {
    utilTool.debug(gitPushErr);
  } else if (argv.b.includes(':')) {
    utilTool.debug('Cannot choose the remote branch to push to.');
  } else if (!argv.m || argv.m !== String(argv.m)) {
    utilTool.debug(gitCommitErr);
  } else {
    runSequence('version', 'gitAdd', 'gitCommit', 'gitPush', cb);
  }
});

// Pushes the current branch, to the remote branch, at origin.
// $ gulp git --b feature-branch[:remote-branch] --m "meaningful commit message"
// ex $ gulp git --b task-runners --m "created a gulp file with a default task"
// ex $ gulp git --b task-runners:master --m "pushing branch into master"
gulp.task('git', cb => {
  if (!argv.b || argv.b !== String(argv.b)) {
    utilTool.debug(gitPushErr);
  } else if (!argv.m || argv.m !== String(argv.m)) {
    utilTool.debug(gitCommitErr);
  } else {
    runSequence('gitAdd', 'gitCommit', 'gitPush', cb);
  }
});
