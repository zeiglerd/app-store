// Custom shared functions
module.exports = {

  // Check that n is a number
  'isNumber': (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

}
