import React, { useEffect, useState, useRef } from 'react';

const Video = ({ url, title, description, miniature, orientation }) => {
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    videoElement.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.25 // Ajustez ce seuil selon vos besoins
        });

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <div className={`video-div ${orientation}`}>
            <video
                ref={videoRef}
                poster={miniature}
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
    );
}

export default Video;
