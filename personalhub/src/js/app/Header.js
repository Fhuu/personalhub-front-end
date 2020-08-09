import React, { Component } from 'react';
import Logo from '../../resources/logo/Logo.PNG';
import  '../../css/Header.scss';


class Header extends React.Component {
    render() {
        return (
        <div id="header"> 
            <img src={Logo} alt="logo" id="logo"/>
        </div>
        );
        
    }
}

export default Header;