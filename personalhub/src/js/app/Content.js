import React from 'react';
import Explanation from './Explanation';
import SideMenu from './SideMenu';
import Footer from './Footer'
import '../../css/Content.scss';

export default class Content extends React.Component {
    render () {
        return (
            <div id="content">
                <div id="explanation-container">
                    <Explanation />
                    <Footer />
                </div>
                <div id="side-menu-container">
                    <SideMenu />
                </div>
            </div>
        )
    }
}