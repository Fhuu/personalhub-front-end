import React from 'react';
import Form from './UserForm/Form'
import logo from '../../resources/logo/Logo.PNG';
import '../../css/SideMenu.scss'

export default class SideMenu extends React.Component {
    render() {
        return (
            <div id="side-menu">
                <img id="logo" src={logo}/>
                <ul id="navigation">
                    <li onClick={console.log("hi")}>Log In</li>
                </ul>
            </div>
        )
    }
}