import React, {useEffect, useState} from 'react';
import MassageCard from "../components/MassageCard";
import axios from "axios";
import massagesAPI from "../services/massagesAPI";
import {toast} from "react-toastify";
import ListMassageLoader from "../components/loaders/ListMassageLoader";
import ReservationPage from "./ReservationPage";
import LivreOr from "./LivreOr";


const MassagePage = (props) => {

    const [massages, setMassages] = useState([]);

    const [loading, setLoading] = useState(true);


    const fetchMassages = async () => {
        try {
            const data = await massagesAPI.findAll();
            setMassages(data);
            setLoading(false);
        } catch (error) {
            console.log(error.response);
            props.history.replace("/");
            toast.error("Impossible de charger les massages");
        }
    };

    // load du customer ou changement de l id
    /*axios.get("http://127.0.0.1:8000/api/massages")
        // .then(response => response.data["hydra:member"])
        .then(response => response.data)
        .then(data => setMassages(data))
        ;
    setLoading(false);*/


    useEffect(() => {
        fetchMassages();
    }, []);


    return (
        <>
            <div className="py-3 mx-1">
            <h1 className="text-center font-link fs-1 mt-1">Les massages</h1>
            {loading && <ListMassageLoader />}
            {!loading && <div className="row">
                {massages.map(massage => (
                    <div key={massage.id}>
                        <MassageCard className="col-6 col-md-6 col-lg-4 d-flex" id={massage.id} nom={massage.nom}
                                     img={massage.img} description={massage.description} prix={massage.prix}
                                     duree={massage.duree}/>
                    </div>))}
            </div>}
            <LivreOr/>
            <ReservationPage/>
            </div>
        </>
    );
};

export default MassagePage;