const chalk = require('chalk');
const fs = require('fs');

const debug = (msg, obj = null, status = null) => {
  // Check that DEBUG is true
  if (process.env.DEBUG) {

    // Define date and relatives
    const date = new Date(),
        days = [ 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat' ],
        day = date.getDay(),
        d = date.getDate(),
        mo = date.getMonth() + 1,
        y = date.getFullYear(),
        h = date.getHours(),
        min = date.getMinutes(),
        s = date.getSeconds(),
        ms = date.getMilliseconds(),
        suf = h < 12 ? 'AM' : 'PM';

    // Print to console
    console.log();
    console.log(chalk.bgBlue(chalk.dim(days[day] + ' ' + ((h + 11) % 12 + 1) + ':' + (min < 10 ? '0' : '') + min + ':' + (s < 10 ? '0' : '') + s + ' ' + suf)));
    console.log(chalk.bgRed((status ? status + ' - ' : '') + chalk.bold(msg)));
    // Check if obj is not empty
    if (obj && (obj.length > 0 || Object.keys(obj).length > 0)) {
      console.log(chalk.bgYellow(chalk.black(JSON.stringify(obj, null, 2))));
    }
    console.log();

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
