import React, {useState, useEffect} from 'react';
import ReactCardFlip from "react-card-flip";
import promotionsAPI from "../services/promotionsAPI";
import {toast} from "react-toastify";


const FlipCard = (props) => {

    const [isFlipped, setIsFlipped] = useState(true);
    const [promos, setPromos] = useState([]);

    const fetchPromos = async () => {
        try {
            const data = await promotionsAPI.findAll();
            setPromos(data);
        } catch (error) {
            toast.error("Impossible de charger les massages");
        }
    };

    // load des promos
    useEffect(() => {
        fetchPromos();
    }, []);

    function handleOver() {
        setTimeout(setIsFlipped(!isFlipped), 3000);
    }

    const handleAutoFlip = () => {
        setTimeout(handleOver, 3000);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"
                       containerClassName="col-12 col-sm-12 col-md-6 mt-3 p-0 card">
            <div id="flip" onMouseOver={handleAutoFlip()}>
                <div className="card-body font-link">
                    <div className="text-center">
                        <img
                            src="assets/img/offre_de_bienvenue_2.png" alt="offre_du_moment"/>
                    </div>
                </div>
            </div>
            <div id="flip" onMouseOver={handleAutoFlip()}>
                <div className="card-body font-link ">
                    {promos.length === 0 && <h2 className="text-center pt-3">TEST</h2>  }
                    {promos.length > 0 && promos.map(promo => (
                        <h2 className="text-center pt-3" key={promo.id}>
                            <i className="fa-solid fa-gift px-2 fs-4 color-3"></i>{promo.nom}<i
                            className="fa-solid fa-circle-right px-2 fs-4 color-3"></i> {promo.description}
                        </h2>

                    ))}

                </div>
            </div>
        </ReactCardFlip>
    )


};

export default FlipCard;
