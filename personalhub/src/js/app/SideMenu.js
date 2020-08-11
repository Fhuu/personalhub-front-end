import React from 'react';
import UserForm from './UserForm/UserForm'
import logo from '../../resources/logo/Logo.PNG';
import '../../css/SideMenu.scss'

export default class SideMenu extends React.Component {
    render() {
        return (
            <div id="side-menu">
                <img id="logo" src={logo}/>
                <ul id="navigation">
                    <UserForm />
                </ul>
            </div>
        )
    }
}