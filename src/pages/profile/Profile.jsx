import React from 'react';
import $ from 'jquery/dist/jquery.min.js';
import './Profile.css';

class Profile extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.location.pathname == '/profile'){
            $('a.profile').addClass('active')
            $('a.home').removeClass('active')
            $('a.contact').removeClass('active')
            $('a.resume').removeClass('active')
            $('a.portfolio').removeClass('active')
        }
    }

    render(){
        return (
            <div className="mx-2 my-2" style={{backgroundColor:'#022F58'}}>
                <div className="px-2 py-5 w-100 text-white">
                    <div className="about-me text-center">
                        <div className="pb-3">
                            <h2 className="font-weight-bold text-white pb-2 title-profile">My Profile</h2>
                        </div>
                        <div className="information">
                            <div className="row py-1">
                                <div className="col-md-3 offset-md-4 text-left">
                                    <span>Name :</span> 
                                </div>
                                <div className="col-md-3 text-left">
                                    <span>Imam Try Wibowo</span>
                                </div>
                            </div>
                        </div>
                        <div className="row py-1 information">
                            <div className="col-md-3 offset-md-4 text-left">
                                <span>Date of birth :</span>
                            </div>
                            <div className="col-md-3 text-left">
                                <span>March 25th, 1993</span>
                            </div>
                        </div>
                        <div className="row py-1 information">
                            <div className="col-md-3 offset-md-4 text-left">
                                <span>Phone :</span>
                            </div>
                            <div className="col-md-3 text-left">
                                <span>+62813-2979-8384</span>
                            </div>
                        </div>
                        <div className="row py-1 information">
                            <div className="col-md-3 offset-md-4 text-left">
                                <span>Website :</span>
                            </div>
                            <div className="col-md-3 text-left">
                                <span><a href="http://imamtrywibowo.com" target="_blank">imamtrywibowo.com</a></span>
                            </div>
                        </div>
                        <div className="row py-1 information">
                            <div className="col-md-3 offset-md-4 text-left">
                                <span>Email :</span>
                            </div>
                            <div className="col-md-3 text-left">
                                <span>imamtrywibowo@gmail.com</span>
                            </div>
                        </div>
                        <div className="row py-1 information">
                            <div className="col-md-3 offset-md-4 text-left">
                                <span>Location :</span>
                            </div>
                            <div className="col-md-3 text-left">
                                <span>Yogyakarta</span>
                            </div>
                        </div>
                    </div>

                    <div className="my-education text-center mt-4">
                        <div className="pb-3">
                            <h2 className="font-weight-bold text-white pb-2" style={{borderBottom:'3px solid #2168AA',display:'inline'}}>My Education</h2>
                        </div>
                        <div className="row py-1 information">
                            <div className="col-md-3 offset-md-4 text-left">
                                <span>School :</span>
                            </div>
                            <div className="col-md-3 text-left">
                                <span>Yogyakarta State University</span>
                            </div>
                        </div>
                        <div className="row py-1 information">
                            <div className="col-md-3 offset-md-4 text-left">
                                <span>Major :</span>
                            </div>
                            <div className="col-md-3 text-left">
                                <span>Physics (2011 - 2016)</span>
                            </div>
                        </div>
                        <div className="row py-1 information">
                            <div className="col-md-3 offset-md-4 text-left">
                                <span>GPA :</span>
                            </div>
                            <div className="col-md-3 text-left">
                                <span>3.38</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;