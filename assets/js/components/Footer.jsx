import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";

const Footer = (props) => {


    return (
        <>

        <footer className="pt-3 py-8 py-md-11 bg-light-gray">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="text-center col-7 col-md-4 col-lg-4">
                        <h4 className="fw-bold text-white text-gray-700">
                            Un moment de bien-être
                        </h4>
                        <img src="assets/img/logos/logo_1_1.png" height={150} width={150} alt="..."
                             className=" footer-brand img-fluid mb-2"/>

                    </div>
                    <div className="text-center col-3 col-md-4 col-lg-4">
                        <h4 className="fw-bold  text-white text-gray-700">
                            Menu
                        </h4>
                        <ul className="nav flex-column text-muted mb-6 mb-md-8 mb-lg-0">
                            <NavLink className="mb-3 color-secondaire text-decoration-none font-link-2"
                                     to="/">Accueil</NavLink>
                            <NavLink className="mb-3 color-secondaire text-decoration-none font-link-2"
                                     to="/reservation">Réservation</NavLink>
                            <NavLink className="mb-3 color-secondaire text-decoration-none font-link-2"
                                     to="/contact">Contact</NavLink>
                        </ul>
                    </div>
                    <div className="text-center col-12 col-md-4 col-lg-4">
                        <h4 className="fw-bold text-white text-gray-700">
                            Horaires
                        </h4>
                        <ul className="list-unstyled text-muted mb-7 mb-md-7 mb-lg-0">
                            <li className="mb-3 color-secondaire">Lundi au vendredi  9h-12h à 13h-18h</li>
                        </ul>
                        <h4 className="fw-bold text-white text-gray-700">
                            Suivez nous sur facebook
                        </h4>
                        <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                            <li className="list-inline-item list-social-item me-3">
                                <a href="#!" className="text-decoration-none">
                                    <i className="fab fa-facebook color-secondaire"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-white py-3"><i className="fa-solid fa-virus-covid color-secondaire"></i> Covid 19 masque et gel
                    hydroalcoolique à disposition <i
                        className="fa-solid fa-virus-covid color-secondaire"></i>
                </p>
            </div>
        </footer>
        </>

    );
}

export default Footer;