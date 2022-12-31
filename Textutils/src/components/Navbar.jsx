import React from 'react';
import logo from '../images/logo.jpg';
import propTypes from 'prop-types';
import './Navbar.css';
import { NavLink } from "react-router-dom";



export default function Navbar() {

    return (
        <body>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        <span className="navbar-brand mb-0 h1 text-light mx-3">Textutils</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </body>
    )
}

Navbar.prototype = {
    titles: propTypes.string,
}

Navbar.defaultProps = {
    titles: "TextUtils"
}

