var _ = require('underscore');
//The sections variable should be an array of objects that contain the section
//as the first key, and an array of page names for pages in that section as the
//first value. These values were previously stored in the Clique Tools database.
var sections = [
  {"about": ["about-us", "contact"]}
];

module.exports = function(name){
  var section = "";
  sections.forEach(function(sectionObj){
    var sectionKeys = Object.keys(sectionObj);
    if(_.contains(sectionObj[sectionKeys[0]], name)) {
      section = sectionKeys[0];
    }
  });
  return section;
};