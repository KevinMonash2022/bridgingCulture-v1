import React, { useState } from 'react';
import axios from 'axios';

const YouTubeSearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        if (!searchTerm) {
            console.log('No search term provided');
            return;
        }
        try {
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: 'snippet',
                    maxResults: 10,
                    q: searchTerm,
                    type: 'video',
                    key: 'AIzaSyB8kOmxv5TbI6aA8tCC_hLL7U0vs1DxqkA'
                }
            });
            setVideos(response.data.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };


    return (
        <div className="mt-4">
            <input
                type="text"
                placeholder="Enter a word to search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border rounded w-full"
            />
            <button
                onClick={fetchVideos}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Search
            </button>
            <ul className="mt-4">
                {videos.map(video => (
                    <li key={video.id.videoId} className="my-2">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YouTubeSearchComponent;
