import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../../img/gb1.png';
import './css/DetailBlog.css';

const Comment = () => {
    return (
        <div className="input-comment">
            <textarea cols="0" rows="8" className="w-100 mb-2" placeholder="Tulis Komentar Anda"></textarea>
            <div className="warning-comment px-3">
                <span>Berkomentarlah secara bijaksana dan bertanggung jawab. Komentar sepenuhnya menjadi tanggung jawab komentator seperti diatur dalam UU ITE</span>
            </div>
            <div className="text-right py-3 wrap-sent">
                <Link className="sent-comment px-4 py-2" to="/">KIRIM</Link>
            </div>
        </div>
    )
}

class DetailBlog extends React.Component {
    render(){
        return (
            <Fragment>
                {/* left content */}
                <div className="col-lg-8 right-content">
                    <div className="main-content">
                        <h1 className="title-post-blog">Why Wireframing is an Essential Skill for More Than just Designers!</h1>
                        <p className="date-post-blog">blog.bykarya.com - 17/06/2020, 20:34 WIB</p>
                        <div className="detail-content-post pt-3">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia magni 
                            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                        </div>
                        <img src={image} alt=""/>
                        <div className="detail-content-post">
                            <p className="py-3">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                        </div>

                        <Comment />
                    </div>
                </div>
                {/* end left content */}
            </Fragment>
        )
    }
}

export default DetailBlog;