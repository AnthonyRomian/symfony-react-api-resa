import React, {useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import Field from "../../components/forms/Field";
import usersAPI from "../../services/usersAPI";

const RegisterPage = ({history, params}) => {

    const [user, setUser] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const [errors, setErrors] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    // gestion des changements du form input
    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setUser({...user, [name]: value});
    };


    //gestion de la soumission du form
    const handleSubmit = async event => {
        event.preventDefault();
        const apiErrors = {};
        if (user.password !== user.passwordConfirm) {
            apiErrors.passwordConfirm = "Votre confirmation de mot de passe n'est pas identique à votre mot de passe"
            setErrors(apiErrors);
            toast.error("Des erreurs dans votre formulaire")
            return;
        }

        try {
            await usersAPI.register(user);
            setErrors({});
            toast.success("Vous êtes désormais inscrit, vous pouvez vous connecter !")
            history.replace("/admin/login");
        } catch (error) {
            const {violations} = error.response.data;
            if (violations) {
                violations.forEach(({propertyPath, message}) => {
                    apiErrors[propertyPath] = message;
                });

                setErrors(apiErrors);
            }
            toast.error("Des erreurs dans votre formulaire")
        }
    }

    return (
        <>
            <div className="justify-content-center ">
                <div className="col-12 col-lg-6 mx-auto">
                    <h1 className="text-center ">Inscription</h1>
                    <form onSubmit={handleSubmit} className="row">

                        <Field
                            name="prenom"
                            label="Prénom"
                            placeholder="Votre prénom"
                            value={user.prenom}
                            onChange={handleChange}
                            error={errors.prenom}
                        />
                        <Field
                            name="nom"
                            label="Nom de famille"
                            placeholder="Votre nom de famille"
                            value={user.nom}
                            onChange={handleChange}
                            error={errors.nom}
                        />

                        <Field
                            name="email"
                            label="Email"
                            placeholder="Votre adresse email"
                            type="email"
                            value={user.email}
                            onChange={handleChange}
                            error={errors.email}
                        />

                        <Field
                            name="password"
                            label="Mot de passe"
                            placeholder="Mot de passe"
                            type="password"
                            value={user.password}
                            onChange={handleChange}
                            error={errors.password}
                        />

                        <Field
                            name="passwordConfirm"
                            label="Confirmation de mot de passe"
                            placeholder="Confirmez votre mot de passe"
                            type="password"
                            value={user.passwordConfirm}
                            onChange={handleChange}
                            error={errors.passwordConfirm}
                        />

                        <div className="form-group">
                            <button type="submit" className="btn btn-primaire">Confirmation</button>
                            <Link to="/login" className="btn btn-secondaire mx-2">J'ai déjà un compte</Link>
                        </div>

                    </form>
                </div>
            </div>


        </>
    );
}

export default RegisterPage;