import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <video autoPlay muted loop className="background-video">
                <source src="path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="header-content">
                <h4>REALISATEUR/VIDEASTE</h4>
                <h1>VINCENT KOUTCHAM BOCO</h1>
                <div className="meta">
                    <a href="#" target="_b" className="author"></a>
                </div>
            </div>
        </div>
    );
};

export default Header;
