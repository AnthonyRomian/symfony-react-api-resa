import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';

// any CSS you import will output into a single css file (app.css in this case)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/normalize.css';
import './styles/app.css';

// start the Stimulus application
import {HashRouter, Route, Switch, withRouter} from "react-router-dom";
import HomePage from "./js/page/HomePage";
import MassagePage from "./js/page/MassagePage";
import ContactPage from "./js/page/ContactPage";
import Navbar from "./js/components/Navbar";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banniere from "./js/components/Banniere";
import ReservationPage from "./js/page/ReservationPage";
import {toast, ToastContainer} from "react-toastify";
import Footer from "./js/components/Footer";
import LivreOr from "./js/page/LivreOr";
import Important from "./js/components/Important";

const App = () => {

    const NavBarWithRouter = withRouter(Navbar);

    return (
        <>
                <HashRouter >
                    <NavBarWithRouter/>
                    <Banniere/>
                    <main className="container ">
                        <Switch>
                            <Route path="/massages" component={MassagePage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/reservation" component={ReservationPage} />
                            <Route path="/livre" component={LivreOr} />
                            <Route path="/" component={HomePage} />
                        </Switch>
                        <Important/>
                    </main>
                    <Footer/>
                </HashRouter>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
        </>
    );
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
