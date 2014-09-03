var doWidgets = require('./widgets.js');
var getPageSection = require('./sections.js');
var getMetaData = require('./metadata.js');

module.exports = function( context ){
  context.page.section = getPageSection(context.page.name);
  context = doWidgets(context);
  context.page = getMetaData(context.page, context.resources);
  return context;
};