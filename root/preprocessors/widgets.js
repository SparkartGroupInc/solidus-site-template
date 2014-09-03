var _ = require('underscore');

module.exports = function( context ){

  // Editorial Widget / Browse Mode
  var editorials = context.resources.editorials || context.resources.story;

  _.each(editorials, function(element, index, list){
    if (element && element.terms){
      element.tags = _.map(element.terms.post_tag, function(post_tag){
        return post_tag.slug;
      });
    }
  });


  // Editorial Widget / Display Mode
  var story = context.resources.story;

  _.each(story, function(editorial, index, list){
    if (editorial && editorial.terms) {
      editorial.tags = _.map(editorial.terms.post_tag, function(post_tag){
        return post_tag.slug;
      });
    }
  });


  if( context.resources.albums ){

    context.resources.albums = context.resources.albums.Albums;

  }


  // Photo Widget / Browse Mode
  if( context.resources.photos ){
    var photos = context.resources.photos.Album.Images;

    _.each(photos, function(photo, index, list){
      photo.tags = _.map(photo.Keywords.split("; "), function(tag){
        album = _.find(context.resources.albums, function(album) { return album.Title == tag});

        if( album ){
          return {name: tag, albumID: album.id, albumKey: album.Key};
        } else {
          return null;
        }
      });

      photo.tag = context.parameters.tag || photo.tags[0].name;
      photo.albumID = context.parameters.albumID || photo.tags[0].albumID;
      photo.albumKey = context.parameters.albumKey || photo.tags[0].albumKey;
    });

    context.resources.photos = photos;
  }


  // Photo Widget / Display Mode
  if( context.resources.photo ){
    context.resources.photo = context.resources.photo.Image;

    // Set previous and next photos
    if( context.resources.photos ){

      var currentKey = context.resources.photo.Key, currentIndex = -1;
        context.resources.photos.forEach(function(element,index,array){

            if( element.Key === currentKey ){
                currentIndex = index;
            }

        });

        if (currentIndex != 0) {
            context.resources.photo.previous = context.resources.photos[currentIndex - 1];
            context.resources.photo.previous.page = context.page.name;
            context.resources.photo.previous.tag = context.parameters.tag;
            context.resources.photo.previous.albumID = context.parameters.albumID;
            context.resources.photo.previous.albumKey = context.parameters.albumKey;
        }

        if (currentIndex != context.resources.photos.length - 1) {
            context.resources.photo.next = context.resources.photos[currentIndex + 1];
            context.resources.photo.next.page = context.page.name;
            context.resources.photo.next.tag = context.parameters.tag;
            context.resources.photo.next.albumID = context.parameters.albumID;
            context.resources.photo.next.albumKey = context.parameters.albumKey;
        }

    }
  }


  return context;

};