import React, { Fragment } from 'react';
import './ListArticle.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery/dist/jquery.min.js';

class ListArticle extends React.Component {
    componentDidMount(){
        setTimeout(() => {
               
            // list title
            $('ul.ul-title').hide()
            $('li.month svg.fa-arrow-alt-circle-down').hide();
    
            $('li.month').click(function(){
                $(this).css('cursor','pointer');
                
                console.log($(this).children().first())
                $(this).children().first().show();
                $(this).children().first().next().hide();
    
                if($(this).hasClass('after_click')){
                    $(this).children().first().hide();
                    $(this).children().first().next().show();
                    $(this).removeClass('after_click')
                    $(this).removeClass('bold')
                }else{
                    $(this).addClass('after_click');
                    $(this).addClass('bold')
                }
    
                $(this).children().last().slideToggle();
            })
            // list title
        },1000)
    }

    render(){
        return (
            <Fragment>
                <div className="col-lg-12 list-article mt-2">
                    <div>
                        <p className="pt-2"><strong>Arsip Blog</strong></p>
                    </div>
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={{fontSize: '12px',backgroundColor:' #d5a4a4'}}>
                                {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
                                <FontAwesomeIcon icon={faArrowAltCircleDown} />
                                <strong> 2020</strong>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item month" style={{fontSize: '12px',backgroundColor: '#d5a4a4'}}>
                                        <FontAwesomeIcon icon={faArrowAltCircleDown} />
                                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                        {/* <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> */}
                                        <strong> Januari (3)</strong>
                                        <ul className="list-group list-group-flush ul-title">
                                            <li className="list-group-item" style={{fontSize: '12px',backgroundColor: '#d5a4a4'}}>Ini Alasan Kenapa Pendaki Gunung Adalah Pacar Idaman</li>
                                            <li className="list-group-item" style={{fontSize: '12px',backgroundColor: '#d5a4a4'}}>Ini Alasan Kenapa Pendaki Gunung Adalah Pacar Idaman</li>
                                            <li className="list-group-item" style={{fontSize: '12px',backgroundColor: '#d5a4a4'}}>Ini Alasan Kenapa Pendaki Gunung Adalah Pacar Idaman</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item month" style={{fontSize: '12px',backgroundColor: '#d5a4a4'}}>
                                        <FontAwesomeIcon icon={faArrowAltCircleDown} />
                                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                        {/* <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        <i className="fa fa-angle-right" aria-hidden="true"></i> */}
                                        <span> Februari (3)</span>
                                        <ul className="list-group list-group-flush ul-title">
                                            <li className="list-group-item" style={{fontSize: '12px',backgroundColor: '#d5a4a4'}}>Ini Alasan Kenapa Pendaki Gunung Adalah Pacar Idaman</li>
                                            <li className="list-group-item" style={{fontSize: '12px',backgroundColor: '#d5a4a4'}}>Ini Alasan Kenapa Pendaki Gunung Adalah Pacar Idaman</li>
                                            <li className="list-group-item" style={{fontSize: '12px',backgroundColor: '#d5a4a4'}}>Ini Alasan Kenapa Pendaki Gunung Adalah Pacar Idaman</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className="list-group-item" style={{fontSize: '12px',backgroundColor: '#d5a4a4'}}>2020</li> */}
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ListArticle;