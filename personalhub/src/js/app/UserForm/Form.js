import React from 'react';
import ReactDOM from 'react-dom'
import '../../../css/Form.scss';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible : false
        }
    }

    changeVisibility() {
        this.setState(this.state.isVisible = true, () => {
            this.ifVisible();
        })
    }

    ifVisible() {
        if(this.state.isVisible) {
            return (
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
            )
        }
        return <div></div>
    }


    render() {
        return ReactDOM.createPortal (
            <>
                ifVisible();
            </>
        , document.getElementById("form"))
        
    }
}