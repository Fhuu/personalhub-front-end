import React from 'react';
import '../../../css/HamburgerIcon.scss';

export default class HamburgerIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu : false
        }
    }

    showMenu = () => {
        console.log("fired");
        var togle = !(this.state.showMenu);
        console.log(togle);    
        this.setState({showMenu : togle}, () => {
            this.props.togleMenu(this.state.showMenu);
        })
    }

    render() {
        return(
            <div id="icon-container" onClick={this.showMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}