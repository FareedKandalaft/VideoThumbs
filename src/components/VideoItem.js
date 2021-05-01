import React from 'react';
import './VideoItem.css';
// import PropTypes from 'prop-types';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt=''
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

// VideoItem.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default VideoItem;
