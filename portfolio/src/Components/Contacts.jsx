import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
   

    return (
        <div className="contact-form-container">
            <h1 className="titre-collection">Contact</h1>
            <div className="form">
                <div className="contact-info">
                    <h3 className="title">Restons en contact</h3>
                    <p className="text">
                        Veuillez remplir le formulaire ci-dessous.
                        Nous nous ferons le plaisir d y repondre dans les meilleur delais.
                    </p>

                    <div className="info">
                        <div className="information">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;&nbsp;
                            <p>62 Rue Heron, 33000 BORDEAUX</p>
                        </div>
                        <div className="information">
                            <FontAwesomeIcon icon={faEnvelope} /> &nbsp;&nbsp;
                            <p>chairman@vision.com</p>
                        </div>
                        <div className="information">
                            <FontAwesomeIcon icon={faPhone} /> &nbsp;&nbsp;
                            <p>123-456-789</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <p>Connect with us :</p>
                        <div className="social-icons">
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <span className="circle one"></span>
                    <span className="circle two"></span>

                    <form action="index.html" autoComplete="off">
                        <h3 className="title">Contactez-nous</h3>
                        <div className="input-container">
                            <input type="text" name="name" className="input" />
                            <label htmlFor="">Username</label>
                            <span>Username</span>
                        </div>
                        <div className="input-container">
                            <input type="email" name="email" className="input" />
                            <label htmlFor="">Email</label>
                            <span>Email</span>
                        </div>
                        <div className="input-container">
                            <input type="tel" name="phone" className="input" />
                            <label htmlFor="">Phone</label>
                            <span>Phone</span>
                        </div>
                        <div className="input-container textarea">
                            <textarea name="message" className="input"></textarea>
                            <label htmlFor="">Message</label>
                            <span>Message</span>
                        </div>
                        <input type="submit" value="Send" className="btn" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;