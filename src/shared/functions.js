// Custom shared functions
module.exports = {

  // Check that n is a number
  'isNumber': (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },

  'log': (msg, obj = {}) => {
    let date = new Date();
    if (process.env.NODE_ENV == 'development') {
      console.log('[' + date + ']', msg, obj);
    } else {
      // Print to file
    }
  }

};
