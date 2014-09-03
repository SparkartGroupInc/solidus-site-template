// Uses variable if set, otherwise use default
module.exports = function(variable, default_value) {
  if( variable ){
    return variable;
  } else {
    return default_value;
  }
};