import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimaryTagline from '../../components/PrimaryTagline/PrimaryTagline';
import MainBlog from './componentDetail/MainBlog';
import '../../js/jquery-loader';
import $ from 'jquery/dist/jquery.min.js';

class Detail extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.location.pathname == '/detail'){
            $('a.home').addClass('active')
            $('a.category').removeClass('active')
            $('a.contact').removeClass('active')

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
                <MainBlog />
            </Fragment>
        )
    }
}

export default Detail;