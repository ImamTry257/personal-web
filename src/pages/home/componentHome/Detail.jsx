import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom";
import './Headline.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image2 from '../../../img/gb2.png';
import image3 from '../../../img/gb3.png';
import image4 from '../../../img/gb4.png';
import image5 from '../../../img/gb5.png';
import { BallBeat } from 'react-pure-loaders';

const ButtonLoadMore = (props) => {
    return (
        <div className="col-lg-12 pt-5 text-center">
            <Link to="/" className="btn-load-more" onClick={() => props.loadmore()}>Load More</Link>
        </div>
    )
}

const LoadingMore = () => {
    return(
        <div className="col-lg-12 pt-5 text-center" style={{paddingLeft:'39%'}}>
            <div className="loading" style={
                {
                    paddingTop:'1%',
                    backgroundColor:'#894545',
                    width:'37%',
                    borderRadius:'20px'
                }}>
                <BallBeat 
                    color={'#FFFFFF'}
                    loading={true}
                />
            </div>
        </div>
        
    )
}

const MoreArticle = (props) => {
    return(
        <Fragment>
            <div className="col-lg-12 pt-3 wrapper-list">
                <div className="img-list">
                    <img src={image5} alt="" />
                </div>
                <div className="detail-list">
                    <span className="detail-title"><strong>7 Air-Cleaning Tropicals You Need in Your Space</strong></span><br/>
                    <span className="detail-desc">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                </div>
            </div>
            <div className="col-lg-12 pt-3 wrapper-list">
                <div className="img-list">
                    <img src={image2} alt="" />
                </div>
                <div className="detail-list">
                    <span className="detail-title"><strong>Why Wireframing is an Essential Skill for More Than just Designers!</strong></span><br/>
                    <span className="detail-desc">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                </div>
            </div>
            <div className="col-lg-12 pt-3 wrapper-list">
                <div className="img-list">
                    <img src={image3} alt="" />
                </div>
                <div className="detail-list">
                    <span className="detail-title"><strong>7 Air-Cleaning Tropicals You Need in Your Space</strong></span><br/>
                    <span className="detail-desc">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                </div>
            </div>
            <div className="col-lg-12 pt-3 wrapper-list">
                <div className="img-list">
                    <img src={image4} alt="" />
                </div>
                <div className="detail-list">
                    <span className="detail-title"><strong>7 Air-Cleaning Tropicals You Need in Your Space</strong></span><br/>
                    <span className="detail-desc">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                </div>
            </div>
            <div className="col-lg-12 pt-5 text-center">
                <Link to="/" className="btn-load-more" onClick={() => props.nomore()}>No More</Link>
            </div>
        </Fragment>
    )
}

class Detail extends React.Component {

    state = {
        isLoading : false,
        afterLoading : false,
        
    }

    Loading = () => {
        this.setState({
            isLoading : true,
        },() => {
            var counter=0;
            var loadingInterval = setInterval(() => {
                counter++
                // console.log(counter)
                if(counter === 5){
                    clearInterval(loadingInterval)
                }
            },500)
            
            setTimeout(() => {
                this.setState({
                    afterLoading : true,
                })
            }, 2000)
        })
    }

    LoadingLess = () => {
        setTimeout(() => {
            this.setState({
                afterLoading : false,
                isLoading : true,
            }, () => {
                setTimeout(() => {
                    this.setState({
                        isLoading : false,
                    })
                }, 1000)
            })
        },500)
    }


    render(){
        return (
            <Fragment>
                <div className="col-lg-12 pt-5 wrapper-list">
                    <div className="img-list">
                        <img src={image5} alt="" />
                    </div>
                    <div className="detail-list">
                        <span className="detail-title"><strong>7 Air-Cleaning Tropicals You Need in Your Space</strong></span><br/>
                        <span className="detail-desc">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                    </div>
                </div>
                <div className="col-lg-12 pt-3 wrapper-list">
                    <div className="img-list">
                        <img src={image2} alt="" />
                    </div>
                    <div className="detail-list">
                        <span className="detail-title"><strong>Why Wireframing is an Essential Skill for More Than just Designers!</strong></span><br/>
                        <span className="detail-desc">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                    </div>
                </div>
                <div className="col-lg-12 pt-3 wrapper-list">
                    <div className="img-list">
                        <img src={image3} alt="" />
                    </div>
                    <div className="detail-list">
                        <span className="detail-title"><strong>7 Air-Cleaning Tropicals You Need in Your Space</strong></span><br/>
                        <span className="detail-desc">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                    </div>
                </div>
                <div className="col-lg-12 pt-3 wrapper-list">
                    <div className="img-list">
                        <img src={image4} alt="" />
                    </div>
                    <div className="detail-list">
                        <span className="detail-title"><strong>7 Air-Cleaning Tropicals You Need in Your Space</strong></span><br/>
                        <span className="detail-desc">Here’s where you can provide a short except or summary of the article to tease the reader to click your link.. <strong><Link to="/detail">Read More</Link></strong></span>
                    </div>
                </div>
                {
                    this.state.afterLoading === false ? this.state.isLoading === true ? <LoadingMore /> : <ButtonLoadMore loadmore={() => this.Loading()}/> : ''
                }

                {
                    this.state.afterLoading === true ? <MoreArticle nomore={() => this.LoadingLess()} /> : ''
                }
    
            </Fragment>
        )
    }
}

export default Detail;