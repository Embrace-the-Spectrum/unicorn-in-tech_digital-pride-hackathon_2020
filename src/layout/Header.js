import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import './Header.css';


const Header = () => {
    return (
        <header>
            <Link to="/" className="header-link">
                <img src={logo} className="header-logo" alt="logo"/>
                <h1>
                    Pride Through Protest
                </h1>
            </Link>
        </header>
    )
}

export default Header;
