import React, { useEffect, useState } from 'react';
import Video from './Video';
import videoUrlsData from '../assets/data/urlsFilm.json';

const CollectionFilm = () => {
    const [videoUrls, setVideoUrls] = useState([]);

    useEffect(() => {
        setVideoUrls(videoUrlsData);
    }, []);

    return (
        <div>
            <h1 className="titre-collection">Collection Film</h1>
            <div className="collection-container">
                {videoUrls.map(({ url, title, description, miniature, orientation }, index) => (
                    <div key={index} className="video-container">
                    <Video
                        url={url}
                        title={title}
                        description={description}
                        miniature={miniature}
                        orientation={orientation}
                    />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default CollectionFilm;