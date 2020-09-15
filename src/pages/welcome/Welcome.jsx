import React, { Fragment } from 'react';
import Photo from '../../components/Photo/Photo';
import $ from 'jquery/dist/jquery.min.js';
import { Document } from 'react-pdf'
// import CV from '../../../public/imam_try_wibowo.pdf';

class Welcome extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
    numPages: null,
    pageNumber: 1,
    }

    onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
    }

    componentDidMount(){
        if(this.props.location.pathname == '/'){
            $('a.home').addClass('active')
            $('a.profile').removeClass('active')
            $('a.contact').removeClass('active')
            $('a.resume').removeClass('active')
            $('a.portfolio').removeClass('active')
        }
    }

    onDocumentLoadSuccess = () => {
        alert('berhasil')
    }

    render(){
        const { pageNumber, numPages } = this.state;
        
        return (
            <Fragment>
                <div className="mx-2 my-2" style={{backgroundColor:'#022F58'}}>
                    <Photo />
                    <div className="px-2 py-2 text-center d-flex flex-column justify-content-center align-items-center">
                        <span className="text-white py-2">Hi, I'm</span>
                        <h2 className="font-weight-bold text-white">Imam Try Wibowo</h2>
                        <span className="text-white py-2">Web Developer</span>
                        <span className="text-white py-2">I’m professional Web Developer. I always do my best to every project.</span>
                        <div className="mt-5 mb-3 pb-5">
                            {/* <Document
                                file="../../../public/imam_try_wibowo.pdf"
                                externalLinkTarget='_blank'
                                renderMode='svg'
                                onSourceSuccess={(ref) => { this.myDocument = ref; }}
                                // onLoadSuccess={this.onDocumentLoadSuccess()}
                            ></Document> */}
                            <a href="http://imamtrywibowo.com/cv/Imam%20try%20wibowo.pdf" target="_blank" download className="p-3 font-weight-bold text-white" style={{backgroundColor: '#0F4577'}}>Get My CV</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Welcome;