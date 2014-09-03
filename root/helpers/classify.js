var _ = require('underscore');

// Normalizes tags for use as HTML classes
module.exports = function(tags) {
  tags = _.map(tags, function(tag) {
    if( tag ){
     if( tag.name ) tag = tag.name;

      return tag.toLowerCase().replace(/ /g, "_");
    }
  });

  tags = tags.join(" ");

  return tags;
};