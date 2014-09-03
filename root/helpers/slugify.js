module.exports = function(string) {
  if( string ){
    return string.replace(/ /g, '-');
  }
};