const chalk = require('chalk');
const fs = require('fs');

const debug = (msg, obj = null, status = null) => {
  // Check that DEBUG is true
  if (process.env.DEBUG) {
    // Define date and relatives
    const date = new Date();
    const days = [ 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat' ];
    const day = date.getDay();
    const d = date.getDate();
    const mo = date.getMonth() + 1;
    const y = date.getFullYear();
    const h = date.getHours();
    const min = date.getMinutes();
    const s = date.getSeconds();
    const ms = date.getMilliseconds();
    const suf = h < 12 ? 'AM' : 'PM';

    // Print to console
    process.stdout.write('\n');
    process.stdout.write(
      chalk.bgBlue(
        chalk.dim(
          days[day] + ' ' + ((h + 11) % 12 + 1) + ':' + (min < 10 ? '0' : '') + min + ':' + (s < 10 ? '0' : '') + s + ' ' + suf
        )
      )
    );
    process.stdout.write(chalk.bgRed((status ? status + ' - ' : '') + chalk.bold(msg)));
    // Check if obj is not empty
    if (obj && (obj.length > 0 || Object.keys(obj).length > 0)) {
      process.stdout.write(chalk.bgYellow(chalk.black(JSON.stringify(obj, null, 2))));
    }
    process.stdout.write('\n');

    // Log to file
    let pretty = date + '\n';
    pretty += (status ? status + ' - ' : '') + msg + '\n';
    // Check if obj is not empty
    if (obj && (obj.length > 0 || Object.keys(obj).length > 0)) {
      pretty += JSON.stringify(obj, null, 2) + '\n';
    }
    pretty += '\n';
    fs.appendFile('logs/console.log', pretty, (err) => {
      if (err) {
        console.log(chalk.red(err));
      }
    });

  }
};

const isNumber = (n, cb) => {
  // Check that n is numeric
  if ( ! isNaN(parseFloat(n)) && isFinite(n)) {
    debug(n + ' is numeric');
    cb(true);
  } else {
    debug(n + ' is not numeric');
    cb(false);
  }
};

module.exports = {
  'debug': debug,
  'isNumber': isNumber
};
