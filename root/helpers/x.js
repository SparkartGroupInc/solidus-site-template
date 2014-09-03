module.exports = function (expression, options) {
  var fn = function(){}, result;
  try {
    fn = Function.apply(this,["global", "return " + expression + " ;"]);
  } catch (e) {
    console.warn("{{x " + expression + "}} has invalid javascript", e);
  }

  try {
    result = fn.bind(this)(global);
  } catch (e) {
    console.warn("{{x " + expression + "}} hit a runtime error", e);
  }
  return result;
};