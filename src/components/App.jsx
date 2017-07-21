class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };

    this.entryClick = this.entryClick.bind(this);
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
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
        <Nav bluesClues={this.getYouTubeVideos}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList homer_simpson={this.entryClick} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
