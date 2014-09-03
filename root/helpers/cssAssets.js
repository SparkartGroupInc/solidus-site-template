var _ = require('underscore');

module.exports = function(page, options){

  var stylesheetUrls = [];

  //Add applicable urls to the stylesheetUrls array here.
  //CliqueTools stylesheets were usually included based on page name or section
  if (page.section === '' || page.name === '') {
    stylesheetUrls.push('');
  }

  var ret = "";
  stylesheetUrls.forEach(function(url){
    ret = ret + options.fn(url);
  });
  return ret;
};