import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import AuthAPI from '../services/AuthAPI';
import {toast} from "react-toastify";
import AuthContext from "../contexts/AuthContext";

const Navbar = (props) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleLogout = () => {
    AuthAPI.logout();
    setIsAuthenticated(false);
    toast.info("Vous êtes désormais déconnecté !")
    history.push("/login");
  };

  return (
    <nav className=" navbar navbar-expand-lg justify-content-center" id="navbar">
      <div className="container container-fluid">
        <NavLink className="navbar-brand" to="#"><img src="assets/img/logos/logo_1_1.png" height={100} width={100} alt="Relach & vous" /></NavLink>
        <button onClick={handleNavCollapse} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler"><i className="fas fa-bars"></i></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse `}  id="navbarColor03" >
          <ul className="navbar-nav me-auto">
            <li className="nav-item text-center mx-2">
              <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-2 active" to="/">Accueil</NavLink>
            </li>
            <li className="nav-item text-center mx-2">
              <NavLink className="nav-link py-1 color-secondaire font-link-2 mx-2 fs-2 active" to="/massages">Les Massages</NavLink>
            </li>
            <li className="nav-item text-center mx-2">
              <NavLink className="nav-link py-1 color-secondaire font-link-2 mx-2 fs-2 active" to="/livre">Livre d'or</NavLink>
            </li>
            <li className="nav-item text-center mx-2">
              <NavLink className="nav-link py-1 color-secondaire font-link-2 mx-2 fs-2 active" to="/reservation">Réservation</NavLink>
            </li>
            <li className="nav-item text-center mx-2">
              <NavLink className="nav-link py-1 color-secondaire font-link-2 mx-2 fs-2 active" to="/contact">Contact</NavLink>
            </li>
            {/*<ul className="navbar-nav ml-auto">
              {(!isAuthenticated && (<>
                <li className="nav-item">
                  <NavLink className="nav-link color-secondaire font-link-2 active" to="/login">Login</NavLink>
                </li>

              </>)) || (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link color-secondaire font-link-2 active" to="/admintest">ADMIN</NavLink>
                    </li>
                    <li className="nav-item">
                      <button onClick={handleLogout} className="btn btn-danger">Deconnexion</button>
                    </li>
                  </>

              )}
            </ul>*/}


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;