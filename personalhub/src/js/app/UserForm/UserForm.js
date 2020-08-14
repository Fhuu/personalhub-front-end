import React from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginForm : false,
            showSignupForm : false,
            loginStatus : false, 
            username : ""
        }
    }

    componentDidMount = () => {
        fetch("/user/checkSession", {
            method : 'GET'
        }).then(response =>  {
            if(response) {
                response.json().then(data => {
                    this.setState(() => ({loginStatus : data.loginStatus, username : data.username}))
                })
            }
        })
    }

    changeStateToShowLoginForm = () => {
        this.setState({showLoginForm : true})
    }

    changeStateToShowSignupForm = () => {
        this.setState({showSignupForm : true})
    }

    showForm = () => {
        if(this.state.showLoginForm) {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            return (<LoginForm />)
        }
        if(this.state.showSignupForm) {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            return (<SignupForm />)
        }
        if(!this.state.loginStatus) {
            return(
                <> 
                    <li id="show-login-form" onClick={this.changeStateToShowLoginForm}>Log In</li>
                    <li id="show-signup-form" onClick={this.changeStateToShowSignupForm}>Sign up</li>
                </>
            )
        }
        console.log("logged in");
        return(
            <li id="username">Hi, {this.state.username}</li>
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