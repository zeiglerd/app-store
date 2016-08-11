const chalk = require('chalk');
const fs = require('fs');

const debug = (msg, obj = null, status = null) => {
  if (process.env.DEBUG) {
    let date = new Date(),
        d = date.getDate(),
        m = date.getMonth() + 1,
        y = date.getFullYear();
    console.log();
    console.log(chalk.bgBlue(chalk.dim(date)));
    console.log(chalk.bgRed((status ? status + ' - ' : '') + chalk.bold(msg)));
    if (obj && (obj.length > 0 || Object.keys(obj).length > 0)) {
      console.log(chalk.bgYellow(chalk.black(JSON.stringify(obj, null, 2))));
    }
    console.log();

    // Log to file
    let pretty = date + '\n';
    pretty += (status ? status + ' - ' : '') + msg + '\n';
    if (obj) {
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

// Check that n is numeric
const isNumber = (n, cb) => {
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
