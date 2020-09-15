import React, { Fragment } from 'react';
import Header from '../Header/Header';
// import { Welcome } from '../../pages';
import {Contact, Profile, Resume, Portfolio, Welcome} from '../../pages/index';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

class Content extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="ml-3 d-flex flex-column w-100 h-100">
                    <Header />
                    <div className="bg-white overflow-auto">
                        {/* <div className="mx-2 my-2" style={{backgroundColor:'#022F58'}}> */}
                            <Route path="/" exact component={Welcome} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/resume" component={Resume} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/contact" component={Contact} />
                        {/* </div> */}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Content;