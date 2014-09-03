var x = require('./x.js');

module.exports = function (expression, options) {
  return x.apply(this, [expression, options]) ? options.fn(this) : options.inverse(this);
};