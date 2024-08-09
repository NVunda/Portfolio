import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const Contacts = () => {
    const formRef = useRef(null);
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const phoneInput = useRef(null);
    const messageInput = useRef(null);

    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const focusFunc = (e) => {
        let parent = e.target.parentNode;
        parent.classList.add("focus");
    };

    const blurFunc = (e) => {
        let parent = e.target.parentNode;
        if (e.target.value === "") {
            parent.classList.remove("focus");
        }
    };

    useEffect(() => {
        const inputs = [nameInput.current, emailInput.current, phoneInput.current, messageInput.current];
        inputs.forEach((input) => {
            if (input) {
                input.addEventListener("focus", focusFunc);
                input.addEventListener("blur", blurFunc);
            }
        });

        return () => {
            inputs.forEach((input) => {
                if (input) {
                    input.removeEventListener("focus", focusFunc);
                    input.removeEventListener("blur", blurFunc);
                }
            });
        };
    }, []);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const regex = /^\d{10}$/; // Assumes a 10-digit phone number
        return regex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailInput.current.value;
        const phone = phoneInput.current.value;

        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Email invalide');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!validatePhone(phone)) {
            setPhoneError('Numéro de téléphone invalide');
            valid = false;
        } else {
            setPhoneError('');
        }

        if (valid) {
            // Envoyer l'email via EmailJS
            emailjs.sendForm('service_jvv3sro', 'template_qy557o5', formRef.current, 'OlVdqo6_sxXDIUYip')
                .then((result) => {
                    console.log(result.text);
                    alert('Email envoye avec succes !');
                }, (error) => {
                    console.log(error.text);
                    alert('Erreur lors de l envoi de l email.');
                });
        }
    };

    return (
        <div className="contact-form-container">
            <h1 className="titre-collection">Contact</h1>
            <div className="form">
                <div className="contact-info">
                    <h3 className="title">Restons en contact</h3>
                    <p className="text">
                        Veuillez remplir le formulaire ci-dessous.
                        Nous nous ferons le plaisir d y repondre au plus vite.
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
                    <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
                        <h3 className="title">Contact us</h3>
                        <div className="input-container">
                            <input ref={nameInput} type="text" name="name" className="input" maxLength="50" required />
                            <label htmlFor="">Username</label>
                            <span>Username</span>
                        </div>
                        <div className="input-container">
                            <input ref={emailInput} type="email" name="email" className="input" maxLength="50" required />
                            <label htmlFor="">Email</label>
                            <span>Email</span>
                            {emailError && <p className="error">{emailError}</p>}
                        </div>
                        <div className="input-container">
                            <input ref={phoneInput} type="tel" name="phone" className="input" maxLength="10" required />
                            <label htmlFor="">Phone</label>
                            <span>Phone</span>
                            {phoneError && <p className="error">{phoneError}</p>}
                        </div>
                        <div className="input-container textarea">
                            <textarea ref={messageInput} name="message" className="input" maxLength="400" required></textarea>
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
