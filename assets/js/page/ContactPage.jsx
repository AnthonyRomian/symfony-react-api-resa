import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {toast} from "react-toastify";

export const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_e6bqw5n', 'template_jzpuwoj', form.current, 'F80pEWQLPrfJMNdJ9')
            .then((result) => {
                toast.success("Votre message à bien été envoyé");

            }, (error) => {
                toast.error("Une erreur s'est produite");
            });
    };

    return (
        <>
            <div className="my-3 mx-1">
                <h1 className="font-link text-center mt-1">Formulaire de contact<i
                    className="fa-solid fa-pen mx-2 fs-3"></i></h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-6">
                            <div className="col-12 col-sm-12 col-xl-12 my-2">
                                <label className="fs-3 mb-1">Nom</label>
                                <input className="form-control" type="text" name="user_name"
                                       placeholder="votre nom..."/>
                            </div>
                            <div className="col-12 col-sm-12 col-xl-12 my-2">

                                <label className="fs-3 mb-1">Email</label>
                                <input className="form-control" type="email" name="user_email"
                                       placeholder="votre email..."/>
                            </div>
                            <div className="col-12 col-sm-12 col-xl-12 my-2">
                                <label className="fs-3 mb-1">Tel</label>
                                <input className="form-control" type="text" name="user_tel" placeholder="votre tel..."/>
                            </div>
                            <div className="col-12 col-sm-12 col-xl-12 my-2">
                                <label className="fs-3 mb-1">Message</label>
                                <textarea className="form-control" name="message" placeholder="Tapez votre message..."/>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primaire fs-3 mt-2 col-12" type="submit" value="Envoyer"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6 mt-4 mt-sm-0 mt-xl-0  text-center card p-0  ">
                            <h3 className="card-header  fw-bold  text-gray-700">
                                Information de contact
                            </h3>
                            <h3 className=" card-title  fw-bold  text-gray-700">
                                Adresse
                            </h3>
                            <p className="card-body text-muted fs-4">33 Rue des prés <br/>
                                37360 Beaumont la ronce
                            </p>
                            <h3 className="card-title  fw-bold  text-gray-700">
                                Horaires
                            </h3>
                            <p className="card-body text-muted fs-4">Lundi au vendredi 9h-12h à 13h-18h</p>
                            <a className="fw-bold mt-1 text-gray-700 fs-4 text-black text-decoration-none"
                               href="mailto:exemple@gmail.com"><i className="fa-solid fa-envelope mx-2"></i>
                                exemple@gmail.com
                            </a>
                            <h4 className="fw-bold mt-1 text-gray-700"><i className="fa-solid fa-phone mx-2"></i>
                                06 82 16 56 29
                            </h4>
                        </div>
                    </div>


                </form>
            </div>

        </>

    );
};

export default ContactPage;