import React  from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';


// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/normalize.css';
// start the Stimulus application
import './bootstrap';
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


const App = () => {

    const NavBarWithRouter = withRouter(Navbar);

    return (

                <HashRouter >
                    <NavBarWithRouter/>
                    <Banniere/>
                    <main className="container pt-1 ">

                        <Switch>
                            <Route path="/massages" component={MassagePage} />
                            <Route path="/prix" component={PrixPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/reservation" component={ReservationPage} />
                            <Route path="/" component={HomePage} />
                        </Switch>

                    </main>
                    <Footer/>
                    <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
                </HashRouter>




);
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
