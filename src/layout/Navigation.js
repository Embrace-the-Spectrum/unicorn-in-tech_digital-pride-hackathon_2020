import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';


const Navigation = () => {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/protest">
                    <li>Protest</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation;
