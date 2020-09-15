import React, {Fragment} from 'react';
import $ from 'jquery/dist/jquery.min.js';

class Contact extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(this.props.location.pathname == '/contact'){
            $('a.contact').addClass('active')
            $('a.home').removeClass('active')
            $('a.profile').removeClass('active')
            $('a.resume').removeClass('active')
            $('a.portfolio').removeClass('active')
        }
    }

    render(){
        return (
            <Fragment>
                <div className="mx-2 my-2" style={{backgroundColor:'#022F58'}}>
                    <div className="px-2 py-5 text-white h-100">
                        <div className="contact text-center">
                            <h2 className="font-weight-bold text-white pb-2" style={{borderBottom:'3px solid #2168AA',display:'inline'}}>My Contact</h2>
                            <div className="px-2 py-5 text-center d-flex flex-column justify-content-center align-items-center">
                                <span className="text-white py-2">Jl. Kaliurang KM.5, Karangwuni, CT, Depok, Sleman, DIY<br/>55281</span>
                                <span className="text-white py-2">+6281-2979-8384</span>
                                <span className="text-white py-2">imamtrywibowo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contact;