import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom";
import './MainSubscribe.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainSubscribe extends React.Component {
    componentDidMount(){
        
    }

    render(){
        return (
            <Fragment>
                <div className="col-lg-12 wrap-subs text-center">
                    <span className="title-subs">Subscribe to my Posts</span>
                    <div className="pt-2 pb-3">
                        <input type="text" name="search" className="input-subs w-100" placeholder="Enter your email" />
                    </div>
                    <Link to="#" className="btn-subs">Subscribe</Link>
                </div>
            </Fragment>
        )
    }
}

export default MainSubscribe;