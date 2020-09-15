import React, { Fragment } from 'react';
import './NewsFromCategory.css';
import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom"
import image1 from '../../img/gb1.png';
import image2 from '../../img/gb2.png';
import image3 from '../../img/gb3.png';
import image4 from '../../img/gb4.png';
import image5 from '../../img/gb5.png';
import $ from 'jquery/dist/jquery.min.js';
import './jquery-loader';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';


class NewsFromCategory extends React.Component{

    componentDidMount(){
        $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
                items:3,
                loop:true,
                margin:10,
                autoplay:true,
                // autoplayTimeout:3000,
                autoplayHoverPause:true
            });
        });
    }

    render(){
        return(
            <Fragment>
                <div className="col-lg-12 news-from-article">
                    <h1>News From Category</h1>
                    <div className="main-wrapper pt-2 owl-carousel owl-theme">
                        <div className="wrapper-news-from-article mt-4">
                            <img src={image1} alt=""/>
                            <div className="detail">
                                <p className="date-news-from-article">December 24, 2002</p>
                                <h1 className="title-news-from-article"><Link to="/">Why Wireframing is an Essential Skill for More Than just Designers!</Link></h1>
                                <span className="read-more-news-from-article">Read more...</span>
                            </div>
                        </div>
                        <div className="wrapper-news-from-article mt-4">
                            <img src={image2} alt=""/>
                            <div className="detail">
                                <p className="date-news-from-article">December 24, 2002</p>
                                <h1 className="title-news-from-article"><Link to="/" to="/">Why Wireframing is an Essential Skill for More Than just Designers!</Link></h1>
                                <span className="read-more-news-from-article">Read more...</span>
                            </div>
                        </div>
                        <div className="wrapper-news-from-article mt-4">
                            <img src={image1} alt=""/>
                            <div className="detail">
                                <p className="date-news-from-article">December 24, 2002</p>
                                <h1 className="title-news-from-article"><Link to="/">Why Wireframing is an Essential Skill for More Than just Designers!</Link></h1>
                                <span className="read-more-news-from-article">Read more...</span>
                            </div>
                        </div>
                        <div className="wrapper-news-from-article mt-4">
                            <img src={image4} alt=""/>
                            <div className="detail">
                                <p className="date-news-from-article">December 24, 2002</p>
                                <h1 className="title-news-from-article"><Link to="/">Why Wireframing is an Essential Skill for More Than just Designers!</Link></h1>
                                <span className="read-more-news-from-article">Read more...</span>
                            </div>
                        </div>
                        <div className="wrapper-news-from-article mt-4">
                            <img src={image5} alt=""/>
                            <div className="detail">
                                <p className="date-news-from-article">December 24, 2002</p>
                                <h1 className="title-news-from-article"><Link to="/">Why Wireframing is an Essential Skill for More Than just Designers!</Link></h1>
                                <span className="read-more-news-from-article">Read more...</span>
                            </div>
                        </div>
                        <div className="wrapper-news-from-article mt-4">
                            <img src={image5} alt=""/>
                            <div className="detail">
                                <p className="date-news-from-article">December 24, 2002</p>
                                <h1 className="title-news-from-article"><Link to="/">Why Wireframing is an Essential Skill for More Than just Designers!</Link></h1>
                                <span className="read-more-news-from-article">Read more...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NewsFromCategory;