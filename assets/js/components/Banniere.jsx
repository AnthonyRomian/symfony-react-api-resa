import React from 'react';

const Banniere = (props) => {

    return (
        <section className="overlay overlay-dark overlay-40" data-jarallax="" data-speed=".8">
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center  py-2 ">
                    <div className="col-12 col-md-8 col-lg-7 text-center">
                        <p className="lead text-white font-link my-4 fs-2">
                            Véritable outil de bien être, il permet à votre corps de retrouver des sensations et à votre
                            mental de s’évader, amélioration de la posture, circulation relancée, réduction du stress et de
                            l’anxiété, détente des muscles endoloris, système immunitaire rebooté et sommeil amélioré.
                        </p>
                    </div>
                </div>
            </div>
            <div id="shape" className=" position-relative">
                <div className="shape shape-bottom shape-fluid-x text-dark">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#e3e2e2"></path>
                    </svg>
                </div>
            </div>
        </section>


    );
}

export default Banniere;