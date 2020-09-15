import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom";
import './css/FormContact.css';
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

class FormContact extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="col-lg-8 right-content">
                    <div className="main-content">
                        <div className="intro-form-contact">
                            <h1>Get a response today</h1>
                            <div className="detail-intro-form-contact">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat rem consequatur consequuntur, possimus, aliquid beatae eius enim voluptates praesentium qui odio doloremque! Ea perferendis vero illum aperiam nihil. Perferendis, corporis.</span>
                            </div>
                        </div>

                        <div className="wrap-form-contact pt-3">
                            <div className="input-form-contact pb-3">
                                <span>Your Name</span>
                                <div>
                                    <input type="text" name="" id="" maxLength="20"/>
                                </div>
                            </div>
                            <div className="input-form-contact pb-3">
                                <span>Your Email</span>
                                <div>
                                    <input type="text" name="" id="" maxLength="20"/>
                                </div>
                            </div>
                            <div className="input-form-contact pb-3">
                                <span>Your Message</span>
                                <div>
                                    <textarea name="" id="" cols="50" rows="10" className="w-100"></textarea>
                                </div>
                            </div>
                            <div className="input-form-contact">
                                <label className="wrap-checkbox">Keep me updated with blog news
                                    <input type="checkbox" name="" id="" className="mr-3"/>
                                    <span class="checkmark"></span>
                                </label>
                                {/* <span>Keep me updated with blog news</span> */}
                            </div>
                            <div className="input-form-contact pt-4">
                                <button type="button">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FormContact;