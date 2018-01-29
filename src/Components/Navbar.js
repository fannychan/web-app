import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';

const Navbar = () => (
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link to="/" className="navbar-item">
      <img src={logo} alt="Logo" />
    </Link>
  </div>
  <Link to="/cv" className="navbar-item" aria-label="cv">
    <i className="fa fa-file-text-o" aria-hidden="true"></i>
    CV
  </Link>
  <Link to="/" className="navbar-item" aria-label="about me">
    About me
  </Link>
</nav>

);

export default Navbar;