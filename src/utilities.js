const fs = require('fs');

module.exports = (express) => {

  // Check that n is a number
  'isNumber': (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },

  'debug': (msg, obj = {}) => {
    let date = new Date();
    if (process.env.DEBUG) {
      console.log('[' + date + ']', msg, obj);
      let friendly = '[' + date + '] ' + msg + '\n' + obj + '\n\n';
      fs.appendFile('logs/log.txt', friendly, (error) => {
        if (error) {
          console.log(error);
        }
      });
    }
  }

};
