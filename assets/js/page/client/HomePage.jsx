import React, {useState} from 'react';
import { HashRouter, Route, Switch, withRouter} from "react-router-dom";
import AuthAPI from "../../services/AuthAPI";
import AuthContext from "../../contexts/AuthContext";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banniere from "../../components/Banniere";
import ReservationPage from "./ReservationPage";
import ContactPage from "./ContactPage";
import Home from "./Home";
import Important from "../../components/Important";
import MassagePage from "./MassagePage";
import LivreOr from "./LivreOr";
import {toast, ToastContainer} from "react-toastify";

AuthAPI.setup();

const HomePage = (props) => {


    const [isAuthenticated, setIsAuthenticated] = useState(
        AuthAPI.isAuthenticated()
    );

    const NavBarWithRouter = withRouter(Navbar);


    return (
        <>
            <AuthContext.Provider value={{
                isAuthenticated,
                setIsAuthenticated
            }}>
                <HashRouter>
                    <Navbar />
                    <Banniere/>
                        <main className="container">
                            <Switch>
                                <Route path="/massages" component={MassagePage} />
                                <Route path="/contact" component={ContactPage} />
                                <Route path="/reservation" component={ReservationPage} />
                                <Route path="/livre" component={LivreOr} />
                                <Route path="/" component={Home}/>
                            </Switch>
                        </main>
                    <Important/>
                    <Footer/>
                </HashRouter>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>

            </AuthContext.Provider>
        </>

    );
}

export default HomePage;