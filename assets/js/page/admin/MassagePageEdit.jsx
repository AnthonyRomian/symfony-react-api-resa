import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import Field from "../../components/forms/Field";
import {Link} from "react-router-dom";
import FormContentLoader from "../../components/loaders/FormContentLoader";
import massagesAPI from "../../services/massagesAPI";

const MassagePageEdit = (props) => {

    const { id = "new"} = props.match.params;
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(true);

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

    const handleChange = ({currentTarget}) => {

        const {name, value} = currentTarget;
        setMassage({...massage, [name]: value});
    };

    // recup facture
    const fetchMassage = async id => {
        try {
            const {nom, description, prix, duree, img } = await massagesAPI.find(id);
            setMassage({ nom, description, prix, duree, img  });
            setLoading(false);
        } catch (error) {
            toast.error("Impossible de charger le massage demandé");
            props.history.replace("/admin/massageList");
        }
    };



    // get la bonne facture quand modif de l url
    useEffect(() => {
        if (id !== "new") {
            fetchMassage(id);
            setEditing(true);
        }
    }, [id]);

    // gestion soumission form invoice
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            if (editing) {
                await massagesAPI.update(id, massage);
                toast.success("La promo à bien été modifiée");
                props.history.replace("/admin/massageList");

            } else {
                await massagesAPI.create(massage);
                toast.success("La promo à bien été crée");
                props.history.replace("/admin/massageList");
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
                { (editing && <h1>Modification d'un massage</h1>) || (<h1>Création d'un massage</h1>)}
                <Link to="/admin/massageList" className="btn btn-primary" >Voir la liste des massages</Link>
            </div>

            {loading && <FormContentLoader/>}
            {!loading && <form className="row" onSubmit={handleSubmit}>
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
                <div className="form-group my-2">
                    <button type="submit" className="btn btn-success"  >Enregistrer</button>
                </div>
            </form> }
        </div>
    );
};

export default MassagePageEdit;