import React, { Fragment } from 'react';
import './PrimaryTagline.css';

class PrimaryTagline extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="primary-tagline">
                    <div className="container">
                        <h1>Primary Tagline for Your Blog</h1>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PrimaryTagline;