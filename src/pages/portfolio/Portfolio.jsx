import React from 'react';
import bykarya from '../../img/bykarya.png';
import rs from '../../img/rs.png';
import blog from '../../img/blog.png';
import $ from 'jquery/dist/jquery.min.js';
import './Portfolio.css'

class Portfolio extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.location.pathname == '/portfolio'){
            $('a.portfolio').addClass('active')
            $('a.home').removeClass('active')
            $('a.contact').removeClass('active')
            $('a.resume').removeClass('active')
            $('a.profile').removeClass('active')
        }
    }

    render(){
        return (
            <div className="mx-2 my-2" style={{backgroundColor:'#022F58'}}>
                <div className="px-2 py-5 text-white">
                    <div className="portfolio text-center py-2">
                        <h2 className="font-weight-bold text-white pb-2" style={{borderBottom:'3px solid #2168AA',display:'inline'}}>My Portfolio</h2>
                        <div className="image-portfolio row py-5">
                            <div className="col-md-4">
                                <a href="https://bykarya.com" target="_blank">
                                    <img src={bykarya} alt="" className="rounded" width="200"/>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="http://blog.bykarya.com" target="_blank">
                                    <img src={blog} alt="" className="rounded" width="200"/>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="http://rs.bykarya.com" target="_blank">
                                    <img src={rs} alt="" className="rounded" width="200"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;