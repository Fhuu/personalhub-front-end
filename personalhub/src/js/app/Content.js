import React from 'react';
import Explanation from './Explanation';
import SideMenu from './SideMenu';
import '../../css/Content.scss';

export default class Content extends React.Component {
    render () {
        return (
            <div id="content">
                <div id="explanation-container">
                    <Explanation />
                </div>
                <div id="side-menu-container">
                    <SideMenu />
                </div>
            </div>
        )
    }
}