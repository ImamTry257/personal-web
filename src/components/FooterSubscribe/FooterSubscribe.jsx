import React, { Fragment } from 'react';
import './FooterSubscribe.css';
import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom"

class FooterSubscribe extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="col-lg-12 pt-5 subscribe">
                    <div className="text-subscribe text-center">
                        <h1 className="title-subscribe">Subscribe to My Posts</h1>
                        <p className="detail-subscribe pt-2">Get the last product updates, company news, and special offers <br/> delivered right to your inbox</p>
                    </div>
                    <div className="form-subscribe text-center pt-3 pb-5 text-center pt-3">
                        <input type="text" name="email" className="email-subscribe mb-3"/>
                        <Link to="/" className="btn-subscribe">Subscribe</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FooterSubscribe;