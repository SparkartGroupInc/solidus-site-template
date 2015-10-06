var fs = require('fs');
var yaml = require('js-yaml');

var metadata = yaml.safeLoad(fs.readFileSync('./metadata.yml', 'utf8'));
var addMetadata = require('solidus-metadata');

module.exports = function (context) {

  // https://github.com/solidusjs/metadata#readme
  addMetadata(context, metadata);

  // Cleanup page path for use in CSS
  context.page.path.split('/views').pop().replace(/\.hbs|\index/g, '');

  return context;
};
