import React, { useEffect, useState } from 'react';

const Video = ({ url, title, description, miniature }) => {

    const [showControls, setShowControls] = useState(false);
    useEffect(() => {
        const iframes = document.querySelectorAll('.video-div video');
        iframes.forEach(iframe => {
            iframe.addEventListener('load', () => {
                const video = iframe.contentWindow.document.querySelector('video');
                if (video) {
                    video.pause();
                }
            });
        });
    }, []);

    return (
        <div className="video-div">
            <video poster={miniature}
                controls={showControls}
                className={`video ${showControls ? 'fade-in' : 'fade-out'}`}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}>
                <source src={url} type="video/mp4" />
            </video>
            <div className="detail-video">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Video;