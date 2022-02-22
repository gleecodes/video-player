import axios from 'axios'

const KEY = 'AIzaSyD_cT0rBTKnz0RNU2c7JIgKiR2RTKVHu88';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});