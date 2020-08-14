import React from 'react';
import ReactDOM from 'react-dom'
import '../../../css/SignupForm.scss';

export default class Form extends React.Component {
    enableButton() {
        if(document.getElementById("username-field").value.trim() !== ""
        && document.getElementById("email-field").value.trim() !== "" 
        && document.getElementById("password-field").value.trim() !== "") {
            document.getElementById("signup-btn").disabled = false;
        } else {
            document.getElementById("signup-btn").disabled = true;
        }
    }
    
    signup() {
        fetch("/user/create", {
            method : "POST",
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify({
                username : document.getElementById("username-field").value,
                email : document.getElementById("email-field").value,
                password : document.getElementById("password-field").value
            })
        }).then((Response) => {
            Response.json().then(data => {
                if(data.loginStatus === "1")
                window.location.reload();
            })
        })
    }

    render() {
        return ReactDOM.createPortal (
            <>
                <div id="signup-form-container">
                    <div id="overlay">
                        <form id="signup-form">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username-field" placeholder="username" autoFocus="on" onKeyUp={this.enableButton}/>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email-field" placeholder="email" onKeyUp={this.enableButton}/>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password-field" placeholder="password" onKeyUp={this.enableButton}/>
                            <br/>
                            <input type="button" value="Sign Up" id="signup-btn" onClick={this.login} disabled/>
                        </form>
                    </div>
                </div>            
            </>
        , document.getElementById("form"));
    }
}