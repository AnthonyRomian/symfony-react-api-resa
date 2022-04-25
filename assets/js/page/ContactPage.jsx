import React, { useRef } from 'react';
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
            <div className="my-3">
                <h1 className="font-link text-center">Formulaire de contact</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">

                        <label >Nom</label>
                        <input className="form-control" type="text" name="user_name" />
                    </div>
                    <div className="form-group">

                        <label>Email</label>
                        <input className="form-control" type="email" name="user_email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" name="message" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Envoyer" />
                </form>
            </div>

        </>

    );
};
 
export default ContactPage;