import React, {useEffect, useState} from "react";
import Field from "../components/forms/Field";
import axios from "axios";
import Select from "../components/forms/Select";
import {toast} from "react-toastify";

const ReservationPage = (props) => {

    const [massages, setMassages] = useState([]);

    // load du massage
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/massages")
            .then(response => response.data["hydra:member"])
            .then(data => setMassages(data));
    }, []);




    const [reservation, setReservation] = useState({
        nom: "",
        prenom: "",
        email: "",
        tel: "",
        dateRdv: "",
        massage: ""
    });

    const [errors, setErrors] = useState({
        nom: "",
        prenom: "",
        email: "",
        tel: "",
        dateRdv: "",
        massage: ""
    });

    // gestion des changements du form input
    const handleChange = ({currentTarget}) => {

        const {name, value} = currentTarget;
        setReservation({...reservation, [name]: value});
    };



    const handleLoad = () => {
        console.log("test");

    }

    //gestion de la soumission du form
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/reservations", {
                ...reservation,
                massage: `/api/massages/${reservation.massage}`
            });
            toast.success("Votre réservation à bien été prise en compte");
        } catch ({response}) {
            toast.error("Selectionnez votre massage");
            const {violations} = response.data;
            if (violations) {
                const apiErrors = {};
                violations.forEach(({propertyPath, message}) => {
                    apiErrors[propertyPath] = message;
                });
                setErrors(apiErrors);
                toast.error("Il y a des erreurs dans votre formulaire");

            }
        }
    };

    return (

            <div className="py-3">
                <h1 className="font-link text-center">Réservation</h1>
                <form onSubmit={handleSubmit} className="row">
                    <Field
                        name="nom"
                        label="Nom"
                        placeholder="Votre nom"
                        value={reservation.nom}
                        onChange={handleChange}
                        error={errors.nom}
                    />
                    <Field
                        name="prenom"
                        label="Prénom"
                        placeholder="Votre prénom"
                        value={reservation.prenom}
                        onChange={handleChange}
                        error={errors.prenom}
                    />

                    <Field
                        name="email"
                        label="Email"
                        placeholder="Votre adresse email"
                        type="email"
                        value={reservation.email}
                        onChange={handleChange}
                        error={errors.email}
                    />

                    <Field
                        name="tel"
                        label="N° de téléphone"
                        placeholder="Votre numéro de téléphone"
                        type="string"
                        value={reservation.tel}
                        onChange={handleChange}
                        error={errors.tel}
                    />


                    <Field
                        name="dateRdv"
                        label="Date du rendez vous"
                        type="datetime-local"
                        value={reservation.dateRdv}
                        onChange={handleChange}
                        error={errors.dateRdv}
                    />

                    <Select
                        name="massage"
                        label="Quel massage avez vous choisi ?"
                        value={reservation.massage}
                        placeholder="Choisir un massage"
                        error={errors.massage}
                        onChange={handleChange}>
                        {massages.map(massage =>
                            <option  key={massage.id} value={massage.id}>
                                {massage.nom} | {massage.prix}€
                            </option>)
                        }
                    </Select>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Réserver un moment de détente</button>
                    </div>
                </form>
            </div>
    );
};

export default ReservationPage;