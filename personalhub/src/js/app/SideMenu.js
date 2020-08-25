import React from 'react';
import UserForm from './UserForm/UserForm'
import logo from '../../resources/logo/Logo.PNG';
import MobileHeader from './MobileViewHeader/MobileHeader';
import '../../css/SideMenu.scss'

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu : false
        }
    }

    componentDidMount() {
        console.log(window.screen.width)
        this.togleMenu();
    }

    handleTogleMenu = (newState) => {
        this.setState({showMenu : newState}, () => {
            this.togleMenu();
        })
    }

    togleMenu = () => {
            if(!this.state.showMenu && window.screen.width < 800) {
                document.getElementById("side-menu").style.display = "none";
            }
            else {
                document.getElementById("side-menu").style.display = "block";
            }
    }

    menu = () => {
        return (
            <div id="side-menu">
                <img id="logo" src={logo}/>
                <ul id="navigation">
                    <UserForm />
                    <li><div>Create room</div></li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <>
                <div id="mobile-header">
                    <MobileHeader togleMenu={this.handleTogleMenu}/>
                </div>
                <this.menu />
            </>
        )
    }
}