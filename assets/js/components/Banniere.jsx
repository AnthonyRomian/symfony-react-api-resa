import React from 'react';

const Banniere = (props) => {

    return (
        <section className="overlay overlay-dark overlay-40" data-jarallax="" data-speed=".8"
        >
            <div className="container d-flex flex-column">
                <div className="row align-items-center justify-content-center py-4 py-2 py-md-1">
                    <div className="col-12 col-md-8 col-lg-6 text-center">
                        <p className="lead text-white font-link my-5">
                            Véritable outil de bien être, il permet à votre corps de retrouver des sensations et à votre
                            mental
                            de s’évader, amélioration de la posture, circulation relancée, réduction du stress et de
                            l’anxiété,
                            détente des muscles endoloris, système immunitaire rebooté et sommeil amélioré.
                        </p>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Banniere;