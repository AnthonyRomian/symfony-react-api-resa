import React, {useContext, useState} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import AuthAPI from "../services/AuthAPI";
import {toast} from "react-toastify";
import AuthContext from "../contexts/AuthContext";

const Sidebar = (props) => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isGroup1Collapsed, setIsGroup1Collapsed] = useState(false);
    const [isGroup2Collapsed, setIsGroup2Collapsed] = useState(false);
    const [isGroup3Collapsed, setIsGroup3Collapsed] = useState(false);
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    const handleGroup1Collapse = () => {
        setIsGroup1Collapsed(!isGroup1Collapsed);
    };

    const handleGroup2Collapse = () => {
        setIsGroup2Collapsed(!isGroup2Collapsed);
    };

    const handleGroup3Collapse = () => {
        setIsGroup3Collapsed(!isGroup3Collapsed);
    };

    const handleLogout = () => {
        AuthAPI.logout();
        setIsAuthenticated(false);
        toast.info("Vous êtes désormais déconnecté !")
        props.history.push('/');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg" id="navbar">
                <div className="container container-fluid justify-content-between">
                    <a className="navbar-brand col-sm-8 col-lg-4 " to="#"><img
                        src="assets/img/logos/logo_relachetvous.png" className="img-fluid w-auto" alt="Relach & vous"/></a>
                    <button onClick={handleNavCollapse} className="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler"><i className="fas fa-bars color-secondaire"></i></span>
                    </button>


                    <div className={`navbar-nav ${isNavCollapsed ? 'collapse' : ''} navbar-collapse `}
                         id="navbarColor03">
                        <ul className="navbar-nav nav  mb-2  mb-lg-0">
                            {isAuthenticated && (<>
                                <li className="nav-item  mx-2">
                                    <div className="dropdown ">
                                        <a onClick={handleGroup1Collapse}
                                           className={`nav-link py-1 color-secondaire font-link-2 dropdown-toggle fs-3 ${isGroup1Collapsed ? 'show' : ' '} `}
                                           role="button" id="deroulanta" data-toggle="dropdown"
                                           aria-haspopup="true"
                                           aria-expanded={`${isGroup1Collapsed ? 'true' : 'false'}`}>Reservations</a>
                                        <div className={`dropdown-menu ${isGroup1Collapsed ? 'show' : ' '} `}
                                             aria-labelledby="deroulanta">
                                            <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 "
                                                     to="/admin/reservationList">Liste<i
                                                className="fa-solid fa-list mx-2"></i></NavLink>
                                            <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 "
                                                     to="/admin/reservationCreer">Créer<i
                                                className="fa-solid fa-circle-plus mx-2"></i></NavLink>
                                            <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 "
                                                     to="/admin/calendar">Calendrier<i
                                                className="fa-solid fa-calendar-days mx-2"></i></NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item  mx-2">
                                    <div className="dropdown ">
                                        <a onClick={handleGroup2Collapse}
                                           className={`nav-link py-1 color-secondaire font-link-2 dropdown-toggle fs-3 ${isGroup2Collapsed ? 'show' : ' '} `}
                                           role="button" id="deroulanta" data-toggle="dropdown"
                                           aria-haspopup="true"
                                           aria-expanded={`${isGroup2Collapsed ? 'true' : 'false'}`}>Massages</a>
                                        <div className={`dropdown-menu ${isGroup2Collapsed ? 'show' : ' '} `}
                                             aria-labelledby="deroulanta">
                                            <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 "
                                                     to="/admin/massageList">Liste<i
                                                className="fa-solid fa-list mx-2"></i></NavLink>
                                            <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 "
                                                     to="/admin/massageCreer">Créer<i
                                                className="fa-solid fa-circle-plus mx-2"></i></NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item  mx-2">
                                    <div className="dropdown ">
                                        <a onClick={handleGroup3Collapse}
                                           className={`nav-link py-1 color-secondaire font-link-2 dropdown-toggle fs-3 ${isGroup3Collapsed ? 'show' : ' '} `}
                                           role="button" id="deroulanta" data-toggle="dropdown"
                                           aria-haspopup="true"
                                           aria-expanded={`${isGroup3Collapsed ? 'true' : 'false'}`}>Promotions</a>
                                        <div className={`dropdown-menu ${isGroup3Collapsed ? 'show' : ' '} `}
                                             aria-labelledby="deroulanta">
                                            <NavLink className="nav-link py-1  color-secondaire font-link-2  fs-3 "
                                                     to="/admin/promoList">Liste<i
                                                className="fa-solid fa-list mx-2"></i></NavLink>
                                            <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 "
                                                     to="/admin/promoCreer">Créer<i
                                                className="fa-solid fa-circle-plus mx-2"></i></NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item  mx-2">
                                    <NavLink className="nav-link py-1 text-center color-secondaire font-link-2  fs-3"
                                             to="/"><i
                                        className="fa-solid fa-eye"></i></NavLink>
                                </li>
                            </>)}
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {(!isAuthenticated && (<>

                                <li className="nav-item">
                                    <NavLink to="/admin/register" className="nav-link">Inscription</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/admin" className="btn btn-success">Connexion</NavLink>
                                </li>
                            </>)) || (

                                <li className="nav-item">
                                    <button onClick={handleLogout} className="btn btn-danger">Deconnexion</button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <img id="frise" className=" img-fluid p-0 m-0" src="assets/img/frise_1.png" alt="frise"/>
        </>

    );
};

export default Sidebar;