import React, { Fragment } from 'react';
import MainSubscribe from '../../../components/MainSubscribe/MainSubscribe';
import ListArticle from '../../../components/ListArticle/ListArticle';
import NewsFromCategory from '../../../components/NewsFromCategory/NewsFromCategory';
import FooterSubscribe from '../../../components/FooterSubscribe/FooterSubscribe';
import './css/MainAbout.css';

const DetailAbout = () => {
    return (
        <div className="col-lg-8 right-content">
            <div className="main-content">
                <div className="about-me pb-5">
                    <h1 className="title-about-me">About Me</h1>
                    <div className="detail-about-me text-justify">
                        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span><br/>
                        <span className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex quasi cupiditate, similique possimus fugit repellendus ipsa nesciunt facilis repudiandae illo sunt recusandae id quisquam quo inventore? Repellat, sunt? Accusantium?</span><br/>
                        <span className="pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis repellat explicabo ratione animi harum, rerum, voluptate obcaecati debitis voluptatibus ipsa eveniet nesciunt nihil nostrum, odio perferendis mollitia cupiditate cumque ea.</span>
                    </div>
                </div>

                <div className="about-writer">
                    <h1 className="title-about-writer">About Writer</h1>
                    <div className="detail-about-writer text-justify">
                        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span><br/>
                        <span className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex quasi cupiditate, similique possimus fugit repellendus ipsa nesciunt facilis repudiandae illo sunt recusandae id quisquam quo inventore? Repellat, sunt? Accusantium?</span><br/>
                        <span className="pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis repellat explicabo ratione animi harum, rerum, voluptate obcaecati debitis voluptatibus ipsa eveniet nesciunt nihil nostrum, odio perferendis mollitia cupiditate cumque ea.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

class MainAbout extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="container pt-4">
                    <div className="row">

                        <DetailAbout />
    
                        {/* right content */}
                        <div className="col-lg-4 main-list">
                            <MainSubscribe />
    
                            {/* list article */}
                            <ListArticle />
                        </div>
                        {/* end right content */}
    
                        <NewsFromCategory />
    
                        <FooterSubscribe />
    
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MainAbout;