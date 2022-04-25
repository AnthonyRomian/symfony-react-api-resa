import React from 'react';

const HomePage = (props) => {
    return (
        <div className="py-3">
            <h1 className="font-link text-center">A propos de moi</h1>
            <div className="card-deck row py-4">
                <div className="card">
                    <div className="card-body font-link text-center">
                        Sandra<br/>
                        Praticienne en massages bien-être<br/>
                        Sur rendez-vous<br/>
                        37360 BEAUMONT LA RONCE
                    </div>
                </div>
                <div className="card ">
                    <div className="card-body font-link justify-content">
                        Certifiée fin 2021 par l'école 'En Vie de Sens' située à Tours (37), je vous propose un moment
                        de détente <br/>
                        Pour les enfants, adultes et femmes enceintes, les massages proposés sont à but
                        non-thérapeutiques, non-médical et seront adaptés à chacun.
                        Les huiles utilisées sont certifiées bio.
                    </div>
                </div>
                <div className="mx-5 card text-center">
                    <div className="card-header font-link">Offre de bienvenue</div>
                    <div className="card-body font-link">10€ offert sur le 1er massage</div>
                </div>


            </div>

        </div>

    );
}

export default HomePage;