import React from 'react';
import UserForm from './UserForm'
import '../../css/SideMenu.scss'

export default class SideMenu extends React.Component {
    render() {
        return (
            <div id="side-menu">
                <div>This is the side menu</div>
                <div id="sign-in-container">
                    <UserForm />
                </div>
            </div>
        )
    }
}