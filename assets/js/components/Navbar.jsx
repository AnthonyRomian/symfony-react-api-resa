import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };


  return (
<>
    <nav className="navbar   navbar-expand-lg" id="navbar">
      <div className="container container-fluid ">
        <a className="navbar-brand col col-sm-8 col-lg-4 " to="#"><img src="assets/img/logos/logo_relachetvous.png"  className="img-fluid w-auto" alt="Relach & vous" /></a>
        <button onClick={handleNavCollapse} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler"><i className="fas fa-bars color-secondaire"></i></span>
        </button>
        <div className={`col ${isNavCollapsed ? 'collapse' : ''} navbar-collapse `}  id="navbarColor03" >
          <ul className="navbar-nav me-auto mb-2  mb-lg-0">
            <li className="nav-item text-center mx-2">
              <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 " to="/">Accueil</NavLink>
            </li>
            <li className="nav-item text-center mx-2">
              <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 " to="/massages">Les Massages</NavLink>
            </li>
            <li className="nav-item text-center mx-2">
              <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 " to="/livre">Livre d'or</NavLink>
            </li>
            <li className="nav-item text-center mx-2">
              <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 " to="/reservation">Réservation</NavLink>
            </li>
            <li className="nav-item text-center mx-2">
              <NavLink className="nav-link py-1 color-secondaire font-link-2  fs-3 " to="/contact">Contact</NavLink>
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
  <img id="frise" className=" img-fluid p-0 m-0" src="assets/img/frise_1.png" alt="frise"/>

</>

  );
}

export default Navbar;