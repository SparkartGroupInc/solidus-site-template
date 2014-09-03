var requireDir = require('require-dir');

// Require all helpers in /helpers. To add a new helper, just create a module
// in the /helpers directory
module.exports = requireDir('./helpers');
