import React from 'react';
import '../css/Footer.css';
import logo from '../img/logo_wax1.png'

const Footer = () => {

    return (
        <>
        <div className="footer">
            <img alt="로고 아이콘" src={logo} width="100px" height="100px"/>
            <p>© 2022. Corner all rights reserved.</p> 
            <p className='footer-text'>Team.BAB <br /> created by PeeP, Dori, 로자, 유즈</p>
        </div>
        </>
    )
};

export default Footer;