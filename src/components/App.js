import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/youtube';
import VideoList from './VideoList';

export class App extends Component {
  state = { videos: [] };

  onSearchSubmit = async (search) => {
    const resp = await youTube.get('/search', {
      params: {
        q: search,
      },
    });

    this.setState({ videos: resp.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
