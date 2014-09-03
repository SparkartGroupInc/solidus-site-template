// Takes `items` elements from `array`, starting at `start`
module.exports = function(array, items, start, options) {
  if ( array ) {
  options = options || start || items;

  var start = ( typeof start !== 'number' ) ? 0 : start;
  var items = ( typeof items !== 'number' ) ? array.length : (start + items);
  var collection = array.slice(start, items);

  var result = '';
  for( var i = 0; i < collection.length; i++ ){
    result += options.fn( collection[i] );
  }
  return result;
  }
};