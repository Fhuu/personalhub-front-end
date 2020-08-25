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

    changeAuthState = (loginState, loginUsername) => {
        this.setState({loginStatus : loginState, username : loginUsername}, () => {
            if(loginState) {
                this.changeStateToUnshowLoginForm();
                this.changeStateToUnshowSignupForm();
            }
        })
    }

    componentDidMount = () => {
        const url = "https://myhubservices.herokuapp.com";
        fetch(url + "/api/user/status", {
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

    logout = () => {
        const url = "https://myhubservices.herokuapp.com";
        fetch(url + "/api/user/logout", {
            method : 'GET',
            credentials : 'include'
        }).then(response => {
            if(response.status === 200) {
                response.json().then(data => {
                    this.setState(() => ({
                        loginStatus : data.loginStatus, 
                        username : ""
                    }))
                })
            }
        })
    }

    changeStateToShowLoginForm = () => {
        this.setState({showLoginForm : true})
    }

    changeStateToUnshowLoginForm = () => {
        this.setState({showLoginForm : false})
    }

    changeStateToShowSignupForm = () => {
        this.setState({showSignupForm : true})
    }

    changeStateToUnshowSignupForm = () => {
        this.setState({showSignupForm : false})
    }

    showForm = () => {
        if(this.state.showLoginForm) {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            return (<LoginForm onAuth={this.changeAuthState}/>)
        }
        if(this.state.showSignupForm) {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            return (<SignupForm onAuth={this.changeAuthState}/>)
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
                <li onClick={this.logout}>Log Out</li>
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