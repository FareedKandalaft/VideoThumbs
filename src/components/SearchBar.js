import React, { Component } from 'react';

export class SearchBar extends Component {
  state = { search: '' };

  onInputChanged = (e) => {
    // console.log(e.target.value);
    this.setState({ search: e.target.value });
  };

  onFormSubmit = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    // TODO need to callback from parent component
    this.props.onFormSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Search for a Video</label>
            <input
              type='text'
              value={this.state.search}
              onChange={this.onInputChanged}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
