import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
// import './Headline.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../img/gb1.png';
import MainSubscribe from '../../../components/MainSubscribe/MainSubscribe';
import ListArticle from '../../../components/ListArticle/ListArticle';
import NewsFromCategory from '../../../components/NewsFromCategory/NewsFromCategory';
import FooterSubscribe from '../../../components/FooterSubscribe/FooterSubscribe';
import Education from './Education';
import Diary from './Diary';
import Health from './Health';

class MainCategory extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="container pt-4">
                    <div className="row">
    
                        <Education />

                        <Diary />

                        <Health />
    
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

export default MainCategory;