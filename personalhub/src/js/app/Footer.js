import React from 'react';
import '../../css/Footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <span>Created by React <b>-</b> Self Project</span>
                <span>Contact me.</span>
                <span>Logo created by <b><a href="https://studio.tailorbrands.com/">https://studio.tailorbrands.com/</a></b></span>
            </div>
        )
    }
}