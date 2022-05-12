import React, {useContext, useEffect, useState} from "react";
import Field from "../components/forms/Field";
import axios from "axios";
import Select from "../components/forms/Select";
import {toast} from "react-toastify";
import AuthContext from "../contexts/AuthContext";
import {API_URL} from "../config";

const ReservationPage = (props) => {

    const [massages, setMassages] = useState([]);
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    // load du massage
    useEffect(() => {
        axios.get(API_URL+"massages")
            .then(response => response.data)
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
            await axios.post(API_URL+"reservations", {
                ...reservation,
                massage: `/api/massages/${reservation.massage}`
            });
            console.log(isAuthenticated);
            if (isAuthenticated) {
                history.push("/admin");
            toast.success("Votre réservation à bien été prise en compte");
            } else {
                toast.success("Votre réservation à bien été prise en compte");

            }
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

            <div className="py-3 mx-1">
                <h1 className="font-link text-center mt-1">Réservation</h1>
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
                        label="Date & heure du rendez vous"
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
                        <button type="submit" className="btn btn-primaire fs-3 mt-3 col-12">Réserver un moment de détente</button>
                    </div>
                </form>
            </div>
    );
};

export default ReservationPage;