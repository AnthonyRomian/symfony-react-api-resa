import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = (props) => {


    return (
        <>

        <footer className="pt-3 py-8 py-md-11 bg-light-gray">
            <img id="frise" className="img-fluid pb-3 " src="assets/img/frise_1.png" alt="frise"/>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="text-center col-7 col-md-4 col-lg-4">
                        <h3 className="fw-bold text-black text-gray-700">
                            Un moment de bien-être
                        </h3>
                        <img src="assets/img/logos/logo_relachetvous.png" height={200} width={200} alt="..."
                             className=" footer-brand img-fluid mb-2"/>

                    </div>
                    <div className="text-center col-5 col-md-4 col-lg-4">
                        <h3 className="fw-bold text-black text-gray-700">
                            Menu
                        </h3>
                        <ul className="nav flex-column text-muted mb-6 mb-md-8 mb-lg-0">
                            <NavLink className="mb-3 fs-5 color-3 text-decoration-none font-link-2"
                                     to="/">Accueil</NavLink>
                            <NavLink className="mb-3 fs-5 color-3 text-decoration-none font-link-2"
                                     to="/reservation">Réservation</NavLink>
                            <NavLink className="mb-3 fs-5 color-3 text-decoration-none font-link-2"
                                     to="/contact">Contact</NavLink>
                        </ul>
                    </div>
                    <div className="text-center col-12 col-md-4 col-lg-4">
                        <h3 className="fw-bold text-black text-gray-700">
                            Horaires
                        </h3>
                        <ul className="list-unstyled text-muted mb-7 mb-md-7 mb-lg-0">
                            <li className="mb-3 fs-5 color-3">Lundi au vendredi 9h30 à 19h</li>
                            <li className="mb-3 fs-5 color-3">Samedi 9h30 à 17h</li>
                        </ul>
                        <h3 className="fw-bold text-black text-gray-700">
                            Suivez nous sur facebook
                        </h3>
                        <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                            <li className="list-inline-item list-social-item me-3">
                                <a href="#!" className="text-decoration-none">
                                    <i className="fab fa-facebook color-secondaire fs-4"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-center fs-5 text-black py-3"><i className="fa-solid fa-virus-covid color-secondaire"></i> Covid 19 masque et gel
                    hydroalcoolique à disposition <i
                        className="fa-solid fa-virus-covid color-secondaire"></i>
                </p>
            </div>
        </footer>
        </>

    );
}

export default Footer;