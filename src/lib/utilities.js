const utilTool = require('utility-tool');

exports.isNumber = (n, cb) => {
  // Check if n is a number and n is finite
  const isNumber = !isNaN(parseFloat(n)) && isFinite(n);
  utilTool.debug(`${n} is ${isNumber ? '' : 'not '}a number`);
  cb(isNumber);
};
