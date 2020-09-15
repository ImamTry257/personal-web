import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom";
import './css/Health.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image3 from '../../../img/gb3.png';
import image4 from '../../../img/gb4.png';
import image5 from '../../../img/gb5.png';

const ButtonLoadMore = () => {
    return (
        <div className="col-lg-12 pt-5 text-center">
            <Link to="/" className="btn-load-more">Browse All Posts</Link>
        </div>
    )
}

class Health extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="col-lg-8 right-content">
                    <div className="main-content">
                        <div className="col-lg-12 pt-5 wrap-health">
                            <div className="title-health">
                                <h1 className="title-health-cat">Health</h1>
                            </div>
                            <div className="mt-3">
                                <div className="detail-health w-100">
                                    <div className="img-list-health">
                                        <img src={image5} alt="" />
                                    </div>
                                    <div className="detail-list-health">
                                        <span className="detail-title-health"><strong><Link to="/detail">7 Air-Cleaning Tropicals You Need in Your Space</Link></strong></span><br/>
                                        <span className="author">by Ajun Rodrigez on January 20, 2020</span><br/>
                                        <span className="detail-desc-health">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                                    </div>
                                </div>
                                <div className="detail-health w-100 mt-4">
                                    <div className="img-list-health">
                                        <img src={image4} alt="" />
                                    </div>
                                    <div className="detail-list-health">
                                        <span className="detail-title-health"><strong><Link to="/detail">7 Air-Cleaning Tropicals You Need in Your Space</Link></strong></span><br/>
                                        <span className="author">by Ajun Rodrigez on January 20, 2020</span><br/>
                                        <span className="detail-desc-health">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                                    </div>
                                </div>
                                <div className="detail-health w-100 mt-4">
                                    <div className="img-list-health">
                                        <img src={image3} alt="" />
                                    </div>
                                    <div className="detail-list-health">
                                        <span className="detail-title-health"><strong><Link to="/detail">7 Air-Cleaning Tropicals You Need in Your Space</Link></strong></span><br/>
                                        <span className="author">by Ajun Rodrigez on January 20, 2020</span><br/>
                                        <span className="detail-desc-health">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                                    </div>
                                </div>
                                <div className="browser-all-post">
                                    <ButtonLoadMore />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Health;