import React, { useState} from 'react';
import ReactCardFlip from "react-card-flip";



const FlipCard = (props) => {

    const [isFlipped, setIsFlipped] = useState(true);

    /*const handleOver = () => {
        setIsFlipped(!isFlipped);
    };*/

    function handleOver() {

        setIsFlipped(!isFlipped);

    }

    {
            return (
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" containerClassName="col-12 col-sm-12 col-md-6 mt-3 p-0 card">
                    <div id="flip" onMouseOver={setTimeout(handleOver,3000 )}  >
                        <div className="card-body font-link">
                            <div className="text-center">
                                <img
                                     src="assets/img/offre_de_bienvenue_2.png" alt="offre_du_moment"/>
                            </div>
                        </div>
                    </div>
                    <div id="flip" onMouseOver={setTimeout(handleOver,3000 )} >
                        <div className="card-body font-link " >
                            <h2 className="text-center pt-5" >
                                10€ offert sur le 1er massage
                            </h2>
                        </div>
                    </div>
                </ReactCardFlip>
            )

    }

};

export default FlipCard;
