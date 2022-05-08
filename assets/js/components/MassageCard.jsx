import React, {Component, useState} from 'react';


const MassageCard = (props) => {
    {


        return (
            <div className="page-section" id="les massages">
                <div className=" card mt-3">
                    <h2 className="card-header text-center section-heading text-uppercase font-link"><i
                        className="px-1 pb-2 fa-solid fa-quote-left"></i> {props.nom} <i
                        className="px-1 pb-2 fa-solid fa-quote-right"></i></h2>
                    <ul className="timeline card-body">

                        <li className="d-flex flex-row  m-1 ">
                            <div className={`col-4 d-none d-sm-block timeline-image p-2 ${props.id % 2 === 0 ? '' : 'order-2'}`}>
                                <img className=" img-fluid rounded-circle "
                                     src={"assets/img/" + props.img + ".jpg"}  alt="..."/>
                            </div>
                            <div className="col timeline-panel text-justify px-3">
                                <div className="timeline-body font-link "><p
                                    className="text-muted"><i className="px-1 fa-solid fa-circle-plus"></i>{props.description}</p></div>
                                <div className="timeline-heading font-link">
                                    <h4><i className="px-1 fa-solid fa-circle-info"></i>{props.prix}€ la séance de {props.duree} minutes</h4>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
};

export default MassageCard;
