import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {toast} from "react-toastify";
import {EMAILJS_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID} from "../config";

export const ContactPage = () => {
    const form = useRef();

    // Mail page contact EmailJs config
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_KEY)
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
                            <p className="card-body color-3 fs-4">33 Rue des prés <br/>
                                37360 Beaumont Louestault
                            </p>
                            <h3 className="card-title  fw-bold  text-gray-700">
                                Horaires
                            </h3>
                            <ul className="list-unstyled text-muted ">
                                <li className="mb-3 color-3 fs-4">Lundi au vendredi 9h à 19h</li>
                                <li className="mb-3 color-3 fs-4">Samedi 9h30 à 17h</li>
                            </ul>
                            <a className="fw-bold my-1 text-gray-700 fs-4 text-black text-decoration-none"
                               href="mailto:contact@relachezvous.com"><i className="fa-solid fa-envelope mx-2"></i>
                                contact@relachezvous.com
                            </a>
                            <a href="tel:0665366392" className="fw-bold my-1  text-gray-700 fs-4 text-black text-decoration-none"><i className="fa-solid fa-phone mx-2"></i>
                                06 65 36 63 92
                            </a>
                        </div>
                    </div>


                </form>
            </div>
        </>

    );
};

export default ContactPage;