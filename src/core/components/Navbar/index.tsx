import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="header">
        <div className="title">
            <Link to="/" className="nav-logo-text"> 
                <h4>Bootcamp DevSuperior</h4>
            </Link>
        </div>
    </nav>
)

export default Navbar;