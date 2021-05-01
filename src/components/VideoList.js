import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    let i = 0;
    return <VideoItem key={i++} video={video} onVideoSelect={onVideoSelect} />;
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoList;
