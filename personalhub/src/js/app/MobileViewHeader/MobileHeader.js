import React from 'react';
import MenuIcon from './HamburgerIcon';
import Logo from '../../../resources/logo/MobileLogo.png'
import '../../../css/MobileHeader.scss';

export default class MobileHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mobile-header-container">
                <img alt="Lets Meet" id="mobile-logo" src={Logo} />
                <MenuIcon togleMenu={this.props.togleMenu}/>
            </div>
        );
    }

}