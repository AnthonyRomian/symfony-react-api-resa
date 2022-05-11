import React from 'react';

const LivreOr = (props) => {
    return (
        <div className="py-3">
            <div className=" card-deck mt-3 mx-2">
                <div className="col-12 col-sm-12 col-xl-12 mb-3 mb-sm-0 mb-xl-0  card">
                    <div className="card-header text-center font-link fs-2"><i
                        className="fa-solid fa-circle-exclamation px-3"></i>Important<i
                        className="fa-solid fa-circle-exclamation px-3"></i></div>
                    <div className="card-body font-link justify-content">
                        <p className="text-muted text-justify font-link-2 fs-2 color-secondaire">
                            Les massages bien-être ne peuvent se substituer à une consultation chez un médecin
                            ni à une rééducation thérapeutique dispensée par un masseur-kinésithérapeute, et n’ont
                            aucune connotation sexuelle.
                        </p>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default LivreOr;