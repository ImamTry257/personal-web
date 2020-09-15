import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header, Banner} from '../../components/index';
import Headline from './componentHome/Headline';
import $ from 'jquery/dist/jquery.min.js';

class Home extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.location.pathname == '/'){
            $('a.home').addClass('active')
            $('a.category').removeClass('active')
            $('a.contact').removeClass('active')
        }
    }

    render(){
        return (
            <Fragment>
                <Banner />
                <Headline />
            </Fragment>
        )
    }
}

export default Home;