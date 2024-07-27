import React, { useEffect } from 'react';
import Video from './Video';


const CollectionMariage = () => {

    const videoUrls = [
        {
            url: 'src/assets/videos/mariage/lesmarieesdevalentine.mp4',
            title: 'Les Mariees de Valentine',
            description: 'La Flaime a ete creeee par un groupe de passionnes de la video de mariage',
            miniature: 'src/assets/images/lesmarieesdevalentine.JPG'
        },
        {
            url: 'src/assets/videos/mariage/weddingteaser1.mp4',
            title: 'Mariage 1',
            description: 'La Flaime a ete creeee par un groupe de passionnes de la video de mariage',
            miniature: 'src/assets/images/mariage1.JPG',
        },
        {
            url: 'src/assets/videos/mariage/weddingteaser2.mp4',
            title: 'Mariage 2',
            description: 'La Flaime a ete creeee par un groupe de passionnes de la video de mariage',
            miniature: 'src/assets/images/mariage2b.JPG',
        },
        {
            url: 'src/assets/videos/mariage/weddingteaser3.mp4',
            title: 'Mariage 3',
            description: 'La Flaime a ete creeee par un groupe de passionnes de la video de mariage',
            miniature: 'src/assets/images/mariage3a.JPG',
        },
        {
            url: 'src/assets/videos/mariage/weddingteaser4.mp4',
            title: 'Mariage 4',
            description: 'La Flaime a ete creeee par un groupe de passionnes de la video de mariage',
            miniature: 'src/assets/images/mariage4.JPG',
        }
        
    ];

    return (
        <div>
        <h1 className="titre-collection">Collection Mariage</h1>
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

export default CollectionMariage;