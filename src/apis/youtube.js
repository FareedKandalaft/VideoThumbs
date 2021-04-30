import axios from 'axios';

const KEY = 'AIzaSyC-u3Tja7iD3dvj-k813D9PZg8CSIIm6io';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
