import React from 'react';
import './navbar.css';

const Navbar = ({ onRouteChange }) => {
    return (
        <nav>
            <div><span className="logo-1">Jing</span><span className="logo-2">Jing</span><span className="logo-3">Thinking</span></div>
            <ul>
                <li className="index-link" onClick={() => onRouteChange('index')}><p>Home</p></li>
                <li className="about-link" onClick={() => onRouteChange('about')}><p>About</p></li>
                <li className="contact-link" onClick={() => onRouteChange('contact')}><p>Contact</p></li>
            </ul>
        </nav>
    );
}

export default Navbar;