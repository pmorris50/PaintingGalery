import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [activeLink, setActiveLink] = useState('');

    function handleClick(e) {
        e.preventDefault();
        setActiveLink(e.target.innerText);
    }

    return (
        <div className='headerContainer'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    )
}

export default Header