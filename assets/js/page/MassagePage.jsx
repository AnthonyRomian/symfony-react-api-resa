import React, {useEffect, useState} from 'react';
import MassageCard from "../components/MassageCard";
import axios from "axios";

const MassagePage = (props) => {

    const [massages, setMassages] = useState([]);

    const fetchMassages = async () => {

    };

    // load du customer ou changement de l id
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/massages")
            .then(response => response.data["hydra:member"])
            .then(data => setMassages(data));
    }, []);


    return (
        <>
            <h1 className="text-center font-link">Les massages</h1>
            <div className="container row">
                {massages.map(massage => (
                    <div key={massage.id}>
                        <MassageCard className="col-6 col-md-6 col-lg-4 d-flex" id={massage.id} nom={massage.nom}
                                     img={massage.img} description={massage.description} prix={massage.prix}
                                     duree={massage.duree}/>
                    </div>))}
            </div>
        </>


    );
}

export default MassagePage;