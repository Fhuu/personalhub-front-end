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
        const url = 'https://myhubservices.herokuapp.com';
        fetch(url + "/user/checkSession", {
            method : 'GET',
            credentials: 'include'
        }).then(response =>  {
            if(response.status === 200) {
                response.json().then(data => {
                    console.log(data.loginStatus, data.username)
                    this.setState(() => ({loginStatus : data.loginStatus, username : data.username}))
                })
            }
            console.log(response)
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
        return(
            <>
                <li id="username-btn">Hi, {this.state.username}</li>
                <li>Log Out</li>
            </>
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