import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home, About, Detail, Contact, Category, Welcome} from './pages/index';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import { Header, Banner, Main } from './components';
import Footer from './components/Footer/Footer';
import $ from 'jquery/dist/jquery.min.js';

function App() {

	// detection distance div to top
	/* $(window).scroll(function() {
		var distance = String ($(window).scrollTop());
		var div_main = $('div.main-content').offset().top;
		var div_main_wrapper = $('.main-wrapper').offset().top;

		if(Number (distance) + 70 >= div_main){
			if(Number (distance) + 130 <= div_main_wrapper){
				$('div.main-list').addClass('wrap-main-list');
				$('div.main-list').children().first().css('width','75%');
				$('div.main-list').children().last().css('width','75%');
			}else{
				$('div.main-list').removeClass('wrap-main-list');
				$('div.main-list').children().first().css('width','90%');
				$('div.main-list').children().last().css('width','90%');
			}
		}else {
			$('div.main-list').removeClass('wrap-main-list');
			$('div.main-list').children().first().css('width','90%');
			$('div.main-list').children().last().css('width','90%');
		}
	}) */

	return (
		<Router>
			<Fragment>
				<div className="container_custom d-flex justify-content-center align-items-center">
					<Main />
					{/* <Header /> */}
					{/* <Footer /> */}
				</div>
			</Fragment>
		</Router>
	);
}

export default App;
