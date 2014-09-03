module.exports = function(parameters, options){
  currentPage = parseFloat(parameters.editorial_page);
  var pagination = [];
  if (options.hash.items.length >= 5) {
    //If we're on a page with at least five stories there may be more so push a
    //link to the next page
    pagination.push({actionPage: currentPage + 1, actionClass: 'next', actionLabel: 'Next'});
  }
  if (currentPage > 1) {
    //If we're on any page greater than the first page, show a back link
    pagination.push({actionPage: currentPage - 1, actionClass: 'back', actionLabel: 'Back'});
  }

  var ret = "";
  pagination.forEach(function(paginationLink){
    ret = ret + options.fn(paginationLink);
  });
  return ret;
};