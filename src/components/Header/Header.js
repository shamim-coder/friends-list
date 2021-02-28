import React from 'react';
import './Header.css'
import logo from '../../resources/logo.png'
import Menu from '../Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt={logo} />
            </div>
            <nav className="nav">
                <Menu />
            </nav>
            <div className="cart">
                <button><FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </header>
    );
};

export default Header;