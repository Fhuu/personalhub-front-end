import React from 'react';
import ReactDOM from 'react-dom'
import '../../../css/LoginForm.scss';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled : true
        }
    }
    enableButton = () => {
        if(document.getElementById("username-field").value.trim() !== "" && document.getElementById("password-field").value.trim() !== "") {
            this.setState(() => ({disabled : false}));
        } else {
            this.setState(() => ({disabled : true}));
        }
    }

    login = () => {
        const url = "https://myhubservices.herokuapp.com";
        fetch(url + "/api/user/login", {
            method : "POST",
            credentials: 'include',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify({
                username : document.getElementById("username-field").value,
                password : document.getElementById("password-field").value
            })
        }).then((Response) => {
            if(Response.status === 200) {
                Response.json().then(data => {
                    console.log(data.loginStatus);
                    this.props.onAuth(data.loginStatus, data.username);
                })
            }
        })
    }

    render() {
        return ReactDOM.createPortal (
            <>
                <div id="login-form-container">
                    <div id="overlay">
                        <form id="login-form">
                            <label>3RD PARTY COOKIES ARE REQUIRED FOR AUTHENTICATION</label>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username-field" placeholder="username" autoFocus="on" onKeyUp={this.enableButton}/>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password-field" placeholder="password" onKeyUp={this.enableButton}/>
                            <br/>
                            <input type="button" value="Log in" id="login-btn" onClick={this.login} disabled={this.state.disabled}/>
                        </form>
                    </div>
                </div>            
            </>
        , document.getElementById("form"))
        
    }
}