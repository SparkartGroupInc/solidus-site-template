var _ = require('underscore');

module.exports = function(){
  // Handlebars passes the options as the last argument.
  var args = _.initial(arguments);
  var options = _.last(arguments);

  var withContext = {};
  var only = false;

  if(args.length >= 1){
    var onlyArg = _.first(args);
    if(_.isString(onlyArg) && onlyArg == 'only'){
      only = true;
      args = _.tail(args);
    }
  }

  // Extend the current context unless only is specified.
  var initialContext = only ? {} : this;

  // Merge all of the passed context arguments.
  args.unshift({});
  var argsContext = _.extend.apply(_, args);

  // Finally, merge everything including the hash.
  var context = _.extend({}, initialContext, argsContext, options.hash);
  return options.fn(context);
};