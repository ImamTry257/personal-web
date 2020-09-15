import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Footer.css';

class Footer extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="footer mt-3">
                    <span className="detail-footer">@ 2020 <a href="https://bykarya.com" target="_blank">byKarya</a>. Solusi Terbaik Website Anda.</span>
                </div>
            </Fragment>
        )
    }
}

export default Footer;