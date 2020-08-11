import React from 'react';
import ReactDOM from 'react-dom'
import '../../../css/LoginForm.scss';

export default class Form extends React.Component {
    render() {
        return ReactDOM.createPortal (
            <>
                <div id="login-form-container">
                    <div id="overlay">
                        <form id="login-form">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="username" autoFocus="on" />
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="password" />
                            <br/>
                            <button>Log In</button>
                        </form>
                    </div>
                </div>            
            </>
        , document.getElementById("form"))
        
    }
}