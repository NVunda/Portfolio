import React, { useEffect, useState, useRef } from 'react';
import Video from './Video';
import videoUrlsData from '../assets/data/urlsDivers.json';

const CollectionDivers = () => {
    const [videoUrls, setVideoUrls] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        setVideoUrls(videoUrlsData);
    }, []);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div>
            <h1 className="titre-collection">Collection Divers</h1>
            <div className="collection-container portrait" ref={containerRef}>
                {videoUrls.map(({ url, title, description, miniature, orientation }, index) => (
                    orientation === 'portrait' && (
                        <div key={index} className="video-container">
                            <Video
                                url={url}
                                title={title}
                                description={description}
                                miniature={miniature}
                                orientation={orientation}
                            />
                        </div>
                    )
                ))}
            </div>
            <div className="collection-container landscape">
                {videoUrls.map(({ url, title, description, miniature, orientation }, index) => (
                    orientation === 'landscape' && (
                        <div key={index} className="video-container">
                            <Video
                                url={url}
                                title={title}
                                description={description}
                                miniature={miniature}
                                orientation={orientation}
                            />
                        </div>
                    )
                ))}
            </div>
            <button className="scroll-arrow left" onClick={scrollLeft}>&#9664;</button>
            <button className="scroll-arrow right" onClick={scrollRight}>&#9654;</button>
        </div>
    );
}

export default CollectionDivers;
