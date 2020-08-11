import React from 'react';
import LoginForm from './LoginForm'
export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm : false
        }
    }

    changeStateToShowForm = () => {
        this.setState({showForm : true})
    }

    showForm = () => {
        if(this.state.showForm) {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            return (<LoginForm />)
        }
        return(
            <li id="show-login-form" onClick={this.changeStateToShowForm}>Log In</li>
        )
        
    }

    render() {
        return (
            <div id="user-form">
                <this.showForm />
            </div>
        )
    }
}