import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className=" navbar navbar-expand-lg justify-content-center" id="navbar">
      <div className="container container-fluid">
        <NavLink className="navbar-brand" to="#"><img src="assets/img/logos/logo_massage_3.png" height={70} width={150} alt="Relach & vous" /></NavLink>
        <button onClick={handleNavCollapse} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse `}  id="navbarColor03" >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link font-link-2  active" to="/">ACCUEIL</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link font-link-2 active" to="/massages">MASSAGES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link font-link-2 active" to="/livre">lIVRE D'OR</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link font-link-2 active" to="/reservation">RESERVATION</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link font-link-2 active" to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;