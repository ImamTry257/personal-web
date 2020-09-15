import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimaryTagline from '../../components/PrimaryTagline/PrimaryTagline';
import MainAbout from './componentAbout/MainAbout';
import '../../js/jquery-loader';
import $ from 'jquery/dist/jquery.min.js';

class About extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.location.pathname == '/about'){
            $('a.about').addClass('active')
            $('a.contact').removeClass('active')
            $('a.category').removeClass('active')
            $('a.home').removeClass('active')

            // if window at not top
            var distance = String ($(window).scrollTop());
            if(distance > 0){
                $("html, body").animate({ scrollTop: Number ($('div.main-content').offset().top) - 70 }, 1500, 'swing');
            }
        }
    }

    render(){
        return (
            <Fragment>
                <PrimaryTagline />
                <MainAbout />
            </Fragment>
        )
    }
}

export default About;