import './nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
       <nav className="nav">
      <div className="nav-logo">
        <img src="../../images/logo.png" alt="Logo" className="logo-img" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
    )
  }

export default Nav