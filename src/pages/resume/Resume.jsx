import React from 'react';
import $ from 'jquery/dist/jquery.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleDown, faArrowRight, faCoffee, faCircle } from '@fortawesome/free-solid-svg-icons'
import './Resume.css'

class Resume extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.location.pathname == '/resume'){
            $('a.resume').addClass('active')
            $('a.profile').removeClass('active')
            $('a.contact').removeClass('active')
            $('a.home').removeClass('active')
            $('a.portfolio').removeClass('active')
        }
    }

    render(){
        return (
            <div className="mx-2 my-2" style={{backgroundColor:'#022F58'}}>
                <div className="text-center d-flex flex-column justify-content-center align-items-center h-100 px-2 py-5 text-white h-100">
                    <div className="experience text-white">
                        <h2 className="font-weight-bold text-white pb-2" style={{borderBottom:'3px solid #2168AA',display:'inline'}}>My Experience</h2>
                        <div className="row py-5">
                            <div className="col-md-6">
                                <div className="text-left d-flex time-first">

                                    <span className="font-weight-bold">April 2016 - October 2017</span>

                                    <div className="info-job-small-width pt-2">
                                        <span className="font-weight-bold">Product Analyst, PT Dinamika Cipta Media</span><br/>
                                        <span style={{fontSize:12}}>Research the product and build a science book experiment</span><br/>
                                    </div>

                                    <div className="pt-2 rounded-first">
                                        <FontAwesomeIcon icon={faCircle} color="white" />
                                    </div>
                                </div>
                                <div className="text-left d-flex time-second">
                                    <span className="font-weight-bold">October 2018 - present</span>

                                    <div className="info-job-small-width pt-2">
                                        <span className="font-weight-bold">Web Developer, PT  Engineering Career Center</span><br/>
                                        <span style={{fontSize:12}}>Develop Web Application according the needs of the career center</span><br/>
                                        <span style={{fontSize:12}}>Repair Web Application when there is a system error</span>
                                    </div>

                                    <div className="pt-2 rounded-second">
                                        <FontAwesomeIcon icon={faCircle} color="white" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 information-large-width" style={{borderLeft:'5px solid white', position:'relative'}}>
                                <div className="text-left pl-4">
                                    <span className="font-weight-bold">Product Analyst, PT Dinamika Cipta Media</span><br/>
                                    <span style={{fontSize:12}}>Research the product and build a science book experiment</span><br/>
                                </div>
                                <div className="text-left pl-4" style={{paddingTop:'25%'}}>
                                    <span className="font-weight-bold">Web Developer, PT  Engineering Career Center</span><br/>
                                    <span style={{fontSize:12}}>Develop Web Application according the needs of the career center</span><br/>
                                    <span style={{fontSize:12}}>Repair Web Application when there is a system error</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Resume;