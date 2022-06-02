import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import Field from '../../components/forms/Field';
import AuthContext from '../../contexts/AuthContext';
import AuthAPI from '../../services/AuthAPI';


const LoginPage = ({ history }) => {

    const { setIsAuthenticated } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState("");

    // gestion des champs
    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;

        // [name] il remplacera la valeur du credential
        setCredentials({ ...credentials, [name]: value });
    };

    //gestion du submit
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await AuthAPI.authenticate(credentials);
            setError("");
            setIsAuthenticated(true);
            toast.success("Vous êtes désormais connecté !")
            history.push("/admin/reservationList");
        } catch (error) {
            setError("Aucun compte ou les informations sont erronées");
            toast.error("Une erreur est survenue !")
        }
    };

    return (
        <div className="justify-content-center ">
            <div className="col-12 col-lg-6 mx-auto">
                <h1 className="text-center " >Connexion</h1>
                <form onSubmit={handleSubmit} className="row" >
                    <Field
                        className=""
                        label="Adresse email"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder="Adresse email de connexion"
                        error={error} />

                    <Field
                        label="Mot de passe"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        type="password"
                        error="" />

                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primaire" >
                            Je me connecte
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LoginPage;