import React, {useEffect, useState} from 'react';
import MassageCard from "../../components/MassageCard";
import massagesAPI from "../../services/massagesAPI";
import {toast} from "react-toastify";
import ListMassageLoader from "../../components/loaders/ListMassageLoader";
import ReservationPage from "./ReservationPage";
import LivreOr from "./LivreOr";
import FlipCard from "../../components/FlipCard";
import ReservationDomicile from "../../components/ReservationDomicile";


const MassagePage = (props) => {

    const [massages, setMassages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMassages = async () => {
        try {
            const data = await massagesAPI.findAll();
            setMassages(data);
            setLoading(false);
        } catch (error) {
            //console.log(error.response);
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
                <h1 className="text-center font-link  fs-1 mt-1">Les massages</h1>
                <div className="row mx-1">
                    <div className=" col-12 col-md-6 mt-3 text-center px-5 font-link">
                        <h5>
                            Chaque personne est différente et mérite une attention particulière, après un moment d’échange, j'adapterai les
                            techniques de massages et les huiles à vos ressentis du moment<br/><br/>
                            Pour les enfants*, adultes et femmes enceintes, les massages proposés sont à but
                            non-thérapeutiques, non-médical et seront adaptés à chacun.<br/><br/>
                            Les huiles utilisées sont certifiées bio.<br/>
                        </h5>
                        <h6 className="mb-2 fs-10 color-3">* Enfant à partir de X ans</h6>
                    </div>
                    <FlipCard />
                </div>

                {loading && <ListMassageLoader/>}
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
                <ReservationDomicile/>
            </div>
        </>
    );
};

export default MassagePage;