import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import './Headline.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../img/gb1.png';
import Detail from './Detail';
import MainSubscribe from '../../../components/MainSubscribe/MainSubscribe';
import ListArticle from '../../../components/ListArticle/ListArticle';
import MostPopular from './MostPopular';
import NewsFromCategory from '../../../components/NewsFromCategory/NewsFromCategory';
import FooterSubscribe from '../../../components/FooterSubscribe/FooterSubscribe';

const Headline = () => {
    return (
        <Fragment>
            <div className="container pt-4">
                <div className="row">

                    {/* right content */}
                    <div className="col-lg-8 right-content main-content">
                        <div className="img-headline">
                            <img src={image} alt="" width="700"/>
                        </div>
                        
                        <Detail />

                        <MostPopular />

                    </div>
                    {/* end right content */}


                    {/* left content */}
                    <div className="col-lg-4 main-list">
                        <MainSubscribe />

                        {/* list article */}
                        <ListArticle />
                    </div>
                    {/* end left content */}

                    <NewsFromCategory />

                    <FooterSubscribe />

                </div>
            </div>
        </Fragment>
    )
}

export default Headline;