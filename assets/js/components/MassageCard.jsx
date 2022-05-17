import React, {Component, useState} from 'react';


const MassageCard = (props) => {
    {
        return (
            <div className="page-section mx-2" id="les massages">
                <div className=" card mt-3">
                    <h2 className="card-header text-center section-heading  font-link">{props.nom}</h2>
                    <div className="timeline card-body">

                        <div className="row">
                            <div className="col background-white">
                                <div className="clearfix">
                                        <img className={`img-fluid col-md-4 mb-3 mx-md-3 rounded-circle  ${props.id % 2 === 0 ? 'float-sm-start' : 'float-sm-end'}`}
                                             src={"assets/img/" + props.img + ".jpg"}  width="290" alt="photo du massage"/>
                                    <div className="font-link "><p
                                        className="color-3 text-justify fs-3">{props.description}</p></div>
                                    <div className="timeline-heading text-center font-link">
                                        {(props.duree === 0 && (
                                            <h4>{props.prix}€ la séance <br/>
                                                C'est bb qui décidera du temps à lui consacrer, prévoir entre 30 min et 1h.
                                            </h4>))
                                        || (<h4>{props.prix}€ la séance de {props.duree} minutes</h4>)}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
};

export default MassageCard;
