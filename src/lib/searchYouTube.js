var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {
      if (data.items) {
        callback(data.items);
      }
    },
    fail: function() {
      console.log('searchYouTube failed');
    }
  });
};

window.searchYouTube = searchYouTube;
