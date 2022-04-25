import React, {Component, useState} from 'react';


const MassageCard = (props) => {
    {


        return (
            <section className="page-section" id="les massages">
                <div className=" card mt-3">
                    <h2 className="card-header text-center section-heading text-uppercase font-link">{props.nom}</h2>
                    <ul className=" timeline card-body">

                        <li className="d-flex flex-row  m-1 ">
                            <div className={`timeline-image p-2 ${props.id % 2 === 0 ? '' : 'order-2'}`}>
                                <img className="rounded-circle "
                                     src={"assets/img/" + props.img + ".jpg"} height="200px" width="250px" alt="..."/>
                            </div>
                            <div className="timeline-panel text-justify p-4">
                                <div className="timeline-body font-link "><p
                                    className="text-muted">{props.description}</p></div>
                                <div className="timeline-heading font-link">
                                    <h4>{props.prix}€ la séance de {props.duree} minutes</h4>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </section>
        )
    }
};

export default MassageCard;
