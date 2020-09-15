import React, { Fragment } from 'react';
import './Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
    return (
        <Fragment>
            <div className="header text-center">
                <h1>Primary Tagline for Your Blog</h1>
                <p>Supporting statement for the blog’s main tagline.</p>
            </div>
        </Fragment>
    )
}

export default Banner;