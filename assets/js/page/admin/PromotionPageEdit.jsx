import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import promotionsAPI from "../../services/promotionsAPI";
import Field from "../../components/forms/Field";
import {Link} from "react-router-dom";
import FormContentLoader from "../../components/loaders/FormContentLoader";

const PromotionPageEdit = (props) => {

    const { id = "new"} = props.match.params;
    const [editing, setEditing] = useState(false);
    //const [promos, setPromos] = useState([]);
    const [loading, setLoading] = useState(true);

    const [promo, setPromo] = useState({
        nom: "",
        description: ""
    });

    const [errors, setErrors] = useState({

        nom: "",
        description: ""
    });

    // recup facture
    const fetchPromo = async id => {
        try {
            const { nom, description } = await promotionsAPI.find(id);
            setPromo({ nom, description  });
            setLoading(false);
        } catch (error) {
            toast.error("Impossible de charger la promo demandée");
            props.history.replace("/admin/promoList");
        }
    };



    // get la bonne facture quand modif de l url
    useEffect(() => {
        if (id !== "new") {
            fetchPromo(id);
            setEditing(true);
        }
    }, [id]);


    // gestion des changemrnts du form input
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setPromo({ ...promo, [name]: value });
    };

    // gestion soumission form invoice
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            if (editing) {
                await promotionsAPI.update(id, promo);
                toast.success("La promo à bien été modifiée");
                props.history.replace("/admin/promoList");

            } else {
                await promotionsAPI.create(promo);
                toast.success("La promo à bien été crée");
                props.history.replace("/admin/promoList");
            }
        } catch ({response}) {
            const {violations} = response.data;
            if (violations) {
                const apiErrors = {};
                violations.forEach(({ propertyPath, message }) => {
                    apiErrors[propertyPath] = message;
                });
                setErrors(apiErrors);

                toast.error("Des erreurs dans votre formulaire");
            };
        }
    };

    return (
        <div className="py-3">
            <div className="mb-3 py-3 d-flex justify-content-between align-items-center">
                { (editing && <h1>Modification de la promo du moment</h1>) || (<h1>Création de Promo</h1>)}
                <Link to="/admin/promoList" className="btn btn-primary" >Voir la liste des promos</Link>
            </div>

            {loading && <FormContentLoader/>}
            {!loading && <form onSubmit={handleSubmit}>
                <Field
                    name="nom"
                    label="Nom"
                    placeholder="Votre nom"
                    value={promo.nom}
                    onChange={handleChange}
                    error={errors.nom}
                />
                <Field
                    name="description"
                    label="Description"
                    placeholder="Description"
                    value={promo.description}
                    onChange={handleChange}
                    error={errors.description}
                />
                {/*<Field
                    name="img"
                    type="file"
                    label="File"
                    placeholder="File"
                    value={promo.img}
                    error={errors.img}
                    onChange={handleChange}

                />*/}
                <div className="form-group my-2">
                    <button type="submit" className="btn btn-success"  >Enregistrer</button>
                </div>
            </form> }
        </div>
    );
}

export default PromotionPageEdit;