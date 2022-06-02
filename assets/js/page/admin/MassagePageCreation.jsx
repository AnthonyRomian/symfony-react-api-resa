import React, {useContext, useState} from "react";
import {toast} from "react-toastify";
import AuthContext from "../../contexts/AuthContext";
import {Link} from "react-router-dom";
import massagesAPI from "../../services/massagesAPI";
import Field from "../../components/forms/Field";

const ReservationPageCreation = (props) => {

    const { isAuthenticated } = useContext(AuthContext);

    const [massage, setMassage] = useState({
        nom: "",
        description: "",
        prix: "",
        duree: "",
        img: "",
    });

    const [errors, setErrors] = useState({
        nom: "",
        description: "",
        prix: "",
        duree: "",
        img: "",
    });

    // gestion des changements du form input
    const handleChange = ({currentTarget}) => {

        const {name, value} = currentTarget;
        setMassage({...massage, [name]: value});
    };

    //gestion de la soumission du form
    const handleSubmit = async event => {
        event.preventDefault();
        massage.prix = parseInt(massage.prix);
        massage.duree = parseInt(massage.duree);

        try {
            await massagesAPI.create(massage);
            if (isAuthenticated) {
                // history.push("/admin");
            toast.success("Votre massage à bien été créer");
            } else {
                toast.success("Votre massage à bien été créer");

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

            <div className="py-3">
                <div className="mb-3 py-3 d-flex justify-content-between align-items-center">
                    <h1 className="font-link text-center">Massage</h1>
                    <Link to="/admin/massageList" className="btn btn-primary" >Voir la liste des Massages</Link>
                </div>
                <form onSubmit={handleSubmit} className="row">
                    <Field
                        name="nom"
                        label="Nom"
                        placeholder="Votre nom"
                        value={massage.nom}
                        onChange={handleChange}
                        error={errors.nom}
                    />
                    <Field
                        name="description"
                        label="Description"
                        placeholder="Description"
                        value={massage.description}
                        onChange={handleChange}
                        error={errors.description}
                    />

                    <Field
                        name="prix"
                        label="Prix"
                        placeholder="Prix"
                        type="number"
                        value={parseInt(massage.prix)}
                        onChange={handleChange}
                        error={errors.prix}
                    />

                    <Field
                        name="duree"
                        label="Durée du massage"
                        placeholder="Durée"
                        type="number"
                        value={parseInt(massage.duree)}
                        onChange={handleChange}
                        error={errors.duree}
                    />

                    <Field
                        name="img"
                        label="Image du massage"
                        type="string"
                        value={massage.img}
                        onChange={handleChange}
                        error={errors.img}
                    />

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary my-3">Créer un massage</button>
                    </div>
                </form>
            </div>
    );
};

export default ReservationPageCreation;