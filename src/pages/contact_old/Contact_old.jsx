import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimaryTagline from '../../components/PrimaryTagline/PrimaryTagline';
import '../../js/jquery-loader';
import $ from 'jquery/dist/jquery.min.js';
import MainContact from './componentContact/MainContact';

class Contact_old extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.location.pathname == '/contact-me'){
            $('a.contact').addClass('active')
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
                <MainContact />
            </Fragment>
        )
    }
}

export default Contact_old;