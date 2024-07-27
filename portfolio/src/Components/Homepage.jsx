import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


const Homepage = () => {

    return (
        <div>
            <Header />
            <div className="presentation">
            <h2>
                Apr&eacute;s une formation en production audiovisuelle en C&ocirc;te d&apos;Ivoire, j&apos;ai rejoint l&apos;Universit&eacute; de
                Bordeaux Montaigne en France pour poursuivre des &eacute;tudes en cin&eacute;ma. Passionn&eacute; par l&apos;art instinctif,
                j&apos;ai r&eacute;alis&eacute; mon premier court-m&eacute;trage intitul&eacute; &laquo; Ganvi&eacute;, entre eau et terre &raquo;, une &ocirc;de &agrave; la beaut&eacute; et aux
                d&eacute;fis de la vie quotidienne dans les villages lacustres.
                Pour moi, la cam&eacute;ra est bien plus qu&apos;un simple outil : c&apos;est une arme puissante pour capturer et
                raconter les fragments de la vie.
            </h2>
            </div>
        </div>
    )
}

export default Homepage