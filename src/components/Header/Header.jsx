import React from 'react'
import './Header.css';
import swiggyLogo from '../../images/swiggyLogo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="headerLogo">
                <img src={swiggyLogo} alt="Swiggy logo" />
            </div>
            <div className="headerLinks">
                <button className="loginButton">Login</button>
                <button className="signupButton">Sign up</button>
            </div>
        </header>
    )
}

export default Header
