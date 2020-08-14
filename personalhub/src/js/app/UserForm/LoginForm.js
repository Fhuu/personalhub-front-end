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

    login() {
        fetch("https://myhubservices.herokuapp.com/user/login", {
            method : "POST",
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify({
                username : document.getElementById("username-field").value,
                password : document.getElementById("password-field").value
            })
        }).then((Response) => {
            Response.json().then(data => {
                console.log(data.loginStatus);
                if(data.loginStatus === "1")
                window.location.reload();
            })
        })
    }

    render() {
        return ReactDOM.createPortal (
            <>
                <div id="login-form-container">
                    <div id="overlay">
                        <form id="login-form">
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