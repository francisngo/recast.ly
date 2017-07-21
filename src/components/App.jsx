class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: null,
      videos: []
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('cute puppies');
  }

  entryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  getYouTubeVideos(query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 5
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videos: videos
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)} />
            </div>
          </div>
        </nav>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList homer_simpson={this.entryClick.bind(this)} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
