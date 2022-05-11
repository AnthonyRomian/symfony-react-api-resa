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
import PrixPage from "./js/page/PrixPage";
import ContactPage from "./js/page/ContactPage";
import Navbar from "./js/components/Navbar";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banniere from "./js/components/Banniere";
import ReservationPage from "./js/page/ReservationPage";
import {toast, ToastContainer} from "react-toastify";
import Footer from "./js/components/Footer";
import AdminHomePage from "./js/page/AdminHomePage";
import RegisterPage from "./js/page/RegisterPage";
import LoginPage from "./js/page/LoginPage";
import PrivateRoute from "./js/components/PrivateRoute";
import AuthAPI from "./js/services/AuthAPI";
import AuthContext from "./js/contexts/AuthContext";
import LivreOr from "./js/page/LivreOr";
import Important from "./js/components/Important";


const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(
        AuthAPI.isAuthenticated()
    );

    const NavBarWithRouter = withRouter(Navbar);

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated
        }}>

                <HashRouter >
                    <NavBarWithRouter/>
                    <Banniere/>

                    <main className="container pt-8 pt-md-11 pb-8 pb-md-14 ">
                        <Switch>
                            <Route path="/massages" component={MassagePage} />
                            <Route path="/prix" component={PrixPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/reservation" component={ReservationPage} />
                            <Route path="/livre" component={LivreOr} />
                            <Route path="/login" component={LoginPage} />
                            <PrivateRoute path="/admin" component={AdminHomePage} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/" component={HomePage} />
                        </Switch>
                        <Important/>
                    </main>
                    {/*<div id="shape" className="position-relative m-0 mt-2">
                        <div className="shape shape-bottom shape-fluid-x ">
                            <svg viewBox="0 0 2880 48" fill="#500B1F99" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#500B1F99"></path>
                            </svg>
                        </div>
                    </div>*/}
                    <Footer/>
                </HashRouter>
            <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
        </AuthContext.Provider>





    );
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
