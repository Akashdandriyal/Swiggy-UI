import React from 'react'
import './Footer.css';

import footerSwiggyLogo from '../../images/footerSwiggyLogo.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import pinterest from '../../images/pinterest.png';
import instagram from '../../images/instagram.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerLogo">
                <a href="/"><img src={footerSwiggyLogo} alt="" /></a>
            </div>
            <p>© 2021 Swiggy</p>
            <div className="socialMediaLinks">
                <a href="/#" className="socialMedia"><img src={facebook} alt="" /></a>
                <a href="/#" className="socialMedia"><img src={pinterest} alt="" /></a>
                <a href="/#" className="socialMedia"><img src={instagram} alt="" /></a>
                <a href="/#" className="socialMedia"><img src={twitter} alt="" /></a>
            </div>
        </footer>
    )
}

export default Footer
