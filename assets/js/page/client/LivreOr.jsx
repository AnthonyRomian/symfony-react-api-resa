import React from 'react';

const LivreOr = (props) => {
    return (
        <div className="py-3">
            <h1 className="font-link text-center my-1">Avis clients</h1>
            <div className="card-deck row justify-content-between mt-3 mx-2">
                <div className="col-12 col-sm-3 col-xl-3 mb-3 mb-sm-0 mb-xl-0 card">
                    <div className="card-body font-link justify-content">
                        <img className="img-thumbnail rounded-circle" src="/assets/img/avatar/AvatarMaker_2.png"
                             alt=""/>
                        <h3 className="mt-2 text-center">Pierrette</h3>
                        <p className="fs-5 mt-3 text-center"><i className="px-1 pb-2 fa-solid fa-quote-left"></i>Un
                            moment de détente sans pareil<i
                                className="px-1 pb-2 fa-solid fa-quote-right"></i>
                        </p>
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-xl-3 mb-3 mb-sm-0 mb-xl-0 text-center card ">
                    <div className="card-body font-link justify-content">
                        <img className="img-thumbnail rounded-circle" src="/assets/img/avatar/AvatarMaker_1.png"
                             alt=""/>
                        <h3 className="mt-2 text-center">Catherine</h3>
                        <p className="fs-5 mt-2 text-center"><i className="px-1 pb-2 fa-solid fa-quote-left"></i>A ne
                            pas manquer !<i
                                className="px-1 pb-2 fa-solid fa-quote-right"></i>
                        </p>
                    </div>
                </div>
                <div className="col-12 col-sm-3 col-xl-3 card">
                    <div className="card-body font-link justify-content">
                        <img className="img-thumbnail rounded-circle" src="/assets/img/avatar/AvatarMaker_3.png"
                             alt=""/>
                        <h3 className="mt-2 text-center">Martine</h3>
                        <p className="fs-5 mt-3 text-center"><i className="px-1 pb-2 fa-solid fa-quote-left"></i>Relaxation
                            assurée<i
                                className="px-1 pb-2 fa-solid fa-quote-right"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LivreOr;