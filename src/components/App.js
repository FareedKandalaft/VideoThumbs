import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('angus young');
  }

  onSearchSubmit = async (search) => {
    const resp = await youTube.get('/search', {
      params: {
        q: search,
      },
    });

    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    // console.log('From the App!', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
