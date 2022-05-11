import React from 'react';
import ContactPage from "./ContactPage";
import MassagePage from "./MassagePage";

const HomePage = (props) => {
    return (
        <>

            <div className="py-3">
                <h1 className="font-link text-center fs-1 mt-1">A propos de moi</h1>
                <div className="card-deck row justify-content-between text-center mx-1">
                    <div className="col-12 col-sm-5 col-xl-5 mb-3 mb-sm-0 mb-xl-0  card">
                        <div className="card-body font-link align-middle fs-4 ">
                            Sandra<br/>
                            Praticienne en massages bien-être<br/>
                            Sur rendez-vous<br/>
                            33 Rue des prés<br/>
                            37360 Beaumont la ronce

                            <h3 className="fw-bold mt-2 text-gray-700">
                                Horaires
                            </h3>
                            <ul className="list-unstyled text-muted ">
                                <li className="mb-3 color-secondaire">Lundi au vendredi 9h-12h à 13h-18h</li>
                            </ul>
                            <h4 className="fw-bold mt-2 text-gray-700"><i className="fa-solid fa-phone mx-2"></i>
                                06 82 16 56 29
                            </h4>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6   card ">
                        <div className="card-body font-link justify-content fs-3">
                            Certifiée fin 2021 par l'école 'En Vie de Sens' située à Tours (37), je vous propose un
                            moment
                            de détente <br/>
                            Pour les enfants, adultes et femmes enceintes, les massages proposés sont à but
                            non-thérapeutiques, non-médical et seront adaptés à chacun.<br/>
                            Les huiles utilisées sont certifiées bio.
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6 mt-3 p-0 card">
                        {/*<div className="card-header font-link">Offre de bienvenue</div>*/}
                        <h2 className="card-header text-center font-link">10€ offert sur le 1er massage</h2>
                        <div className="card-body font-link">
                            <div className="text-center">
                                <img className="text-center" height="70%" width="70%"
                                     src="assets/img/offre_de_bienvenue.jpg" alt="offre_du_moment"/>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-5 col-xl-5 mt-3 p-0 card text-center">
                        <h2 className="card-header font-link">Carte de fidélité</h2>
                        <div className="card-body font-link"><h4>10éme Massage Offert</h4>
                            <div className="">
                                <img height="85%" width="85%" src="assets/img/carte_fidelité.jpg"
                                     alt="offre_du_moment"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <MassagePage/>
        </>


    );
}

export default HomePage;