import React, { useEffect } from 'react';
import Video from './Video';


const CollectionDivers = () => {

    const videoUrls = [
        {
            url: 'src/assets/videos/divers/BlueMoon.mp4',
            title: 'Blue Moon',
            description: 'La Flaime a ete creeee par un groupe de passionnes de la video de mariage',
            miniature: 'src/assets/images/BlueMoon.JPG'
        },
        {
            url: 'src/assets/videos/divers/ricard.mp4',
            title: 'Ricard',
            description: 'La Flaime a ete creeee par un groupe de passionnes de la video de mariage',
            miniature: 'src/assets/images/Ricard.JPG'
        },
        {
            url: 'src/assets/videos/divers/SlowFashion.mp4',
            title: 'Slow Fashion',
            description: 'La Flaime a ete creeee par un groupe de passionnes de la video de mariage',
            miniature: 'src/assets/images/SlowFashion.JPG'
        },
        {
            url: 'src/assets/videos/divers/sofitel.mp4',
            title: 'Sofitel',
            description: 'La Flaime a ete creeee par un groupe de passionnes de la video de mariage',
            miniature: 'src/assets/images/sofitel.JPG'
        },
        {
            url: 'src/assets/videos/divers/sport.mp4',
            title: 'Sport',
            description: 'La Flaime a ete creeee par un groupe de passionnes de la video de mariage',
            miniature: 'src/assets/images/sport.JPG'
        }
    ];

    return (
        <div>
        <h1 className="titre-collection">Collection Divers</h1>
            <div className="collection-container">
                {videoUrls.map(({ url, title, description, miniature }, index) => (
                    <div key={index} className="video-container">
                        <Video
                            url={url}
                            title={title}
                            description={description}
                            miniature={miniature}
                        />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default CollectionDivers;