import React, { useEffect, useState } from 'react';
import Video from './Video';
import videoUrlsData from '../assets/data/urlsDivers.json';

const CollectionDivers = () => {
    const [videoUrls, setVideoUrls] = useState([]);

    useEffect(() => {
        setVideoUrls(videoUrlsData);
    }, []);

    return (
        <div>
        <h1 className="titre-collection">Collection Divers</h1>
            <div className="collection-container">
                {videoUrls.map(({ url, title, description, miniature, orientation}, index) => (
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

export default CollectionDivers;