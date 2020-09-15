import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../../css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery/dist/jquery.min.js';
import { Welcome } from '../../pages';

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

        setTimeout(() => {
            
            $('div.main_menu').each(function(){

                $(this).on('mouseenter',function(){
                    $(this).addClass('after_click');
                    if($(this).hasClass('main_menu')){
                        var menu = $(this);
                        runMenu(menu)
                    }
                })
    
                $(this).on('click',function(e){
                    if($(this).attr('class') === 'main_menu'){
                        e.preventDefault();
                        $(this).addClass('after_click');
                        if($(this).hasClass('main_menu')){
                            runMenu($(this))
                        }
                    }
                })
    
                $(this).on('mouseleave',function(){
                    if($(this).hasClass('main_menu')){
                        $(this).removeClass('active_menu');
                        $(this).next().hide()
                    }
                })
            })
    
            $('div.sub_menu').on('mouseenter',function(){
                $(this).show()
                $(this).prev().addClass('active_menu')
                if($(this).prev().hasClass('active_sub_menu')){
                    $(this).prev().addClass('active_menu');
                }
            })
    
            $('div.sub_menu').on('mouseleave',function(){
                $(this).prev().removeClass('active_menu')
                $('div.sub_menu').each(function(){
                    $(this).removeClass('active_sub_menu');
                })
                $(this).hide()
            })
    
            $('#navbar-tbl').on('click',function(){
                $('div.sub_menu').each(function(){
                    $(this).hide();
                })
            })
    
            runHeaderMenu();
    
            runModalLogin()
    
            // detection distance div to top
            $(window).scroll(function() {
                runHeaderMenu();
            })
    
            $(window).on('resize',function(){
                runModalLogin()
            })
    
            function runMenu(menu){
                menu.addClass('active_menu');
                menu.next().show()
                menu.next().addClass('active_sub_menu')
            }
    
            function runHeaderMenu(){
                var distance = String ($(window).scrollTop());
                if(Math.round(distance) > Number (85)){
                    // $('.menu').addClass('scroll_menu');
                    if(window.outerWidth > 993){
                        $('#navbarNavDropdown').addClass('center_menu');
                    }
                }else{
                    // $('.menu').removeClass('scroll_menu');
                    $('#navbarNavDropdown').removeClass('center_menu');
                }
                runActiveMenu(distance)
            }
    
            function runActiveMenu(distance){
                $('.main_menu').children().each(function(e){
                    if($(this).hasClass('actived') === true){
                        if(Math.round(distance) > Number (85)){
                            $(this).css('color','white')
                        }else{
                            $(this).css('color','#ff049d')
                        }
                    }
                })
            }
    
            function runModalLogin(){
                if(window.outerWidth < 993){
                    $("li#li-menu").hide();
    
                    var login = $('a.login-title');
                    login.attr('data-toggle','modal');
                    login.attr('data-target','#exampleModalCenter');
    
                    login.on('click',function(e){
                        e.preventDefault();
                    })
    
                    $('ul.nav.navbar-nav.navbar-center').removeClass('navbar-center')
                }else{
                    $("li#li-menu").show();
                }
            }
    
            // click menu kontak kami
            $('.link-kontak-kami-menu').on('click',function(e){
                e.preventDefault()
                $("html, body").animate({ scrollTop: Number ($('.info')[0].offsetTop) - Number (85) }, 1500, 'swing');
            })
            
            // js to header menu
            $(".nav-button").click(function(){
    
                if($(".nav-button").text() === "☰"){
                $(".nav-button").text("☰");
                }else{
                $(".nav-button").text("☰");
                }
    
                $('li#li-menu').toggle(500);
                // $("#parent-li").slideToggle();
            });
    
    
            // list title
            $('ul#ul-title').hide()
            $('li#month i.fa-angle-down').hide();
    
            $('li#month').click(function(){
                $(this).css('cursor','pointer');
    
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
                <div className="head">
                    <div className="menu" >
                        {/* <nav> */}
                            <ul className="d-flex justify-content-around flex-row">
                                <button className="nav-button">☰</button>
                                <li id="li-menu">
                                    <Link to="/" className="home px-5">Home</Link>
                                </li>
                                <li id="li-menu">
                                    <Link to="/profile" className="profile px-5">Profile</Link>
                                </li>
                                <li id="li-menu">
                                    <Link to="/resume" className="resume px-5">Resume</Link>
                                </li>
                                <li id="li-menu">
                                    <Link to="/portfolio" className="portfolio px-5">Portfolio</Link>
                                </li>
                                <li id="li-menu">
                                    <Link to="/contact" className="contact px-5">Contact</Link>
                                </li>
                            </ul>
                        {/* </nav> */}
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Header;