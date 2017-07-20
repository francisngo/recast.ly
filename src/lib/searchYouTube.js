var searchYouTube = ({key = window.YOUTUBE_API_KEY, query, max = 5}, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: key,
      q: query,
      maxResults: max,
      type: 'video',
    },
    success: function(data) {
      // console.log(data);
      // console.log('success ran');
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;


/////////////////////////

// var Videos = Backbone.Collection.extend({

//   model: Video,

//   url: 'https://www.googleapis.com/youtube/v3/search',

//   search: function(query) {

//     this.fetch({
//       data: {
//         part: 'snippet',
//         key: window.YOUTUBE_API_KEY,
//         q: query,
//         maxResults: 5,
//         type: 'video',
//         videoEmbeddable: true,
//       }
//     });

//   },

//   parse: function(response) {
//     return response.items;
//   }

// });
