import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export class App extends Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async (search) => {
    const resp = await youTube.get('/search', {
      params: {
        q: search,
      },
    });

    this.setState({ videos: resp.data.items });
  };

  onVideoSelect = (video) => {
    // console.log('From the App!', video);
    this.setState({ selectedVideo: video });
    console.log(this.state.selectVideo);
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
