// import { chalk } from 'chalk';
// import { fs } from 'fs';
const chalk = require('chalk');
const fs = require('fs');

const debug = (msg, obj = null, errLevel = 1, status = null) => {
  // Check that DEBUG is true
  if (process.env.DEBUG) {
    // Define date
    const date = new Date();
    const ds = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const d = date.getDay();
    const h = date.getHours();
    const hr = ((h + 11) % 12) + 1;
    const m = date.getMinutes();
    const s = date.getSeconds();
    const suf = h < 12 ? 'AM' : 'PM';

    // Make friendly date and message
    const fDate = `${ds[d]} ${hr}:${m > 9 ? '' : '0'}${m}:${s > 9 ? '' : '0'}${s} ${suf}`;
    const fMsg = `${status ? `${status} - ` : ''}${chalk.bold(msg)}`;

    // Print to console
    process.stdout.write(`\n${chalk.bgBlue.dim(fDate)}`);
    if (!errLevel) {
      process.stdout.write(`\n${chalk.bgGreen(fMsg)}`);
    } else {
      process.stdout.write(`\n${chalk.bgRed(fMsg)}`);
    }
    // Check if obj is not empty
    if (obj && (obj.length > 0 || Object.keys(obj).length > 0)) {
      process.stdout.write(chalk.bgYellow(`\n${chalk.black(JSON.stringify(obj, null, 2))}`));
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
        process.stdout.write(`\n${chalk.red(err)}\n`);
      }
    });
  }
};

const isNumber = (n, cb) => {
  // Check that n is numeric
  if (!isNaN(parseFloat(n)) && isFinite(n)) {
    debug(n + ' is numeric', null, 0);
    cb(true);
  } else {
    debug(n + ' is not numeric');
    cb(false);
  }
};

module.exports = {
  debug,
  isNumber,
};
