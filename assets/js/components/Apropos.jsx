import React from 'react';

const Apropos = (props) => {
    return (

        <div className="py-3 mx-1">
            <h1 className="font-link text-center fs-1 mt-1">A propos de moi</h1>
            <div className="col-12 col-sm-12 col-xl-7 mb-3 mb-sm-0 mb-xl-0 text-center mx-auto card">
                <div className="card-body font-link align-middle fs-4 ">
                    Sandra<br/>
                    Praticienne en massages bien-être<br/>
                    <h4 className="mb-3 color-3">Certifiée par l'école 'En Vie de Sens' située à Tours (37) </h4>
                    <h3 className="fw-bold mt-2 text-gray-700">
                        Adresse
                    </h3>
                    <ul className="list-unstyled text-muted ">
                        <li className="mb-3 color-3">33 Rue des prés</li>
                        <li className="mb-3 color-3">37360 Beaumont Louestault</li>
                    </ul>
                    <h3 className="fw-bold mt-2 text-gray-700">
                        Horaires
                    </h3>
                    <ul className="list-unstyled text-muted ">
                        <li className="mb-3 color-3">Lundi au vendredi 9h30 à 19h</li>
                        <li className="mb-3 color-3">Samedi 9h30 à 17h</li>
                    </ul>
                    <h3 className="fw-bold mt-2 text-gray-700">
                        Sur rendez-vous par téléphone ou en ligne
                    </h3>
                    <a href="tel:0665366392" className=" text-decoration-none color-3 fw-bold mt-2 text-gray-700"><i
                        className="fa-solid fa-phone mx-2"></i>
                        06 65 36 63 92
                    </a>
                </div>
            </div>
            <div className="card-deck row justify-content-between text-center mx-1">
                <div className="col-12 col-sm-6 col-xl-6 mt-3 p-0 card">
                    <h2 className="card-header font-link">Carte cadeau</h2>
                    <div className="card-body font-link p-0">
                        <img className="rounded-bottom" height="100%" width="100%"
                             src="assets/img/carte_cadeaux.png"
                             alt="offre_du_moment"/>
                    </div>
                </div>
                <div className="col-12 col-sm-5 col-xl-5 mt-3 p-0 card text-center">
                    <h2 className="card-header font-link">10éme Massage Offert</h2>
                    <div className="card-body font-link p-0 ">
                        <img className="rounded-bottom" height="100%" width="100%"
                             src="assets/img/carte_fidelite_1.png"
                             alt="offre_du_moment"/>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Apropos;