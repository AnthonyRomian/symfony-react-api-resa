import React, {useContext, useState} from 'react';

const Footer = (props) => {


    return (
        <footer className="pt-3 py-md-11 bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">

                        <img src="assets/img/logos/logo_massage_3.png" alt="..."
                             className="footer-brand img-fluid mb-2"/>

                        <p className="text-gray-700 mb-2">
                            Un moment de bien être </p>

                        <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                            <li className="list-inline-item list-social-item me-3">
                                <a href="#!" className="text-decoration-none">
                                    <i className="fab fa-facebook "></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">

                        <h6 className="fw-bold text-uppercase text-gray-700">
                            MENU
                        </h6>

                        <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Accueil
                                </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Réservation
                                </a>
                            </li>
                            <li className="mb-3">
                                <a href="#!" className="text-reset">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>
                    <div className="col-8 col-md-4 col-lg-7">

                        <h6 className="fw-bold text-uppercase text-gray-700">
                            IMPORTANT
                        </h6>

                        <ul className="list-unstyled text-muted mb-7 mb-md-7 mb-lg-0">
                            <li className="mb-3">
                                <p className="text-reset">
                                    Les massages bien-être ne peuvent se substituer à une consultation chez un médecin
                                    ni à
                                    une rééducation thérapeutique dispensée par un masseur-kinésithérapeute, et n’ont
                                    aucune connotation sexuelle.
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>
                <p className="text-center">Covid 19 : masque et gel hydroalcoolique à disposition
                </p>
            </div>
        </footer>


    );
}

export default Footer;