var _  = require('underscore');
_.str = require('underscore.string');

module.exports = function(page, resources){
  var wordpress, smugmug, universeEvent;

  // The wordpress variable should contain an object that represents a single
  // post or page from the WordPress API.
  if ('story' in resources) {
    wordpress = resources.story[0] || resources.story;
  }

  // The smugmug variable should contain an object that represents either
  // a single image, or an album from the SmugMug API, but not both.
  if ('smugmug' in resources) {
    smugmug = resources.smugmug;
  }

  // The universe variable should contain an object that represents a single
  // event from the Universe API.
  if ('universe' in resources && 'event' in resources.universe) {
    universeEvent = resources.universe.event;
  }


  // WordPress Pages
  if (wordpress) {
    if ('title' in wordpress) {
      page.title = _.str.titleize(wordpress.title);
    }
    if ('excerpt' in wordpress) {
      page.description = _.str.stripTags(wordpress.excerpt);
    }
  }

  // SmugMug
  else if (smugmug) {
    // SmugMug Single Image
    if ('Image' in smugmug) {
      page.title = 'Photo'; //There's no good data in the API for a page title
      if ('Caption' in smugmug.Image) {
        page.description = _.str.stripTags(smugmug.Image.Caption);
      }
    }
    //SmugMug Album
    else if ('Album' in smugmug) {
      if ('Title' in smugmug.Album) {
        page.title = _.str.titleize(smugmug.Album.Title);
      }
      if ('Description' in smugmug.Album) {
        page.description = _.str.stripTags(smugmug.Album.Description);
      }
    }
  }

  // Universe Event Page
  else if (universeEvent) {
    if ('title' in universeEvent) {
      page.title = _.str.titleize(universeEvent.title);
    }
    if ('description' in universeEvent) {
      page.description = _.str.stripTags(universeEvent.description);
    }
  }

  // Default Metadata
  if (typeof(page.description) === 'undefined' || page.description === '') {
    page.description = 'Website for {%= name %}. Powered by Solidus.';
  }

  return page;
};