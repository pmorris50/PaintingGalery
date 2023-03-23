import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import {Container, Navbar} from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa';
import ShoppingCart from '../components/ShoppingCart'

const Header = () => {
    const [activeLink, setActiveLink] = useState('');
    const [showCart, setShowCart] = useState(false)

    function handleClick(e) {
        e.preventDefault();
        setActiveLink(e.target.innerText);
        setShowCart(!showCart)
    }

    return (
    
        <div className='headerContainer'>
            <div className = 'leftSide'>
            <Link className = "navLink" to='/'>Home</Link>
            <Link className = "navLink" to='/about'>About</Link>
            <Link className = "navLink" to='/shop'>Shop</Link>
            </div>
            <div className = "rightSide">
               <button onClick ={() =>setShowCart(!showCart)}> <FaShoppingCart className = "cartIcon" /> </button>
            </div>

            {showCart && <ShoppingCart />}

        </div>
    )
}

export default Header