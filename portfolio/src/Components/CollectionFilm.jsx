import React, { useEffect } from 'react';
import Video from './Video';


const CollectionFilm = () => {

    const videoUrls = [
        {
            url: 'src/assets/videos/film/LAFLAIME.mp4',
            title: 'La Flaime',
            description: 'Un spot publicitaire pour la marque de vetements eponyme, mettant en avant une philosophie de savoir-faire et la capacite de tout transformer en energie positive.',
            miniature: 'src/assets/images/LAFLAIME.JPG'
        },
        {
            url: 'src/assets/videos/film/MABOUTEILLE.mp4',
            title: 'Ma Bouteille',
            description: 'Une plongee poignante dans les meandres des problemes qui menent certains a la dependance toxique.',
            miniature: 'src/assets/images/mabouteille.JPG'
        },
        {
            url: 'src/assets/videos/film/Ganvie.mp4',
            title: 'Ganvie entre eau et terre',
            description: 'une ode a la beaute et aux defis de la vie quotidienne dans les villages lacustres',
            miniature: 'src/assets/images/ganvie.JPG'
        }
    ];

    return (
        <div>
            <h1 className="titre-collection">Collection Film</h1>
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

export default CollectionFilm;