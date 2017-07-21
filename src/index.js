// TODO: Render the `App` component to the DOM
//ReactDOM.render(<App searchYouTube={_.debounce(window.searchYouTube, 500)} />, document.getElementById('app'));
ReactDOM.render(<App searchYouTube={window.searchYouTube} />, document.getElementById('app'));
