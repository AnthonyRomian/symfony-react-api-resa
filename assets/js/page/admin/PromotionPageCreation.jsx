import React, {  useState} from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import promotionsAPI from "../../services/promotionsAPI";
import Field from "../../components/forms/Field";

const ReservationPageCreation = (props) => {

    const [ setPromotions] = useState([]);

        const [promotion, setPromotion] = useState({
        nom: "",
        description: "",
        img: "",
    });

    const [errors, setErrors] = useState({
        nom: "",
        description: "",
        img: "",
    });

    // gestion des changements du form input
    const handleChange = ({currentTarget}) => {

        const {name, value} = currentTarget;
        setPromotion({...promotion, [name]: value});
    };

    //gestion de la soumission du form
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await promotionsAPI.create(promotion);
            toast.success("Votre promo à bien été prise en compte");
            props.history.push("/admin/promoList");

        } catch (error) {
            toast.error("Selectionnez votre promo");
            const {violations} = error.response.data;
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
                    <h1 className="font-link text-center">Promo</h1>
                    <Link to="/admin/promoList" className="btn btn-primary" >Voir la liste des promos</Link>
                </div>
                <form onSubmit={handleSubmit} className="row">
                    <Field
                        name="nom"
                        label="Nom"
                        placeholder="Votre nom"
                        value={promotion.nom}
                        onChange={handleChange}
                        error={errors.nom}
                    />
                    <Field
                        name="description"
                        label="Description"
                        placeholder="Description"
                        value={promotion.description}
                        onChange={handleChange}
                        error={errors.description}
                    />


                   {/* <Field
                        name="img"
                        label="Image du massage"
                        type="string"
                        value={promotion.img}
                        onChange={handleChange}
                        error={errors.img}
                    />*/}

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary my-3">Créer une promo</button>
                    </div>
                </form>
            </div>
    );
};

export default ReservationPageCreation;