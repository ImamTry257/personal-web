import React from 'react';
import Photo from '../Photo/Photo';
import Content from '../Content/Content';

class Main extends React.Component{
    render(){
        return (
            <div className="main-wrapper d-flex flex-row h-75 w-75">
                {/* <Photo /> */}
                <Content />
            </div>
        )
    }
}

export default Main;