// Generates opening widget template markup
module.exports = function(klass, optional_klass, id, tags) {
  string = '<div class="' + klass;

  if( tags && tags.length > 0 ) {
    optional_klass = optional_klass || "";
    optional_klass += " " + tags.join(" ");
  }

  if( optional_klass ){ string += " " +optional_klass; }
  if( id ){ string += '" id="' + id; }

  return string += '">';
};