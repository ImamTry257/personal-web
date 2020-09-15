import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom";
import './css/Diary.css';
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

class Diary extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="col-lg-8 right-content">
                    <div className="main-content">
                        <div className="col-lg-12 pt-5 wrap-diary">
                            <div className="title-diary">
                                <h1 className="title-diary-cat">Diary</h1>
                            </div>
                            <div className="mt-3">
                                <div className="detail-diary">
                                    <div className="img-list-diary w-100">
                                        <img src={image5} alt="" />
                                    </div>
                                    <div className="detail-list-diary">
                                        <span className="detail-title-diary"><strong><Link to="/detail" className="text-dark">7 Air-Cleaning Tropicals You Need in Your Space</Link></strong></span><br/>
                                        <span className="author">by Ajun Rodrigez on January 20, 2020</span><br/>
                                        <span className="detail-desc-diary">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                                    </div>
                                </div>
                                <div className="detail-diary mt-4">
                                    <div className="img-list-diary w-100">
                                        <img src={image4} alt="" />
                                    </div>
                                    <div className="detail-list-diary">
                                        <span className="detail-title-diary"><strong><Link to="/detail" className="text-dark">7 Air-Cleaning Tropicals You Need in Your Space</Link></strong></span><br/>
                                        <span className="author">by Ajun Rodrigez on January 20, 2020</span><br/>
                                        <span className="detail-desc-diary">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                                    </div>
                                </div>
                                <div className="detail-diary mt-4">
                                    <div className="img-list-diary w-100">
                                        <img src={image3} alt="" />
                                    </div>
                                    <div className="detail-list-diary">
                                        <span className="detail-title-diary"><strong><Link to="/detail" className="text-dark">7 Air-Cleaning Tropicals You Need in Your Space</Link></strong></span><br/>
                                        <span className="author">by Ajun Rodrigez on January 20, 2020</span><br/>
                                        <span className="detail-desc-diary">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
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

export default Diary;