import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { text: 'PRESENTATION', to: "/" },
        { text: 'FILMS', to: "CollectionFilm" },
        { text: 'MARIAGES', to: "CollectionMariage" },
        { text: 'DIVERS', to: "CollectionDivers" },
        { text: 'CONTACTS', to: "CollectionDivers" }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="sides">
            {navLinks.map(({ text, to }, index) => (
                <a key={index} className="onglets">
                    <Link to={to}>{text}</Link>
                </a>
                ))
            }
            <div className="menu-burger" onClick={toggleMenu}> </div>
            {isMenuOpen && (
                <div className="dropdown-menu" >
                    {navLinks.map(({ text, to }, index) => (
                        <a key={index} className="dropdown-onglets">
                            <Link to={to}>{text}</Link>
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Navbar