module.exports = function(page, options){

  var jsUrls = [];

  //Add applicable urls to the jsUrls array here.
  //CliqueTools scripts were usually included based on page name or section
  if (page.section === '' || page.name === '') {
    jsUrls.push('');
  }

  var ret = "";
  jsUrls.forEach(function(url){
    ret = ret + options.fn(url);
  });
  return ret;
};